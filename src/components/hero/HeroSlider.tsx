
interface Slide {
  title: string;
  subtitle: string;
  cta: string;
  ctaAction: () => void;
  bg: string;
}

interface HeroSliderProps {
  slides: Slide[];
  currentSlide: number;
}

const HeroSlider = ({ slides, currentSlide }: HeroSliderProps) => {
  return (
    <>
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${slide.bg}`}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </>
  );
};

export default HeroSlider;
export type { Slide };
