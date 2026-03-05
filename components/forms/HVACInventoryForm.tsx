'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, CheckCircle, Phone } from 'lucide-react';
import { trackFormSubmit } from '@/lib/analytics';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  zipCode: string;
  isHomeowner: string;
  preferredContactTime: string;
}

export function HVACInventoryForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    zipCode: '',
    isHomeowner: '',
    preferredContactTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/hvac-inventory-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
      trackFormSubmit('hvac_inventory_form', 'hvac_purchase');
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
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
          <h3 className="text-2xl font-bold mb-2">You're On The List!</h3>
          <p className="text-muted-foreground mb-6">
            These units move quickly. Call now to confirm your availability and secure your unit.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg px-8 py-6 h-auto font-bold">
            <a href="tel:+1520-333-2665" data-testid="button-call-success">
              <Phone className="w-5 h-5 mr-2" /> Tap to Call Now
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            (520) 333-2665
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                data-testid="input-firstName"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                data-testid="input-lastName"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(520) 555-1234"
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              data-testid="input-phone"
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
              placeholder="85701"
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              data-testid="input-zipCode"
            />
          </div>

          <div>
            <label htmlFor="isHomeowner" className="block text-sm font-medium mb-2">
              Are you the homeowner? <span className="text-red-500">*</span>
            </label>
            <select
              id="isHomeowner"
              name="isHomeowner"
              value={formData.isHomeowner}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              data-testid="select-isHomeowner"
            >
              <option value="">Select...</option>
              <option value="yes">Yes, I own my home</option>
              <option value="no">No, I rent</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredContactTime" className="block text-sm font-medium mb-2">
              Preferred contact time today <span className="text-red-500">*</span>
            </label>
            <select
              id="preferredContactTime"
              name="preferredContactTime"
              value={formData.preferredContactTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              data-testid="select-contactTime"
            >
              <option value="">Select...</option>
              <option value="morning">Morning (8am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
              <option value="evening">Evening (5pm - 8pm)</option>
              <option value="asap">Call me ASAP</option>
            </select>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-6 h-auto font-bold"
            disabled={isSubmitting}
            data-testid="button-submit-form"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Check Availability
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            By submitting, you agree to be contacted about this offer. Your information is kept confidential.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
