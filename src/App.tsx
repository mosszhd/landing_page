import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { BookConsultation } from "./components/sections/consulation";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
// import { ConsultationForm } from "./components/sections/ConsultationForm";
import { ConsultationSection } from "./components/sections/ConsultationSection";

function App() {
  return (
    <Layout title="ForgeWellLabs">
      <Hero />
      {/* <Brands /> */}
      <BookConsultation />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
      <ConsultationSection />
    </Layout>
  );
}

export default App;
