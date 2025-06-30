import Hero from "@/components/sections/Hero";
import BestSellers from "@/components/sections/BestSellers";
import Faq from "@/components/sections/Faq";
import OurStory from "@/components/sections/OurStory";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <OurStory />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
