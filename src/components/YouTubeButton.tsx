import { Play } from 'lucide-react';

const YouTubeButton = () => {
  const youtubeUrl = "https://youtube.com/@zastaenterprisesprivatelimited?si=6I0wEAJRd_s_aEjD";
  
  const handleYouTubeClick = () => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <button
      onClick={handleYouTubeClick}
      className="fixed bottom-44 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Subscribe on YouTube"
    >
      <Play size={20} />
    </button>
  );
};

export default YouTubeButton;