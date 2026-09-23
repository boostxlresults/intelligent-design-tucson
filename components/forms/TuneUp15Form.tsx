'use client';

import { useState } from 'react';
import { attributionFields } from '@/lib/attribution';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, CheckCircle, Phone } from 'lucide-react';
import { trackFormSubmit } from '@/lib/analytics';
import { DNI_SOURCE_PHONE } from '@/lib/campaignPhones';

/**
 * Four-field booking form for /lp/15-tune-up: name, phone, zip, preferred day.
 *
 * Posts to the existing /api/ac-tune-up endpoint, which already accepts exactly
 * these fields. It sends offerLabel "$15" and pageSlug "15-tune-up" so the CSR
 * email and the SpeedToLead payload say $15 rather than the $28.88 the original
 * tune-up page sends. /ac-tune-up-2888 omits both and keeps its old behavior
 * through the schema defaults.
 */
const DAYS = ['No preference', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function TuneUp15Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    preferredDay: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/ac-tune-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          offerLabel: '$15',
          pageSlug: '15-tune-up',
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
      trackFormSubmit('tune_up_15_form', 'hvac_tuneup');
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
            A Customer Care team member will call to lock in your $15 Factory
            Refresh Tune-Up. Want it booked right now? Call us.
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
        <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-tuneup-15">
          <div>
            <label htmlFor="tu-name" className="mb-1.5 block text-[15px] font-semibold text-foreground">
              Name <span className="text-[#C8101F]">*</span>
            </label>
            <input id="tu-name" name="name" type="text" required autoComplete="name"
              value={formData.name} onChange={handleChange} className={field} />
          </div>

          <div>
            <label htmlFor="tu-phone" className="mb-1.5 block text-[15px] font-semibold text-foreground">
              Phone <span className="text-[#C8101F]">*</span>
            </label>
            <input id="tu-phone" name="phone" type="tel" required autoComplete="tel"
              value={formData.phone} onChange={handleChange} className={field} />
          </div>

          <div>
            <label htmlFor="tu-zip" className="mb-1.5 block text-[15px] font-semibold text-foreground">
              ZIP code <span className="text-[#C8101F]">*</span>
            </label>
            <input id="tu-zip" name="zip" type="text" inputMode="numeric" required autoComplete="postal-code"
              value={formData.zip} onChange={handleChange} className={field} />
          </div>

          <div>
            <label htmlFor="tu-day" className="mb-1.5 block text-[15px] font-semibold text-foreground">
              Preferred day
            </label>
            <select id="tu-day" name="preferredDay" value={formData.preferredDay}
              onChange={handleChange} className={field}>
              <option value="">Select a day</option>
              {DAYS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {error && <p className="text-[15px] font-semibold text-[#C8101F]">{error}</p>}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            data-testid="button-submit-tuneup-15"
            className="h-auto w-full bg-[#C8101F] py-4 text-[17px] font-extrabold text-white hover:brightness-110"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
              </>
            ) : (
              'Book My $15 Tune-Up'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
