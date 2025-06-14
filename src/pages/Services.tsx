
import Layout from '@/components/Layout';
import { Users, Building, Smartphone } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCard from '@/components/services/ServiceCard';
import ProcessSteps from '@/components/services/ProcessSteps';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Workforce Solutions",
      description: "Specialized professionals with complete onboarding and compliance support",
      illustration: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      illustrationAlt: "Professional team collaborating in modern office",
      features: [
        {
          name: "Sourcing & Onboarding",
          details: "Comprehensive talent acquisition process including skill assessment, background verification, and seamless onboarding procedures for both infrastructure and IT sectors."
        },
        {
          name: "Payroll Management", 
          details: "End-to-end payroll processing, tax compliance, statutory benefits management, and transparent salary disbursement systems."
        },
        {
          name: "Flexi-deployment",
          details: "Flexible deployment options including on-site, remote, and hybrid work arrangements tailored to project requirements and client preferences."
        },
        {
          name: "Project-based roles",
          details: "Specialized teams assembled for specific project durations with clearly defined deliverables and success metrics."
        },
        {
          name: "Compliance Support",
          details: "Complete regulatory compliance including labor law adherence, safety protocols, and industry-specific certifications."
        },
        {
          name: "Skills Assessment",
          details: "Rigorous technical and soft skills evaluation using industry-standard tools and methodologies to ensure optimal candidate-role fit."
        }
      ],
      detailedDescription: "Our workforce solutions provide end-to-end talent management for infrastructure and IT projects. We specialize in sourcing highly skilled engineers and IT professionals across multiple disciplines, ensuring they're project-ready through comprehensive onboarding processes."
    },
    {
      icon: Building,
      title: "Construction Project Management",
      description: "End-to-end project execution with quality control and safety management",
      illustration: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      illustrationAlt: "Modern construction site with advanced machinery",
      features: [
        {
          name: "Planning & Scheduling",
          details: "Comprehensive project planning using advanced scheduling tools, resource optimization, and milestone tracking to ensure timely delivery."
        },
        {
          name: "Quality Control",
          details: "Rigorous quality assurance processes including material testing, construction standards compliance, and continuous monitoring."
        },
        {
          name: "Safety Management", 
          details: "Implementation of comprehensive safety protocols, regular training programs, and incident prevention strategies."
        },
        {
          name: "Value Engineering",
          details: "Cost optimization strategies without compromising quality, including alternative material analysis and process improvements."
        },
        {
          name: "Risk Assessment",
          details: "Proactive risk identification, mitigation strategies, and contingency planning to minimize project disruptions."
        },
        {
          name: "Progress Monitoring",
          details: "Real-time progress tracking with detailed reporting, performance analytics, and stakeholder communication."
        },
        {
          name: "Building Information Model",
          details: "Collaborative BIM integration with project stakeholders to streamline design coordination, improve construction accuracy, and enhance lifecycle management."
        },
      ],
      detailedDescription: "We deliver comprehensive project management services that ensure your infrastructure projects are completed on time, within budget, and to the highest quality standards."
    },
    {
      icon: Smartphone,
      title: "SiteSync Digital Suite",
      description: "AI-powered construction quality management with advanced digital tools",
      illustration: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      illustrationAlt: "Advanced digital interface and mobile technology",
      features: [
        {
          name: "2000+ Checklists",
          details: "Comprehensive quality control checklists covering all aspects of construction from foundation to finishing works."
        },
        {
          name: "Offline Functionality",
          details: "Full offline capability ensuring continuous operation even in areas with poor connectivity, with automatic sync when online."
        },
        {
          name: "Real-time Audits",
          details: "Live auditing capabilities with instant notifications, compliance tracking, and immediate corrective action alerts."
        },
        {
          name: "Photo Tagging",
          details: "GPS-enabled photo documentation with timestamp and location data for comprehensive visual records."
        },
        {
          name: "AI Report Generation",
          details: "Automated report creation with customizable templates, real-time analytics, and stakeholder-specific dashboard views."
        },
        {
          name: "Cloud Synchronization",
          details: "Secure cloud-based data synchronization ensuring all stakeholders have access to the latest project information."
        }
      ],
      detailedDescription: "Our proprietary SiteSync software revolutionizes construction quality management with AI-powered analytics, comprehensive checklists, real-time monitoring, and detailed reporting capabilities for enhanced project oversight."
    }
  ];

  return (
    <Layout>
      <ServiceHero />
      
      {/* Services Detail Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your infrastructure projects with cutting-edge technology and expert management
            </p>
          </div>
          
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  illustration={service.illustration}
                  illustrationAlt={service.illustrationAlt}
                  features={service.features}
                  detailedDescription={service.detailedDescription}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <ServicesCTA />
    </Layout>
  );
};

export default Services;
