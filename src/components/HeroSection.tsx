
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSlider, { type Slide } from './hero/HeroSlider';
import CityAnimation from './hero/CityAnimation';
import HeroContent from './hero/HeroContent';
import HeroStats from './hero/HeroStats';
import SlideIndicators from './hero/SlideIndicators';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides: Slide[] = [
    {
      title: "Powering Infrastructure Projects Worldwide",
      subtitle: "Comprehensive workforce solutions and construction management for mega-projects",
      cta: "Explore Our Services",
      ctaAction: () => navigate('/services'),
      bg: "bg-gradient-to-br from-zasta-blue-900 via-zasta-blue-700 to-zasta-blue-500"
    },
    {
      title: "Construction Quality Management Software",
      subtitle: "SiteSync - Advanced field quality control with 2000+ checklists",
      cta: "Discover SiteSync",
      ctaAction: () => navigate('/services'),
      bg: "bg-gradient-to-br from-zasta-gold-800 via-zasta-gold-600 to-zasta-blue-600"
    },
    {
      title: "Expert Engineering Consultancy",
      subtitle: "Delivering specialized engineering solutions across real estate, power, transportation, and industrial sectors",
      cta: "Our Expertise",
      ctaAction: () => navigate('/about'),
      bg: "bg-gradient-to-br from-zasta-blue-800 via-zasta-gold-700 to-zasta-blue-600"
    }
  ];

  const handleWorkWithUs = () => {
    navigate('/careers');
  };

  // Auto-slide disabled to keep hero on first slide
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
      <HeroSlider slides={slides} currentSlide={currentSlide} />
      <CityAnimation />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white min-h-screen pt-8 pb-24 flex flex-col justify-center">
        <div className="flex-1 flex items-center justify-center">
          <HeroContent 
            slides={slides} 
            currentSlide={currentSlide} 
            onWorkWithUs={handleWorkWithUs} 
          />
        </div>
        <div className="mt-8">
          <HeroStats />
        </div>
      </div>

      <SlideIndicators 
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
    </section>
  );
};

export default HeroSection;
