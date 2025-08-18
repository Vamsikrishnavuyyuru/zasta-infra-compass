
import { Linkedin } from 'lucide-react';

const LinkedInButton = () => {
  const linkedinUrl = "https://www.linkedin.com/company/zasta-engineers-consultancy-services";
  
  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank');
  };

  return (
    <button
      onClick={handleLinkedInClick}
      className="fixed bottom-20 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Connect on LinkedIn"
    >
      <Linkedin size={20} />
    </button>
  );
};

export default LinkedInButton;
