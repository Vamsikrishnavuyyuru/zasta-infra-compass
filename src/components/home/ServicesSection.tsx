
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, Smartphone, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Workforce Solutions",
      description: "Civil, Mechanical, Electrical, Instrumentation & Software Engineers with complete onboarding and compliance support.",
      features: ["Sourcing & Onboarding", "Payroll Management", "Flexi-deployment", "Project-based roles"]
    },
    {
      icon: Building,
      title: "Construction Project Management",
      description: "End-to-end project planning, scheduling, quality control, safety management, and execution support.",
      features: ["Planning & Scheduling", "Quality Control", "Safety Management", "Value Engineering"]
    },
    {
      icon: Smartphone,
      title: "SiteSync Digital Suite",
      description: "Advanced field quality app with 2000+ checklists, offline functionality, and real-time auditing capabilities.",
      features: ["2000+ Checklists", "Offline Functionality", "Real-time Audits", "Photo Tagging"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your infrastructure needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-zasta-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zasta-green-600 transition-colors">
                  <service.icon className="w-8 h-8 text-zasta-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-zasta-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
