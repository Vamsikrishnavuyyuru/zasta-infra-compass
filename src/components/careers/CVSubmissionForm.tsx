import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

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
    coverLetter: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_fjdc2up';
  const EMAILJS_TEMPLATE_ID = 'template_cv0iy2s';
  const EMAILJS_PUBLIC_KEY = 'k2HA7dp0FpEmkKzuo';

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }
    
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
    
    if (!formData.experience.trim()) {
      errors.experience = 'Years of experience is required';
    }
    
    if (!formData.skills.trim()) {
      errors.skills = 'Key skills are required';
    }
    
    if (!cvFile) {
      errors.cv = 'CV/Resume is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, cv: 'File size must be less than 5MB' }));
        return;
      }
      
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setFormErrors(prev => ({ ...prev, cv: 'Please upload a PDF, DOC, or DOCX file' }));
        return;
      }
      
      setCvFile(file);
      setFormErrors(prev => ({ ...prev, cv: '' }));
    }
  };

  const handleUploadDivClick = () => {
    fileInputRef.current?.click();
  };

  // NOTE: File attachments are NOT supported in this EmailJS setup as the free plan doesn't support direct attachments.
  // Only the filename will be sent to HR. Alert is shown to user above the form.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'hr@zastagroup.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        skills: formData.skills,
        cover_letter: formData.coverLetter || 'No cover letter provided',
        cv_filename: cvFile?.name || '(no file)', // only filename, not the file itself
        submission_date: new Date().toLocaleDateString(),
        reply_to: formData.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your interest. Our HR team will review your application and get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        skills: '',
        coverLetter: ''
      });
      setCvFile(null);
      setFormErrors({});
      
      const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please email your CV and details directly to hr@zastagroup.com.",
        variant: "destructive",
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

        {/* Informational Alert to explain CV isn't attached */}
        <Alert className="mb-6">
          <Mail className="h-4 w-4" />
          <AlertDescription>
            <strong>Note:</strong> The uploaded CV file will <span className="text-red-600 font-semibold">NOT</span> be sent as an email attachment.
            <br />
            Please email your CV file directly to <a href="mailto:hr@zastagroup.com" className="text-blue-600 underline">hr@zastagroup.com</a> after submitting this form.
            <br />Only your details (including the chosen file's name) will be sent via this form.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`mt-2 ${formErrors.name ? 'border-red-500' : ''}`}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
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
                className={`mt-2 ${formErrors.email ? 'border-red-500' : ''}`}
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className={`mt-2 ${formErrors.phone ? 'border-red-500' : ''}`}
              />
              {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
            </div>
            <div>
              <Label htmlFor="experience">Years of Experience *</Label>
              <Input
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className={`mt-2 ${formErrors.experience ? 'border-red-500' : ''}`}
              />
              {formErrors.experience && <p className="text-red-500 text-sm mt-1">{formErrors.experience}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="skills">Key Skills *</Label>
            <Textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              placeholder="List your key technical skills and competencies"
              required
              className={`mt-2 ${formErrors.skills ? 'border-red-500' : ''}`}
            />
            {formErrors.skills && <p className="text-red-500 text-sm mt-1">{formErrors.skills}</p>}
          </div>

          <div>
            <Label htmlFor="cv-upload">Upload CV/Resume *</Label>
            <div 
              onClick={handleUploadDivClick}
              className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center hover:border-zasta-green-500 transition-colors cursor-pointer ${formErrors.cv ? 'border-red-500' : 'border-gray-300'}`}
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">
                {cvFile ? `Selected: ${cvFile.name}` : 'Click to upload or drag and drop'}
              </p>
              <p className="text-sm text-gray-400">PDF, DOC, DOCX (max 5MB)</p>
              <Input
                ref={fileInputRef}
                id="cv-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
            </div>
            {formErrors.cv && <p className="text-red-500 text-sm mt-1">{formErrors.cv}</p>}
          </div>

          <div>
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Tell us why you want to join Zasta Group"
              className="mt-2"
              rows={4}
            />
          </div>

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
