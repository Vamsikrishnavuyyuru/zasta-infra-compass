
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
      bg: "bg-gradient-to-br from-zasta-green-900 via-zasta-green-700 to-zasta-green-500"
    },
    {
      title: "Construction Quality Management Software",
      subtitle: "SiteSync - Advanced field quality control with 2000+ checklists",
      cta: "Discover SiteSync",
      ctaAction: () => navigate('/services'),
      bg: "bg-gradient-to-br from-zasta-gold-800 via-zasta-gold-600 to-zasta-green-600"
    },
    {
      title: "Expert Engineering Consultancy",
      subtitle: "Delivering specialized engineering solutions across real estate, power, transportation, and industrial sectors",
      cta: "Our Expertise",
      ctaAction: () => navigate('/about'),
      bg: "bg-gradient-to-br from-zasta-green-800 via-zasta-gold-700 to-zasta-green-600"
    }
  ];

  const handleWorkWithUs = () => {
    navigate('/careers');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroSlider slides={slides} currentSlide={currentSlide} />
      <CityAnimation />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <HeroContent 
          slides={slides} 
          currentSlide={currentSlide} 
          onWorkWithUs={handleWorkWithUs} 
        />
        <HeroStats />
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
