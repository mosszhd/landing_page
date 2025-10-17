import { ConsultationForm } from "./ConsultationForm"; // adjust path as needed
import { Container } from "../shared/Container";

export const ConsultationSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          {/* Left Side - Info */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            {/* Logo */}
            <img
              src="../../assets/logos/forgewell.png" // replace with your logo path
              alt="ForgeWell Labs"
              className="h-16 mx-auto md:mx-0"
            />

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
              Get in Touch With Us
            </h2>

            {/* Contact Info */}
            <p className="text-gray-700">
              Phone: <a href="tel:+1 (623) 703-2986" className="font-semibold text-indigo-600">+1 (623) 703-2986</a>
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:info@forgewelllabs.com" className="font-semibold text-indigo-600">info@forgewelllabs.com</a>
            </p>

            <p className="text-gray-600 max-w-sm">
              Our experts are ready to answer your questions and guide you through personalized, physician-led wellness solutions.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1">
            <ConsultationForm />
          </div>

        </div>
      </Container>
    </section>
  );
};
