
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
      description: "We provide specialized Civil, Mechanical, Electrical, Instrumentation, Software, and IT professionals, supported by a comprehensive onboarding and regulatory compliance framework.",
      illustration: "https://t4.ftcdn.net/jpg/02/64/87/45/360_F_264874512_asSj4QLFkdifkjMUDj80UKLKKwtH8qBZ.jpg",
      illustrationAlt: "Professional team working on laptops",
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
      description: "End-to-end project planning, scheduling, quality control, safety management, and execution support.",
      illustration: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      illustrationAlt: "Construction site with crane and building",
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
        }
      ],
      detailedDescription: "We deliver comprehensive project management services that ensure your infrastructure projects are completed on time, within budget, and to the highest quality standards."
    },
    {
      icon: Smartphone,
      title: "Zasta Digital Suite",
      description: "Advanced field quality app with 2000+ checklists, offline functionality, and real-time auditing capabilities.",
      illustration: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      illustrationAlt: "Software code on computer screen",
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
          name: "Report Generation",
          details: "Automated report generation with customizable templates, analytics dashboards, and stakeholder-specific views."
        },
        {
          name: "Cloud Synchronization",
          details: "Secure cloud-based data synchronization ensuring all stakeholders have access to the latest project information."
        }
      ],
      detailedDescription: "Our proprietary software SiteSync AI-powered, revolutionizes construction quality management with comprehensive checklists, real-time monitoring, performance tracking and detailed reporting capabilities for enhanced project oversight."
    }
  ];

  return (
    <Layout>
      <ServiceHero />
      
      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                illustration={service.illustration}
                illustrationAlt={service.illustrationAlt}
                features={service.features}
                detailedDescription={service.detailedDescription}
                index={index}
              />
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
