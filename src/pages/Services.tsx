
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, Smartphone, Zap, Shield, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Workforce Solutions",
      description: "Civil, Mechanical, Electrical, Instrumentation & Software Engineers with complete onboarding and compliance support.",
      features: [
        "Sourcing & Onboarding",
        "Payroll Management", 
        "Flexi-deployment",
        "Project-based roles",
        "Compliance Support",
        "Skills Assessment"
      ],
      detailedDescription: "Our workforce solutions provide end-to-end talent management for infrastructure projects. We specialize in sourcing highly skilled engineers across multiple disciplines and ensuring they're project-ready through comprehensive onboarding processes."
    },
    {
      icon: Building,
      title: "Construction Project Management",
      description: "End-to-end project planning, scheduling, quality control, safety management, and execution support.",
      features: [
        "Planning & Scheduling",
        "Quality Control",
        "Safety Management", 
        "Value Engineering",
        "Risk Assessment",
        "Progress Monitoring"
      ],
      detailedDescription: "We deliver comprehensive project management services that ensure your infrastructure projects are completed on time, within budget, and to the highest quality standards."
    },
    {
      icon: Smartphone,
      title: "SiteSync Digital Suite",
      description: "Advanced field quality app with 2000+ checklists, offline functionality, and real-time auditing capabilities.",
      features: [
        "2000+ Checklists",
        "Offline Functionality",
        "Real-time Audits",
        "Photo Tagging",
        "Report Generation",
        "Cloud Synchronization"
      ],
      detailedDescription: "Our proprietary digital platform revolutionizes site quality management with comprehensive checklists, real-time monitoring, and detailed reporting capabilities."
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
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-zasta-green-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-zasta-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{service.detailedDescription}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-zasta-green-600 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="shadow-xl">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <Zap className="w-4 h-4 text-zasta-gold-500 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
