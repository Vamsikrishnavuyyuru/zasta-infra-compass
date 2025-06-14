
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Briefcase } from 'lucide-react';
import CVSubmissionForm from '@/components/careers/CVSubmissionForm';
import JobListings from '@/components/careers/JobListings';
import BenefitsSection from '@/components/careers/BenefitsSection';

const Careers = () => {
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

            <TabsContent value="submit-cv">
              <CVSubmissionForm />
            </TabsContent>

            <TabsContent value="current-openings">
              <JobListings />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <BenefitsSection />
    </Layout>
  );
};

export default Careers;
