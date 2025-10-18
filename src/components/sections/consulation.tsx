import { Container } from "../shared/Container";
import { Button } from "../shared/Button";
import { Title } from "../shared/Title";

export const BookConsultation = () => {
  // Example: collect user info from form or state

  const openCalendlyPopup = () => {
    const calendlyUrl = `https://calendly.com/forgewelllabs-info/`;

    //@ts-ignore
    if (window.Calendly) {
      //@ts-ignore
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // fallback: open in new tab
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <Container className="text-center space-y-6">
        {/* Section Title */}
        <Title>Ready to Start Your Wellness Journey?</Title>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          Book a consultation with our certified telehealth experts today and take
          the first step toward a healthier, personalized wellness plan.
        </p>

        {/* Button */}
        <Button
          onClick={openCalendlyPopup}
          className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 px-8 rounded-2xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Book Consultation
        </Button>
      </Container>
    </section>
  );
};
