'use client';

import { useState, useEffect } from 'react';
import { attributionFields } from '@/lib/attribution';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Loader2, CheckCircle, Award } from 'lucide-react';
import { useScheduler } from '@/components/integrations/ServiceTitanScheduler';
import { trackFormSubmit } from '@/lib/analytics';

interface FormData {
  clientFirstName: string;
  clientLastName: string;
  realtorName: string;
  clientEmail: string;
  clientPhone: string;
  propertyAddress: string;
  zipCode: string;
}

export function RealtorsOfferForm() {
  const [formData, setFormData] = useState<FormData>({
    clientFirstName: '',
    clientLastName: '',
    realtorName: '',
    clientEmail: '',
    clientPhone: '',
    propertyAddress: '',
    zipCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { openScheduler } = useScheduler();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/realtors-offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ...attributionFields() }),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        if (response.ok) {
          setIsSuccess(true);
          trackFormSubmit('realtors_offer_form', 'realtor_referral');
          return;
        }
        throw new Error('Failed to process registration');
      }

      if (!response.ok) {
        throw new Error(result?.error || 'Failed to submit form');
      }

      setIsSuccess(true);
      trackFormSubmit('realtors_offer_form', 'realtor_referral');

      setTimeout(() => {
        openScheduler();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
          <h3 className="text-2xl font-bold mb-2" data-testid="text-success-title">Thank You!</h3>
          <p className="text-muted-foreground mb-4" data-testid="text-success-message">
            Your client's FREE 2-Year Protection Plan has been activated. A Customer Care Specialist will reach out to them shortly to get them scheduled.
          </p>
          <p className="text-sm text-muted-foreground">
            A scheduling window should open momentarily...
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-sm font-semibold text-yellow-900">
              <Award className="w-5 h-5 inline mr-2" />
              Important: Client details must be submitted within 30 days of the home sale closing date.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md" data-testid="text-error">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="clientFirstName" className="block text-sm font-medium mb-2">
                Client First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="clientFirstName"
                name="clientFirstName"
                value={formData.clientFirstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                data-testid="input-clientFirstName"
              />
            </div>

            <div>
              <label htmlFor="clientLastName" className="block text-sm font-medium mb-2">
                Client Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="clientLastName"
                name="clientLastName"
                value={formData.clientLastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                data-testid="input-clientLastName"
              />
            </div>
          </div>

          <div>
            <label htmlFor="realtorName" className="block text-sm font-medium mb-2">
              Your Name (Realtor/Agent) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="realtorName"
              name="realtorName"
              value={formData.realtorName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              data-testid="input-realtorName"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="clientEmail" className="block text-sm font-medium mb-2">
                Client Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="clientEmail"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                data-testid="input-clientEmail"
              />
            </div>

            <div>
              <label htmlFor="clientPhone" className="block text-sm font-medium mb-2">
                Client Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="clientPhone"
                name="clientPhone"
                value={formData.clientPhone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                data-testid="input-clientPhone"
              />
            </div>
          </div>

          <div>
            <label htmlFor="propertyAddress" className="block text-sm font-medium mb-2">
              Property Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="propertyAddress"
              name="propertyAddress"
              value={formData.propertyAddress}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              data-testid="input-propertyAddress"
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
              ZIP Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              pattern="[0-9]{5}"
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              data-testid="input-zipCode"
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> Client details must be provided within 30 days of the sale closing date to activate the protection plan. By submitting this form, you confirm that the information provided is accurate and that your client has agreed to be contacted by Intelligent Design.
            </p>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-6 h-auto"
            disabled={isSubmitting}
            data-testid="button-submit-form"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Registering Client...
              </>
            ) : (
              <>
                Register Client & Activate Plan <Gift className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
