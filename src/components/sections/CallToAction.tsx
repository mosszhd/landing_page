// import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { FeatureCard } from "../../components/cards/FeatureCard"; // adjust path as needed

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      <Container>
        {/* Flex container: FeatureCard + Image */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left: Feature Card */}
          <div className="flex-1">
            <FeatureCard
              points={[
                "Physician-guided, personalized care",
                "Science-backed treatments with real results",
                "Concierge support and flexible scheduling",
                "Private, comfortable and professional experience",
              ]}
            />
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <img
              src="../../public/assets/contact_us.jpeg" // replace with your image path
              alt="Consultation illustration"
              className="w-full h-auto rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Button outside the flex container */}
        <div className="mt-10 text-center">
          {/* <Button>Get In Touch</Button> */}
        </div>
      </Container>
    </section>
  );
};
