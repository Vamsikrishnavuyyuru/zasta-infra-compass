
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
    <div className="max-w-4xl mx-auto animate-fade-in px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 animate-scale-in leading-tight">
        {slides[currentSlide].title}
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
        {slides[currentSlide].subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Button 
          size="lg" 
          className="bg-zasta-green-600 hover:bg-zasta-green-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 group w-full sm:w-auto"
          onClick={slides[currentSlide].ctaAction}
        >
          {slides[currentSlide].cta}
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-white text-white bg-grey-900 hover:bg-white hover:text-gray-900 w-full sm:w-auto"
          onClick={onWorkWithUs}
        >
          Work With Us
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
