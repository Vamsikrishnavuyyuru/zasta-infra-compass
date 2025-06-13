
import { Linkedin } from 'lucide-react';

const LinkedInButton = () => {
  const linkedinUrl = "https://www.linkedin.com/company/zasta-group"; // Update with actual LinkedIn URL
  
  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank');
  };

  return (
    <button
      onClick={handleLinkedInClick}
      className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Connect on LinkedIn"
    >
      <Linkedin size={24} />
    </button>
  );
};

export default LinkedInButton;
