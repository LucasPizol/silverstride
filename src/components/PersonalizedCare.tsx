import Image from "next/image";
import { MdHome, MdPeople, MdSupport, MdSupportAgent } from "react-icons/md";

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
              <MdHome className="w-8 h-8 text-primary-600" />
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
              <MdPeople className="w-8 h-8 text-primary-600" />
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
              <MdSupportAgent className="w-8 h-8 text-primary-600" />
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
