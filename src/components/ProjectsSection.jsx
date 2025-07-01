import { Button } from "@/components/ui/button.jsx";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Sgc",
      category: "Sistema Personalizado",
      description:
        "Sistema de gerenciamento pessoal completo, com cadastro de fornecedores, controle de ponto, calendário integrado, gestão financeira e dashboard com gráficos para visualização dos dados.",
      image: "sgc.png",
      tags: [
        "Angular",
        "Tailwind",
        "Java - Spring Boot",
        "Postgree SQL",
        "Dashboard",
      ],
      link: "https://sgc.net.br"
    },
    {
      id: 2,
      title: "Decor Design",
      category: "Landing Page",
      description:
        "Landing page elegante para vendas de produtos exclusivos em vidro, como saboneteiras, porta shampoo e prateleiras. Destaque para design moderno, fotos de alta qualidade e foco na apresentação dos produtos para aumentar conversões.",
      image: "decor-design.png",
      tags: ["React", "Tailwind", "Ads"],
      link: "https://portfolio.vidrosdecordesign.com.br"
    },
    {
      id: 3,
      title: "Reserva dos Ypês 2",
      category: "Site Institucional / Sistema Personalizado",
      description:
        "Plataforma completa para administração de condomínios, com gestão de moradores, reservas de áreas comuns, controle financeiro, comunicados internos e acompanhamento de manutenções, tudo em um só lugar.",
      image: "reserva-ypes-2.png",
      tags: ["Angular", "Java - Spring Boot", "MySQL", "FireBase"],
      link: "https://reservadosypes2.com.br"
    },
    {
      id: 4,
      title: "Relucode",
      category: "Site Institucional",
      description:
        "Site institucional moderno e responsivo para apresentar a Relucode, destacando seus serviços de desenvolvimento de software, soluções digitais personalizadas e cases de sucesso. Foco em navegação intuitiva, informações claras sobre a empresa e facilitação do contato comercial.",
      image: "relucode-site.png",
      tags: ["React", "Tailwind", "Vite"],
      link: "https://relucode.com.br"
    },
    {
      id: 5,
      title: "Marketplace - Decor Design",
      category: "Sistema Personalizado",
      description:
        "Sistema de gestão de vendas para loja, com integrações a marketplaces e plataformas externas, facilitando o controle de pedidos, estoque e automação de processos comerciais.",
      image: "marketplace.png",
      tags: ["Angular", "Tailwind", "Laravel", "MSSQL Server", "Integrações (Shopee, Mercado Livre)"],
      link: "https://vidrosdecordesign.com.br"
    },
    {
      id: 6,
      title: "Envio automático de mensagem",
      category: "Automação IA",
      description:
        "Automação que envia mensagens personalizadas para clientes informando a data programada para o pagamento do imposto de renda, garantindo comunicação eficiente e redução de esquecimentos.",
      image: "automacao.webp",
      tags: ["n8n", "Open AI", "Google Drive", "Postgree SQL"]
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos em Destaque
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore nosso trabalho recente e descubra como ajudamos empresas a
            atingir seus objetivos digitais.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 bg-blue-600 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Ver Projeto
                      <ExternalLink size={16} />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        {/* <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            Veja Todos os Projetos
            <ArrowRight size={20} />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
