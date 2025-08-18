import { Instagram } from 'lucide-react';

const InstagramButton = () => {
  const instagramUrl = "https://www.instagram.com/zasta_enterprises?utm_source=qr&igsh=cW92bWM4NzZ0M2ww";
  
  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed bottom-32 right-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Follow on Instagram"
    >
      <Instagram size={20} />
    </button>
  );
};

export default InstagramButton;