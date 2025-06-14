
import Layout from '@/components/Layout';
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
