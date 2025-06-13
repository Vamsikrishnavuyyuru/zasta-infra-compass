
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, Smartphone, Zap, Shield, Clock, ChevronRight, Star } from 'lucide-react';

const Index = () => {
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
  const sectors = [
    { name: "Power & Distribution", icon: "⚡" },
    { name: "Transportation", icon: "🚄" },
    { name: "Oil & Gas", icon: "🛢️" },
    { name: "Data Centers", icon: "🏢" },
    { name: "Real Estate", icon: "🏗️" },
    { name: "Industries & Warehousing", icon: "🏭" },
    { name: "Information Technology", icon: "💻" }
  ];

  const whyZasta = [
    { icon: Zap, title: "Agility", description: "Rapid response and flexible solutions" },
    { icon: Shield, title: "Quality", description: "Uncompromising standards in every project" },
    { icon: Building, title: "Domain Knowledge", description: "Deep expertise across infrastructure sectors" },
    { icon: Clock, title: "Rapid Response", description: "Quick deployment and problem-solving" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Project Director",
      company: "XYZ Ltd",
      content: "Zasta's workforce solutions helped us complete our power project 2 months ahead of schedule.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Operations Manager",
      company: "ABC Corp",
      content: "SiteSync has revolutionized our quality control process with real-time monitoring capabilities.",
      rating: 5
    }
  ];

  return (
    <Layout>
      <HeroSection />
      
      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2016 and based in Hyderabad, Zasta Enterprises Private Limited, Previously known as Zasta Engineers And Consultancy Services has emerged as a trusted partner for infrastructure projects worldwide. We deliver comprehensive solutions that combine skilled workforce deployment, advanced project management, and cutting-edge digital tools.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Why Zasta Section */}
      <section className="py-20 bg-zasta-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zasta?</h2>
            <p className="text-xl text-gray-600">What sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyZasta.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-zasta-green-500 to-zasta-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-zasta-gold-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-zasta-green-400">{testimonial.position}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zasta-green-600 to-zasta-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Skilled Experts? Let's Connect.</h2>
          <p className="text-xl mb-8 text-zasta-green-100">
            Ready to power your next infrastructure project? Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-zasta-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
