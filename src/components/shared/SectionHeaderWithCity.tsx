
import { ReactNode } from 'react';
import CityAnimation from '../hero/CityAnimation';

interface SectionHeaderWithCityProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  bgGradient?: string;
  textColor?: string;
}

const SectionHeaderWithCity = ({ 
  title, 
  subtitle, 
  children, 
  bgGradient = "bg-gradient-to-r from-zasta-green-600 to-zasta-green-800",
  textColor = "text-white"
}: SectionHeaderWithCityProps) => {
  return (
    <section className={`relative py-20 ${bgGradient} ${textColor} overflow-hidden`}>
      <CityAnimation />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-scale-in">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-200 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          )}
          {children && (
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionHeaderWithCity;
