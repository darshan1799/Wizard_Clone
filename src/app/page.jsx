import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import WhyWe from "@/components/WhyWe";
import ContactSections from "@/components/ContactUs";
import OurResult from "@/components/OurResult";
import Review from "@/components/Review";
import DiscountBanner from "@/components/Discount";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <WhyWe />
      <DiscountBanner />
      <OurResult />
      <Review />
      <ContactSections />
    </>
  );
}
