import Image from "next/image";
import Envision from "./Envision";

export default function About() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Our Mission",
      description:
        "At <b>Silverstride</b>, our mission is to restore <b>independence</b>, enhance <b>mobility</b>, and improve <b>quality of life</b> for older adults through <b>compassionate, evidence-based physical therapy</b>. We are dedicated to creating personalized rehabilitation programs that respect each patient’s <b>unique history, needs and goals</b>. With focus on <b>safety, dignity and empowerment</b>, we strive to help every individual age with strength, confidence and renewed vitality.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Specialized Experience",
      description:
        "Ms. Junqueira holds advanced training in Clinical Rehabilitation from Flinders University in Australia and in Geriatrics from Campinas State University in Brazil.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0h3m0 0h3m0 0a1 1 0 001-1V10M9 21v-6a1 1 0 011-1h2a1 1 0 011 1v6"
          />
        </svg>
      ),
      title: "Holistic Care",
      description:
        "Our approach includes education and support for formal and informal caregivers, ensuring sustained care both at home and in the clinic.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-default flex flex-col">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About SilverStride
        </h2>
        <p className="text-lg text-gray-600">
          Dedicated to improving the quality of life of older adults through
          specialized physical therapy and rehabilitation services.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center  container-custom">
        {/* Content */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-200 transition-colors">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </div>
            </div>
          ))}
        </div>

        {/* Image/Visual */}
        <div className="relative">
          <img
            src="/img-about-section.png"
            alt="Fisioterapeuta especializada"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      {/* Bottom section with additional info */}
      <div className="mt-20 text-center">
        <div className="bg-primary-400 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Commitment to Excellence
          </h3>
          <p className="text-lg text-white max-w-4xl mx-auto mb-8">
            The SilverStride Physical Therapy Center LLC is built on a
            foundation of clinical excellence, compassionate service, and a deep
            commitment to helping older adults walk stronger, live with more
            safety, and age with dignity.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Personalized Care</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Evidence-Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Comprehensive Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-400 w-full flex justify-end items-end">
        <Envision />
      </div>
    </section>
  );
}
