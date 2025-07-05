import { Instagram } from 'lucide-react';

const InstagramButton = () => {
  const instagramUrl = "https://www.instagram.com/zasta_enterprises?utm_source=qr&igsh=cW92bWM4NzZ0M2ww";
  
  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed bottom-32 right-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Follow on Instagram"
    >
      <Instagram size={20} />
    </button>
  );
};

export default InstagramButton;