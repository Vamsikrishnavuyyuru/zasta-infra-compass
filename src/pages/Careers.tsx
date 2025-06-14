import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, MapPin, Clock, Users, Share2, Briefcase, GraduationCap, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import emailjs from '@emailjs/browser';

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    coverLetter: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [cvFile, setCvFile] = useState<File | null>(null);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_zastagroup';
  const EMAILJS_TEMPLATE_ID = 'template_cv_submission';
  const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your actual public key

  const currentOpenings = [
    {
      id: 1,
      title: "Senior Civil Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "We are looking for an experienced Civil Engineer to join our infrastructure projects team. The ideal candidate will have expertise in structural design and project management.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "5+ years of experience in infrastructure projects",
        "Proficiency in AutoCAD and project management tools",
        "Strong analytical and problem-solving skills"
      ],
      postedDate: "2024-05-25"
    },
    {
      id: 2,
      title: "Electrical Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time", 
      experience: "3-5 years",
      description: "Join our electrical engineering team to work on power distribution and control systems for major infrastructure projects.",
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "3+ years of experience in power systems",
        "Knowledge of electrical design software",
        "Understanding of safety standards and regulations"
      ],
      postedDate: "2024-05-20"
    },
    {
      id: 3,
      title: "Project Manager",
      department: "Management",
      location: "Delhi, India",
      type: "Full-time",
      experience: "7-10 years",
      description: "Lead complex infrastructure projects from planning to execution. Manage cross-functional teams and ensure project delivery within timeline and budget.",
      requirements: [
        "Bachelor's degree in Engineering or Management",
        "7+ years of project management experience",
        "PMP certification preferred",
        "Excellent leadership and communication skills"
      ],
      postedDate: "2024-05-18"
    }
  ];

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
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, cv: 'File size must be less than 5MB' }));
        return;
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setFormErrors(prev => ({ ...prev, cv: 'Please upload a PDF, DOC, or DOCX file' }));
        return;
      }
      
      setCvFile(file);
      setFormErrors(prev => ({ ...prev, cv: '' }));
    }
  };

  const handleCVSubmit = async (e: React.FormEvent) => {
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
    console.log('CV Form submitted:', formData);

    try {
      // Convert file to base64 for email attachment
      let fileContent = '';
      if (cvFile) {
        fileContent = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(cvFile);
        });
      }

      // Prepare email template parameters
      const templateParams = {
        to_email: 'hr@zastagroup.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        skills: formData.skills,
        cover_letter: formData.coverLetter || 'No cover letter provided',
        cv_filename: cvFile?.name || '',
        cv_content: fileContent,
        submission_date: new Date().toLocaleDateString(),
        reply_to: formData.email,
      };

      // Send email using EmailJS
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

      // Reset form
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
      
      // Reset file input
      const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again or contact us directly at hr@zastagroup.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJobApply = (jobId: number, jobTitle: string) => {
    console.log(`Applied for job: ${jobTitle} (ID: ${jobId})`);
    toast({
      title: "Application Submitted!",
      description: `Your application for ${jobTitle} has been submitted successfully.`,
    });
  };

  const handleShareJob = (jobTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Job Opening: ${jobTitle} at Zasta Group`,
        text: `Check out this job opportunity at Zasta Group: ${jobTitle}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Job link has been copied to clipboard.",
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zasta-green-600 to-zasta-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-zasta-green-100 leading-relaxed">
              Build your career with us and be part of transforming infrastructure across the globe
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="submit-cv" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="submit-cv" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Submit Your CV
              </TabsTrigger>
              <TabsTrigger value="current-openings" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Current Openings
              </TabsTrigger>
            </TabsList>

            {/* Submit CV Tab */}
            <TabsContent value="submit-cv">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Application</h2>
                    <p className="text-gray-600">
                      Don't see a perfect match? Submit your CV and we'll contact you when suitable opportunities arise.
                    </p>
                  </div>

                  {/* EmailJS Setup Instructions */}
                  <Alert className="mb-6">
                    <Mail className="h-4 w-4" />
                    <AlertDescription>
                      <strong>EmailJS Setup Instructions:</strong>
                      <br />1. Create a free account at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="text-zasta-green-600 underline">emailjs.com</a>
                      <br />2. Create a service (Gmail, Outlook, etc.)
                      <br />3. Create an email template with variables: from_name, from_email, phone, experience, skills, cover_letter, cv_filename
                      <br />4. Replace 'YOUR_EMAILJS_PUBLIC_KEY' in the code with your actual public key
                      <br />5. Update service and template IDs if different from defaults
                    </AlertDescription>
                  </Alert>

                  <form onSubmit={handleCVSubmit} className="space-y-6">
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
                      <div className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center hover:border-zasta-green-500 transition-colors cursor-pointer ${formErrors.cv ? 'border-red-500' : 'border-gray-300'}`}>
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">
                          {cvFile ? `Selected: ${cvFile.name}` : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-sm text-gray-400">PDF, DOC, DOCX (max 5MB)</p>
                        <Input
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
            </TabsContent>

            {/* Current Openings Tab */}
            <TabsContent value="current-openings">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
                  <p className="text-gray-600">
                    Explore exciting career opportunities with us. Updated weekly.
                  </p>
                </div>

                {currentOpenings.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <GraduationCap className="w-4 h-4" />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShareJob(job.title)}
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Posted: {new Date(job.postedDate).toLocaleDateString()}
                        </span>
                        <Button
                          onClick={() => handleJobApply(job.id, job.title)}
                          className="bg-zasta-green-600 hover:bg-zasta-green-700"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-zasta-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Zasta Group?</h2>
            <p className="text-xl text-gray-600">What makes us a great place to build your career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Great Team", description: "Work with skilled professionals from diverse backgrounds" },
              { icon: GraduationCap, title: "Growth Opportunities", description: "Continuous learning and career development programs" },
              { icon: Briefcase, title: "Challenging Projects", description: "Work on exciting infrastructure projects globally" },
              { icon: Clock, title: "Work-Life Balance", description: "Flexible working arrangements and comprehensive benefits" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-zasta-green-500 to-zasta-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
