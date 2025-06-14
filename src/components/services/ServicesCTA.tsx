
const ServicesCTA = () => {
  const phoneNumber = "919701620621";
  const message = "Hello! I'm interested in Zasta Group's services and would like to discuss my infrastructure project requirements.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-zasta-green-600 to-zasta-green-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-zasta-green-100">
          Let's discuss how our services can support your next infrastructure project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleWhatsAppClick}
            className="bg-white text-zasta-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Contact Us Today
          </button>
          <button 
            disabled
            className="border-2 border-gray-400 text-gray-400 px-8 py-4 rounded-lg font-semibold text-lg cursor-not-allowed opacity-50"
          >
            Download Brochure (Coming Soon)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
