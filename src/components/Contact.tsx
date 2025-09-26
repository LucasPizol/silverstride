"use client";

import Image from "next/image";
import { useState } from "react";
import { MdSend } from "react-icons/md";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      await fetch("/api/send-email", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      });

      setIsLoading(false);
      setSuccess("Email sent successfully");
    } catch (error) {
      setIsLoading(false);
      setError("Failed to send email, please try again later.");
    }

    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-default">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            We are here to help you take the first step toward a healthier and
            more independent life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Image
            src="/img-contact-section.png"
            alt="Fisioterapeuta especializada"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
          />

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="geriatric">Geriatric Physical Therapy</option>
                  <option value="balance">Fall Prevention & Balance</option>
                  <option value="postsurgery">
                    Post-Surgical Rehabilitation
                  </option>
                  <option value="manual">
                    Therapeutic Exercises & Manual Therapy
                  </option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your needs or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary text-lg py-4 flex gap-2 items-center justify-center"
                disabled={isLoading}
                style={{
                  opacity: isLoading ? 0.5 : 1,
                }}
              >
                <MdSend />
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {error && (
                <div className="border border-red-600 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-500 text-center text-red-600 font-bold">
                    {error}
                  </p>
                </div>
              )}
              {success && (
                <div className="border border-green-100 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-500 text-center text-green-600 font-bold">
                    {success}
                  </p>
                </div>
              )}
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              * Required fields. We will respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
