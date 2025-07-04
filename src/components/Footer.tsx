
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12"> 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/b4593b9d-31a2-4674-81d1-6df428147c68.png" 
                alt="Zasta Group Logo" 
                className="h-10 w-10 object-contain flex-shrink-0" 
              />
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-xl text-white leading-tight">Zasta Enterprises Private Limited</span>
                <span className="text-sm text-gray-400 leading-tight">Excellence Always</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Founded in 2016 and based in Hyderabad, Zasta Enterprises Private Limited, Previously known as Zasta Engineers And Consultancy Services delivers comprehensive infrastructure solutions including workforce deployment, construction management, and digital project tools.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/zasta-engineers-consultancy-services" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-zasta-green-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/zasta_enterprises?utm_source=qr&igsh=cW92bWM4NzZ0M2ww" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-zasta-green-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:hr@zastagroup.com" className="text-gray-400 hover:text-zasta-green-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-zasta-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-zasta-green-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-zasta-green-400 transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-zasta-green-400 transition-colors">Careers</Link></li> 
            </ul>
          </div> 

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-zasta-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm"> Flat no - 1505, Tower - 1, Emami Swanlake Apartments, Opposite Metro cash & carry, Balaji nagar,
Kukatpally, Hyderabad - 500072, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-zasta-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm"> +91 9701620621 </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-zasta-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@zastagroup.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zasta Enterprises Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-zasta-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-zasta-green-400 text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
