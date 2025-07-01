import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X } from 'lucide-react';
import relucodeLogo from '../assets/relucode_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={relucodeLogo} 
              alt="ReluCode Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Fazer Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-slate-300 hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 w-full mt-4"
              >
                Fazer Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

