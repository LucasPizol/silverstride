type Service = {
  title: string;
  description: string;
  benefits: string[];
};

export default function ServicesCard({ service }: { service: Service }) {
  return (
    <div className="bg-primary-400 p-8 md:p-8">
      <h3 className="text-xl  font-bold text-white mb-1">{service.title}</h3>
      <p className="text-white mb-6 leading-relaxed">
        {service.description}
      </p>
      <div className="space-y-3 mb-6">
        {service.benefits.map((benefit, benefitIndex) => (
          <div key={benefitIndex} className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-default rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-3 h-3 text-primary-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-white text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
