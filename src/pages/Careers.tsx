
import Layout from '@/components/Layout';
import SectionHeaderWithCity from '@/components/shared/SectionHeaderWithCity';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Briefcase } from 'lucide-react';
import CVSubmissionForm from '@/components/careers/CVSubmissionForm';
import JobListings from '@/components/careers/JobListings';
import BenefitsSection from '@/components/careers/BenefitsSection';

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section with City Animation */}
      <SectionHeaderWithCity
        title="Join Our Team"
        subtitle="Build your career with us and be part of transforming infrastructure across the globe"
      />

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
