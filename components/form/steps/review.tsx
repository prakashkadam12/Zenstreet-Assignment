'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useFormStore } from '@/lib/store';
import { toast } from 'sonner';

export function Review() {
  const { formData, setFormData, resetForm } = useFormStore();

  const handleSubmit = async () => {
    try {
      setFormData({ isSubmitting: true });
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Form submitted successfully!');
      resetForm();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setFormData({ isSubmitting: false });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Review Your Information</h2>
        <p className="text-muted-foreground">
          Please review your information before submitting.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <span className="font-medium">Name:</span> {formData.firstName}{' '}
              {formData.lastName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {formData.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {formData.phone}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Address Details</CardTitle>
            <CardDescription>Your address information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <span className="font-medium">Street:</span> {formData.street}
            </p>
            <p>
              <span className="font-medium">City:</span> {formData.city}
            </p>
            <p>
              <span className="font-medium">State:</span> {formData.state}
            </p>
            <p>
              <span className="font-medium">ZIP Code:</span> {formData.zipCode}
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Your selected preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <span className="font-medium">Push Notifications:</span>{' '}
              {formData.notifications ? 'Enabled' : 'Disabled'}
            </p>
            <p>
              <span className="font-medium">Newsletter:</span>{' '}
              {formData.newsletter ? 'Subscribed' : 'Not subscribed'}
            </p>
            <p>
              <span className="font-medium">Marketing Emails:</span>{' '}
              {formData.marketingEmails ? 'Enabled' : 'Disabled'}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => setFormData({ currentStep: 3 })}
        >
          Previous
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={formData.isSubmitting}
        >
          {formData.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}