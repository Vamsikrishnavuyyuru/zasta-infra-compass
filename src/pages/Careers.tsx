
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

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    coverLetter: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCVSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CV Form submitted:', formData);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
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
                          className="mt-2"
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
                          className="mt-2"
                        />
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
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Input
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
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
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cv-upload">Upload CV/Resume *</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-zasta-green-500 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-400">PDF, DOC, DOCX (max 5MB)</p>
                        <Input
                          id="cv-upload"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          required
                        />
                      </div>
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

                    <Button type="submit" size="lg" className="w-full bg-zasta-green-600 hover:bg-zasta-green-700">
                      Submit Application
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
