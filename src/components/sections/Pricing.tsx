import { pricingPlans } from "../../utils/pricing-plan";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Pricing = () => {
  return (
    <section id="products" className="py-5">
      <Container className="text-center">
        <Title>Featured Products and Treatments</Title>
      </Container>

      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {pricingPlans.map((plan, key) => (
            <div key={key} className="w-full max-w-sm group">
              {/* Outer gradient border */}
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full transition-transform duration-300 group-hover:scale-[1.02]">
                {/* Inner card */}
                <div className="bg-box-bg border border-box-border rounded-3xl shadow-xl shadow-box-shadow p-6 flex flex-col h-full relative hover:shadow-2xl">

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-heading-1 mb-2">{plan.title}</h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-600 mb-4">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="flex-1 space-y-2 text-left text-heading-3">
                    {plan.features.map((feature, keyFeatures) => (
                      <li key={keyFeatures} className="flex items-center gap-2">
                        <span className="text-primary text-base">✔️</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <p className="mt-4 text-xl md:text-2xl font-extrabold text-heading-1">{plan.price}</p>

                  {/* Button */}
                  <div className="mt-4">
                    {/* <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-2 font-semibold rounded-2xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      Choose Plan
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
