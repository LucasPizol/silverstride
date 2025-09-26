import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "100px", minHeight: "900px" }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/mulher-e-doutora.png"
          alt="Fisioterapeuta especializada"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/60"></div>
      </div>

      <div className="absolute inset-0 bg-pattern-grid opacity-50 z-1"></div>

      <div className="floating-circle floating-circle-1"></div>
      <div className="floating-circle floating-circle-2"></div>
      <div className="floating-circle floating-circle-3"></div>
      <div className="floating-shape floating-shape-1"></div>
      <div className="floating-shape floating-shape-2"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full grid-hero-section">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4 grid-hero-section-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
                Walk Stronger,{" "}
                <span className="text-primary-600 relative">
                  Live with Confidence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Specialized and compassionate physical therapy for older adults.
                We help you maintain independence, strength, and dignity
                throughout the aging process.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 grid-hero-section-cta">
              <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule an Appointment
              </a>
              <a
                href="#services"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Our Services
              </a>
            </div>
          </div>

          <div className="animate-slide-in-right fisio-card-container-wrapper">
            <div className="relative fisio-card-container flex justify-end">
              <div
                style={{
                  position: "relative",
                  paddingTop: "110px",
                  backgroundColor: "#F9F3F3",
                }}
                className="rounded-2xl shadow-2xl p-8 relative z-10 flex flex-col items-center inner-fisio-card-container"
              >
                <Image
                  src="/img-hero-section.png"
                  alt="Fisioterapeuta especializada"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    transform: "translate(-50%, -73%)",
                    objectFit: "contain",
                    maxHeight: "380px",
                  }}
                  width={400}
                  height={400}
                />

                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-400">
                      Ana Paula Guerra Junqueira, PT
                    </h3>
                    <p className="text-primary-600 font-semibold">
                      Geriatric Physical Therapist
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-black fisio-card-content">
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="w-4 h-4 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                      </svg>
                      <span>18+ years of experience Postgraduate</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="w-4 h-4 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      <span>Graduate degree in Clinical Rehabilitation</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="w-4 h-4 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <span>Diploma in Geriatrics</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-400 hover:text-primary-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
