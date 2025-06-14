
import { Users, Building, Zap } from 'lucide-react';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
        <Users className="w-8 h-8 mb-4 mx-auto text-zasta-gold-300" />
        <div className="text-3xl font-bold mb-2">100+</div>
        <div className="text-gray-300">Skilled Workforce</div>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
        <Building className="w-8 h-8 mb-4 mx-auto text-zasta-gold-300" />
        <div className="text-3xl font-bold mb-2">35+</div>
        <div className="text-gray-300">Projects Completed</div>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
        <Zap className="w-8 h-8 mb-4 mx-auto text-zasta-gold-300" />
        <div className="text-3xl font-bold mb-2">25+</div>
        <div className="text-gray-300">Current Projects</div>
      </div>
    </div>
  );
};

export default HeroStats;
