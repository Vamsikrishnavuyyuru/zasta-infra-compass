
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import type { Slide } from './HeroSlider';

interface HeroContentProps {
  slides: Slide[];
  currentSlide: number;
  onWorkWithUs: () => void;
}

const HeroContent = ({ slides, currentSlide, onWorkWithUs }: HeroContentProps) => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in px-3 sm:px-4 lg:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-6 sm:mb-8 md:mb-10 animate-scale-in leading-[1.2] tracking-tight text-shadow-lg hero-title">
        {slides[currentSlide].title}
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 md:mb-12 text-gray-100 animate-fade-in leading-[1.5] max-w-4xl mx-auto font-medium hero-subtitle" style={{ animationDelay: '0.2s' }}>
        {slides[currentSlide].subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-in max-w-lg sm:max-w-none mx-auto" style={{ animationDelay: '0.4s' }}>
        <Button 
          size="lg" 
          className="bg-zasta-blue-600 hover:bg-zasta-blue-700 text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 group w-full sm:w-auto font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
          onClick={slides[currentSlide].ctaAction}
        >
          {slides[currentSlide].cta}
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 w-full sm:w-auto font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm"
          onClick={onWorkWithUs}
        >
          Work With Us
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
