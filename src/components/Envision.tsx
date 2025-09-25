export default function Envision() {
  return (
    <section
      id="envision"
      className="bg-primary-400"
      style={{
        paddingBottom: "0",
        marginTop: "3rem",
      }}
    >
      <div className="flex gap-12 envision-container">
        <div className="flex flex-col gap-6 items-start justify-center container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How do you envision a healthy lifespan?
          </h2>
          <p className="text-lg text-white">
            Envisioning a healthy lifespan means aging with strength,
            independence, and dignity. At SilverStride, we empower seniors to
            move with confidence, prevent falls, recover safely after surgery,
            and maintain overall well-being—supporting both patients and
            caregivers so every stage of life can be lived with resilience and
            hope.
          </p>
          <a href="#services" className="btn btn-secondary text-lg px-8 py-4">
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
            Talk to us
          </a>
        </div>

        <img
          src="/img-envision-section.png"
          alt="Envision"
          className="h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
