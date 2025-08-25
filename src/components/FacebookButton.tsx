import { Facebook } from 'lucide-react';

const FacebookButton = () => {
  const facebookUrl = "https://www.facebook.com/share/1CEEkXTrvp/";
  
  const handleFacebookClick = () => {
    window.open(facebookUrl, '_blank');
  };

  return (
    <button
      onClick={handleFacebookClick}
      className="fixed bottom-56 right-6 bg-blue-300 hover:bg-blue-400 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Follow on Facebook"
    >
      <Facebook size={20} />
    </button>
  );
};

export default FacebookButton;