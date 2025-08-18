
import { MessageCircle } from 'lucide-react';

const WhatsAppMessenger = () => {
  const phoneNumber = "919701620621"; // Updated WhatsApp business number
  const message = "Hello! I'm interested in Zasta Group's services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-400 hover:bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
    </button>
  );
};

export default WhatsAppMessenger;
