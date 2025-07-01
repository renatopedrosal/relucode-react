import { Code, Globe, Settings, Zap, DollarSign, Clock, Bot } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Page",
      description: "Criamos landing pages de alta conversão que capturam leads e geram conversões, projetadas com a experiência do usuário e o desempenho em mente."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento de Site Institucional",
      description: "Projetamos e desenvolvemos sites institucionais profissionais e responsivos que comunicam efetivamente a mensagem da sua marca ao seu público-alvo."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Sistema Customizado",
      description: "Construímos sistemas de software personalizados e adaptados às necessidades específicas do seu negócio, otimizando a eficiência e a produtividade nas suas operações diárias."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação de Processos",
      description: "Automatizamos tarefas repetitivas e processos complexos para aumentar a eficiência, reduzir erros e liberar sua equipe para focar em atividades estratégicas."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Controle Financeiro",
      description: "Desenvolvemos sistemas robustos para gestão financeira, controle de fluxo de caixa, orçamentos e relatórios, proporcionando uma visão clara da saúde financeira do seu negócio."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Controle de Ponto e Calendário",
      description: "Soluções personalizadas para gestão de tempo, controle de ponto eletrônico, agendamento de tarefas e organização de calendários, otimizando a produtividade da equipe."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Automações com IA (Ex: WhatsApp)",
      description: "Implementamos automações inteligentes com inteligência artificial, como chatbots para WhatsApp, para melhorar o atendimento ao cliente, otimizar vendas e engajamento."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Oferecemos soluções digitais abrangentes e adaptadas às suas necessidades específicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">
            Não encontrou o que procura? Temos experiência em desenvolver soluções personalizadas para qualquer necessidade.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

