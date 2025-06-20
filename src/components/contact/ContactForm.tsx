import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace these with your actual EmailJS credentials
      // Get these from your EmailJS dashboard: https://www.emailjs.com/
      const serviceId = 'YOUR_ACTUAL_SERVICE_ID';  // Replace with your service ID
      const templateId = 'YOUR_ACTUAL_TEMPLATE_ID'; // Replace with your template ID  
      const publicKey = 'YOUR_ACTUAL_PUBLIC_KEY';   // Replace with your public key

      // Check if credentials are still placeholders
      if (serviceId === 'YOUR_ACTUAL_SERVICE_ID' || templateId === 'YOUR_ACTUAL_TEMPLATE_ID' || publicKey === 'YOUR_ACTUAL_PUBLIC_KEY') {
        throw new Error('EmailJS credentials not configured. Please replace the placeholder values with your actual EmailJS credentials.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'hr@zastagroup.com'
      };

      console.log('Attempting to send email with params:', templateParams);

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. Our HR team will get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      
      let errorMessage = "There was an error sending your message. Please try again or contact us directly.";
      
      if (error instanceof Error) {
        if (error.message.includes('credentials not configured')) {
          errorMessage = "Email service not configured. Please contact the administrator.";
        } else if (error.message.includes('blocked') || error.message.includes('423')) {
          errorMessage = "Email service temporarily unavailable. Please contact us directly at hr@zastagroup.com";
        }
      }
      
      toast({
        title: "Failed to Send Message",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
      <Card className="shadow-xl">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-1"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="mt-1"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                disabled={isSubmitting}
                className="mt-1 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-zasta-green-600 hover:bg-zasta-green-700 disabled:opacity-50" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
