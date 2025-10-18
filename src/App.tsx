import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
// import { Brands } from "./components/sections/Brands";
import { BookConsultation } from "./components/sections/consulation";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
// import { ConsultationForm } from "./components/sections/ConsultationForm";
import { ConsultationSection } from "./components/sections/ConsultationSection";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-right" reverseOrder={false} />
      <ConsultationSection />
    </Layout>
  );
}

export default App;
