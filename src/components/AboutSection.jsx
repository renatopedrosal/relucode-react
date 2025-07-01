import { Users, Award, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "5+",
      label: "Anos de Experiência",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "100+",
      label: "Projetos Concluídos",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "Clientes Satisfeitos",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      number: "24/7",
      label: "Suporte Dedicado",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre ReluCode
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Transformando Ideias em{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Soluções Digitais
              </span>
            </h3>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Na ReluCode, somos apaixonados por criar soluções digitais inovadoras e eficazes. 
                Nossa equipe de desenvolvedores e designers experientes trabalha em estreita colaboração 
                com os clientes para entender seus objetivos e entregar resultados excepcionais.
              </p>
              
              <p>
                Estamos comprometidos em permanecer na vanguarda das tendências de tecnologia e 
                design para fornecer soluções de ponta que atendam às necessidades em evolução das 
                empresas. Desde controles financeiros até automações de WhatsApp com IA, criamos 
                qualquer tipo de sistema ou automação de processo.
              </p>
              
              <p>
                Nossa missão é impulsionar o sucesso dos nossos clientes através de tecnologia 
                inovadora, design excepcional e um atendimento personalizado que supera expectativas.
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-300">Soluções Personalizadas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-slate-300">Tecnologia de Ponta</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-300">Design Moderno</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-slate-300">Suporte Contínuo</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-white mx-auto mb-3`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Excelência</h4>
              <p className="text-slate-300">
                Buscamos a perfeição em cada projeto, entregando soluções que superam expectativas.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Inovação</h4>
              <p className="text-slate-300">
                Utilizamos as tecnologias mais avançadas para criar soluções verdadeiramente inovadoras.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Parceria</h4>
              <p className="text-slate-300">
                Trabalhamos como parceiros dos nossos clientes, garantindo seu sucesso a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

