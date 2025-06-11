
import { MessageCircle } from 'lucide-react';

const WhatsAppMessenger = () => {
  const phoneNumber = "919876543210"; // Replace with actual WhatsApp business number
  const message = "Hello! I'm interested in Zasta Group's services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppMessenger;
