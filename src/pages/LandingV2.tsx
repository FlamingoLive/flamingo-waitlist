import HeroV2 from "@/components/landingv2/HeroV2";
import WhyFlamingo from "@/components/landingv2/WhyFlamingo";
import HowItWorksV2 from "@/components/landingv2/HowItWorksV2";
import JoinWaitlist from "@/components/landing/JoinWaitlist";
import FAQ from "@/components/landing/FAQ";
import FooterV2 from "@/components/common/FooterV2";

const LandingV2 = () => {
  return (
    <main className="overflow-hidden">
      <HeroV2 />
      <WhyFlamingo />
      <HowItWorksV2 />
      <JoinWaitlist />
      <FAQ />
      <FooterV2 />
    </main>
  );
};

export default LandingV2;
