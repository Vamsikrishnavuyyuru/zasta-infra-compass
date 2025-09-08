
import { Users, GraduationCap, Briefcase, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { icon: Users, title: "Great Team", description: "Work with skilled professionals from diverse backgrounds" },
    { icon: GraduationCap, title: "Growth Opportunities", description: "Continuous learning and career development programs" },
    { icon: Briefcase, title: "Challenging Projects", description: "Work on exciting infrastructure projects globally" },
    { icon: Clock, title: "Work-Life Balance", description: "Flexible working arrangements and comprehensive benefits" }
  ];

  return (
    <section className="py-20 bg-zasta-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Zasta Group?</h2>
          <p className="text-xl text-gray-600">What makes us a great place to build your career</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-zasta-blue-500 to-zasta-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
