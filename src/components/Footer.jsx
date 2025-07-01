import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import relucodeLogo from "../assets/relucode_logo.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={relucodeLogo}
                alt="ReluCode Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Criando soluções digitais inovadoras para empresas de todos os
              tamanhos. Transformamos ideias em realidade através de tecnologia
              de ponta e design excepcional.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5515981243733?text=Olá%2C+gostaria+de+marcar+um+horário+para+conhecer+os+produtos!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <FaWhatsapp size={25} />{" "}
                {/* Ícone WhatsApp, troque pelo seu ícone de WhatsApp */}
              </a>
              <a
                href="https://www.instagram.com/relucode/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={25} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-400 hover:text-white transition-colors duration-200">
                  Landing Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-400 hover:text-white transition-colors duration-200">
                  Website Institucional
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-400 hover:text-white transition-colors duration-200">
                  Sistema Customizado
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-400 hover:text-white transition-colors duration-200">
                  Automação com IA
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-400 hover:text-white transition-colors duration-200">
                  Controle Financeiro
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail
                    size={16}
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a
                    href="mailto:relucode@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors duration-200">
                    relucode@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <Phone
                    size={16}
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Telefone</p>
                  <a
                    href="https://wa.me/5515997537756?text=Olá%2C+gostaria+de+marcar+um+horário+para+conhecer+os+produtos!"
                    className="text-white hover:text-cyan-400 transition-colors duration-200">
                    +55 (15) 99753-7756
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin
                    size={16}
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Localização</p>
                  <p className="text-white">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-400 hover:text-white transition-colors duration-200">
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-400 hover:text-white transition-colors duration-200">
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-slate-400 hover:text-white transition-colors duration-200">
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-400 hover:text-white transition-colors duration-200">
                Sobre Nós
              </button>
              {/* <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Termos de Serviço
              </a> */}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} ReluCode. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
