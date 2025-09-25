import Image from "next/image";

export default function Stories() {
  return (
    <section id="services" className="section-padding w-full">
      <div className="text-center max-w-3xl mx-auto mb-16 w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-400 mb-4">
          Stories of Strength, Resilience and Recovery
        </h2>
        <p className="text-lg text-gray-600">
          Behind every recovery, relentless dedication. We are honored to be
          part of each patient&apos;s story, helping them regain the strength,
          balance, and confidence to live more independently in the comfort of
          their own home.
        </p>
      </div>
      <div className="w-full flex items-center justify-center container-custom">
        <div className="grid gap-6 w-full stories-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <Image
              key={`/stories/${index + 1}.webp`}
              src={`/stories/${index + 1}.webp`}
              alt="Fisioterapeuta especializada"
              width={500}
              height={500}
              className="h-full object-cover rounded-lg"
              style={{
                maxHeight: "300px",
                flex: "1 0 350px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
