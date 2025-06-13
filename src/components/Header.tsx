
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              alt="Zasta Group Logo" 
              className="h-10 w-auto object-scale-down" 
              src="/lovable-uploads/1329f9be-07f0-4ffe-8caa-45a038685b86.png" 
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">Zasta</span>
                <span className="text-bold text-gray-600 -mt-1">Enterprises Private Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-zasta-green-50 hover:text-zasta-green-600 ${
                  isActive(item.path) ? 'bg-zasta-green-100 text-zasta-green-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item.path) ? 'bg-zasta-green-100 text-zasta-green-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
