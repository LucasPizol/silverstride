import ServicesCard from "./Services/ServicesCard";

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Fisioterapia Geriátrica",
      description:
        "Cuidado personalizado para adultos mais velhos, focado em restaurar e manter mobilidade, força e independência para melhorar a qualidade de vida geral.",
      benefits: [
        "Avaliação completa da mobilidade",
        "Planos de tratamento personalizados",
        "Foco na independência funcional",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Prevenção de Quedas & Equilíbrio",
      description:
        "Avaliações completas e programas de exercícios individualizados para minimizar riscos de quedas, melhorar o equilíbrio e a estabilidade da marcha.",
      benefits: [
        "Avaliação de riscos de queda",
        "Treinamento de equilíbrio",
        "Correção postural",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Reabilitação Pós-Cirúrgica",
      description:
        "Reabilitação estruturada para apoiar idosos a recuperar força e função após cirurgias, garantindo uma recuperação mais suave e segura.",
      benefits: [
        "Recuperação pós-cirúrgica especializada",
        "Fortalecimento gradual",
        "Retorno seguro às atividades",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"
          />
        </svg>
      ),
      title: "Exercícios Terapêuticos & Terapia Manual",
      description:
        "Planos de exercícios personalizados combinados com terapia manual prática para aliviar a dor, reduzir rigidez e aumentar a flexibilidade articular.",
      benefits: [
        "Exercícios personalizados",
        "Terapia manual especializada",
        "Alívio da dor e rigidez",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-16  w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Specialized Services Tailored to the Needs of Older Adults
          </p>
        </div>
        <div className="bg-gray-200">
          <div className="container-custom grid md:grid-cols-2 lg:grid-cols-2 services-card-wrapper">
            <ServicesCard service={services[0]} />

            <div className="flex items-center justify-center">
              <img
                src="/our-services/01.png"
                alt="Fisioterapeuta especializada"
                className="object-contain object-center"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/our-services/02.png"
                alt="Fisioterapeuta especializada"
                className="object-contain object-center w-full"
              />
            </div>
            <ServicesCard service={services[1]} />
            <ServicesCard service={services[2]} />
            <div className="flex items-center justify-center">
              <img
                src="/our-services/03.png"
                alt="Fisioterapeuta especializada"
                className="object-contain object-center w-full"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/our-services/04.png"
                alt="Fisioterapeuta especializada"
                className="object-contain object-center w-full"
              />
            </div>
            <ServicesCard service={services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
