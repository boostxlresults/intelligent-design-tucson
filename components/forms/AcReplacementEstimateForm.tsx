'use client';

import { useState } from 'react';
import { attributionFields } from '@/lib/attribution';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, CheckCircle, Phone } from 'lucide-react';
import { trackFormSubmit } from '@/lib/analytics';
import { DNI_SOURCE_PHONE } from '@/lib/campaignPhones';

/**
 * Four-field replacement-estimate form for /lp/new-ac-unit-cost-tucson.
 *
 * Forked from HVACInventoryForm (2026-09-23) rather than trimming it, because
 * that form is also used by /inventory-release-event and shortening it there
 * was not asked for. Same endpoint and the same attribution payload, so leads
 * land in the existing place; only the fields the visitor sees differ.
 *
 * Name, phone, zip, and an optional free-text field. Nothing else: every extra
 * field on a paid landing page costs completions.
 */
export function AcReplacementEstimateForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zipCode: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/hvac-inventory-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formSource: 'ac-replacement-estimate',
          ...attributionFields(),
        }),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to submit form';
        try {
          const data = await response.json();
          errorMessage = data?.error || errorMessage;
        } catch {
          // Response wasn't JSON
        }
        throw new Error(errorMessage);
      }

      setIsSuccess(true);
      trackFormSubmit('ac_replacement_estimate_form', 'hvac_purchase');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-2 border-green-500">
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
          <h3 className="mb-2 text-2xl font-bold">Request received</h3>
          <p className="mb-6 text-muted-foreground">
            A Customer Care team member will call to set up your free in-home
            replacement estimate. Want it sooner? Call us now.
          </p>
          <Button
            asChild
            size="lg"
            className="h-auto bg-[#C8101F] px-8 py-6 text-lg font-bold text-white hover:brightness-110"
          >
            <a href={`tel:${DNI_SOURCE_PHONE.tel}`} data-testid="button-call-success">
              <Phone className="mr-2 h-5 w-5" /> {DNI_SOURCE_PHONE.display}
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const field =
    'w-full rounded-md border border-input bg-background px-4 py-3 text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C8101F]';

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-ac-estimate">
          <div>
            <label htmlFor="ac-name" className="mb-1.5 block text-[15px] font-semibold text-foreground">
              Name <span className="text-[#C8101F]">*</span>
            </label>
            <input
              id="ac-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className={field}
            />
          </div>

          <div>
            <label htmlFor="ac-phone" className="mb-1.5 block text-[15px] font-semibold text-foreground">
              Phone <span className="text-[#C8101F]">*</span>
            </label>
            <input
              id="ac-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className={field}
            />
          </div>

          <div>
            <label htmlFor="ac-zip" className="mb-1.5 block text-[15px] font-semibold text-foreground">
              ZIP code <span className="text-[#C8101F]">*</span>
            </label>
            <input
              id="ac-zip"
              name="zipCode"
              type="text"
              inputMode="numeric"
              required
              autoComplete="postal-code"
              value={formData.zipCode}
              onChange={handleChange}
              className={field}
            />
          </div>

          <div>
            <label htmlFor="ac-details" className="mb-1.5 block text-[15px] font-semibold text-foreground">
              What&rsquo;s going on? <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="ac-details"
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleChange}
              className={field}
            />
          </div>

          {error && <p className="text-[15px] font-semibold text-[#C8101F]">{error}</p>}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            data-testid="button-submit-ac-estimate"
            className="h-auto w-full bg-[#C8101F] py-4 text-[17px] font-extrabold text-white hover:brightness-110"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
              </>
            ) : (
              'Get My Free In-Home Estimate'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
