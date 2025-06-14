
interface SlideIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const SlideIndicators = ({ totalSlides, currentSlide, onSlideChange }: SlideIndicatorsProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ? 'bg-white' : 'bg-white/40'
          }`}
          onClick={() => onSlideChange(index)}
        />
      ))}
    </div>
  );
};

export default SlideIndicators;
