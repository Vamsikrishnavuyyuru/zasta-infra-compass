import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import CVAttachmentInput from './CVAttachmentInput';
import CVPersonalDetailsForm from './CVPersonalDetailsForm';

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
  coverLetter: string;
}

const CVSubmissionForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    coverLetter: '',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.experience.trim()) errors.experience = 'Years of experience is required';
    if (!cvFile) errors.cv = 'CV/Resume is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setFormErrors((prev) => ({ ...prev, cv: 'File size must be less than 10MB' }));
        return;
      }
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!allowedTypes.includes(file.type)) {
        setFormErrors((prev) => ({ ...prev, cv: 'Please upload a PDF, DOC, or DOCX file' }));
        return;
      }
      setCvFile(file);
      setFormErrors((prev) => ({ ...prev, cv: '' }));
    } else {
      setCvFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form before submitting.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new window.FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('experience', formData.experience);
      payload.append('skills', formData.skills);
      payload.append('coverLetter', formData.coverLetter || '');
      if (cvFile) payload.append('cvAttachment', cvFile);

      const { error } = await supabase.functions.invoke('submit-cv', { body: payload });
      if (error) throw error;

      toast({
        title: 'Application Submitted!',
        description:
          "Thank you for your interest. We'll review your application and get back to you soon.",
      });

      setFormData({ name: '', email: '', phone: '', experience: '', skills: '', coverLetter: '' });
      setCvFile(null);
      setFormErrors({});
      const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (_error) {
      toast({
        title: 'Submission Failed',
        description:
          'There was an error submitting your application. Please try again or email hr@zastagroup.com.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Application</h2>
          <p className="text-gray-600">
            Don't see a perfect match? Submit your CV and we'll contact you when suitable opportunities arise.
          </p>
        </div>

        <Alert className="mb-6">
          <Mail className="h-4 w-4" />
          <AlertDescription>
            <strong>CV Attachment Supported!</strong>
            <br />
            Your CV/Resume file will be sent as an email attachment via our secure system.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-6">
          <CVPersonalDetailsForm
            formData={formData}
            formErrors={formErrors}
            onChange={handleInputChange}
          />

          <CVAttachmentInput
            cvFile={cvFile}
            onFileChange={handleFileChange}
            error={formErrors.cv}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-zasta-green-600 hover:bg-zasta-green-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CVSubmissionForm;
