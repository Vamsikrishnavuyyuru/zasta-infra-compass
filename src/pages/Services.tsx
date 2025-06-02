import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Users, Building, Smartphone, ChevronDown, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const services = [
    {
      icon: Users,
      title: "Workforce Solutions",
      description: "Civil, Mechanical, Electrical, Instrumentation, Software Engineers & IT professionals with complete onboarding and compliance support.",
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
      detailedDescription: "Our proprietary Zasta Digital Suite revolutionizes construction quality management with comprehensive checklists, real-time monitoring, and detailed reporting capabilities for enhanced project oversight."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We understand your project requirements and challenges"
    },
    {
      number: "02", 
      title: "Planning",
      description: "Develop customized solutions tailored to your needs"
    },
    {
      number: "03",
      title: "Execution",
      description: "Deploy our expert teams and advanced tools"
    },
    {
      number: "04",
      title: "Monitoring",
      description: "Continuous oversight and quality assurance"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zasta-green-600 to-zasta-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-zasta-green-100 leading-relaxed">
              Comprehensive infrastructure solutions powered by skilled professionals and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-zasta-green-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-zasta-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{service.detailedDescription}</p>
                  
                  {/* Interactive Service Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <Collapsible key={idx}>
                        <CollapsibleTrigger className="w-full">
                          <div className="flex items-center justify-between w-full p-4 bg-zasta-green-50 hover:bg-zasta-green-100 rounded-lg transition-colors">
                            <div className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-zasta-green-600 mr-3" />
                              <span className="text-gray-900 font-medium text-left">{feature.name}</span>
                            </div>
                            <ChevronDown className="w-5 h-5 text-zasta-green-600 transition-transform duration-200" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="mt-2 p-4 bg-white border border-zasta-green-100 rounded-lg">
                            <p className="text-gray-600">{feature.details}</p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1">
                  <Card className="shadow-xl">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Service Overview</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="bg-zasta-green-50 p-4 rounded-lg">
                        <p className="text-sm text-zasta-green-700 font-medium">
                          Click on any feature above to learn more about our detailed approach and methodology.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zasta-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver excellence in every project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-zasta-green-500 to-zasta-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zasta-green-600 to-zasta-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-zasta-green-100">
            Let's discuss how our services can support your next infrastructure project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-zasta-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zasta-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
