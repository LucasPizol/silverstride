import Image from "next/image";

export default function PersonalizedCare() {
  return (
    <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 relative container-custom w-full">
      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-primary-400 mb-6">
          Personalized Care for Each Patient
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          All services are specially tailored to the needs of older adults and
          include education and support for caregivers, ensuring holistic and
          sustained care both at home and in the clinic.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
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
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Home Care
            </h4>
            <p className="text-gray-600 text-sm">
              We bring our services to the comfort of your home
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Caregiver Support
            </h4>
            <p className="text-gray-600 text-sm">
              Education and Training for Family Members and Caregivers
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
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
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Continuous Monitoring
            </h4>
            <p className="text-gray-600 text-sm">
              Regular Monitoring of Progress and Treatment Adjustments
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center schedule-row">
          <a
            href="#contact"
            className="btn btn-primary text-lg px-8 py-4 flex-1"
          >
            Schedule an Assessment
          </a>

          <Image
            src="/img-personalized-care.png"
            alt="Fisioterapeuta especializada"
            width={700}
            height={700}
            className="img-personalized-care"
          />
        </div>
      </div>
    </div>
  );
}
