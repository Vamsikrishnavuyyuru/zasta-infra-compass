
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
    <div className="max-w-4xl mx-auto animate-fade-in px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 animate-scale-in leading-tight">
        {slides[currentSlide].title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 text-gray-200 animate-fade-in leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
        {slides[currentSlide].subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in max-w-md sm:max-w-none mx-auto" style={{ animationDelay: '0.4s' }}>
        <Button 
          size="lg" 
          className="bg-zasta-green-600 hover:bg-zasta-green-700 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 group w-full sm:w-auto"
          onClick={slides[currentSlide].ctaAction}
        >
          {slides[currentSlide].cta}
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-white text-white bg-grey-900 hover:bg-white hover:text-gray-900 w-full sm:w-auto"
          onClick={onWorkWithUs}
        >
          Work With Us
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
