import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, MessageCircle } from "lucide-react";

const CallToAction = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-400/20 rounded-full blur-lg animate-bounce delay-500"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para transformar{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              seu negócio?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Vamos discutir como podemos ajudar você a atingir seus objetivos de
            negócios com nossas soluções digitais personalizadas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="https://wa.me/5515981243733?text=Olá%2C+gostaria+de+marcar+um+horário+para+conhecer+os+produtos!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 
              py-1 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
              <MessageCircle size={24} />
              Obtenha uma consulta gratuita
            </a>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border-2 border-slate-600 text-slate-300 bg-slate-800 hover:text-black px-7 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              Explore nossos serviços
              <ArrowRight size={24} />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-slate-400 text-center">
                Satisfação Garantida
              </div>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24h</div>
              <div className="text-slate-400 text-center">Resposta Rápida</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-slate-400 text-center">Suporte Contínuo</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 max-w-2xl mx-auto">
            <p className="text-slate-300 mb-4">
              <strong className="text-white">Consulta gratuita:</strong>{" "}
              Analisamos seu projeto sem compromisso
            </p>
            <p className="text-slate-300">
              <strong className="text-white">Orçamento personalizado:</strong>{" "}
              Soluções sob medida para seu orçamento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
