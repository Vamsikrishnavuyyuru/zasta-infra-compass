
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import ServicesSection from '@/components/home/ServicesSection';
import SectorsSection from '@/components/home/SectorsSection';
import WhyZastaSection from '@/components/home/WhyZastaSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Zasta Group — Infrastructure Workforce & Construction Management"
        description="Workforce solutions, construction management, and digital project tools for infrastructure mega-projects worldwide. Hyderabad-based, global delivery."
        path="/"
      />
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <SectorsSection />
      <WhyZastaSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
