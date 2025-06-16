
import SectionHeaderWithCity from '../shared/SectionHeaderWithCity';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <SectionHeaderWithCity
      title="Need Skilled Experts? Let's Connect."
      subtitle="Ready to power your next infrastructure project? Get in touch with our team today."
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button 
          size="lg"
          className="bg-white text-zasta-green-600 hover:bg-gray-100 px-8 py-4 font-semibold text-lg"
          onClick={handleContactClick}
        >
          Contact Us
        </Button>
      </div>
    </SectionHeaderWithCity>
  );
};

export default CTASection;
