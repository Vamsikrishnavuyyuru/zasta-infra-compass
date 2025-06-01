
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/fbc0b943-b9c4-4cc2-b50c-20cd73fdfe74.png" 
                alt="Zasta Group Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl">Zasta Group</span>
                <span className="text-sm text-gray-400">Powering Infrastructure Projects Worldwide</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Founded in 2016 and based in Hyderabad, Zasta Group delivers comprehensive infrastructure solutions including workforce deployment, construction management, and digital project tools.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/zasta-engineers-consultancy-services" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-zasta-green-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:info@zastagroup.com" className="text-gray-400 hover:text-zasta-green-400 transition-colors">
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
              <li><Link to="/sectors" className="text-gray-300 hover:text-zasta-green-400 transition-colors">Sectors</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-zasta-green-400 transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-zasta-green-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-zasta-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-zasta-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 (040) 123-4567</span>
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
              © 2024 Zasta Enterprises Pvt Ltd. All rights reserved.
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
