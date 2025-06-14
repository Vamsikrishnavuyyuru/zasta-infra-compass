
import { Zap, Shield, Building, Clock } from 'lucide-react';

const WhyZastaSection = () => {
  const whyZasta = [
    { icon: Zap, title: "Agility", description: "Rapid response and flexible solutions" },
    { icon: Shield, title: "Quality", description: "Uncompromising standards in every project" },
    { icon: Building, title: "Domain Knowledge", description: "Deep expertise across infrastructure sectors" },
    { icon: Clock, title: "Rapid Response", description: "Quick deployment and problem-solving" }
  ];

  return (
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
  );
};

export default WhyZastaSection;
