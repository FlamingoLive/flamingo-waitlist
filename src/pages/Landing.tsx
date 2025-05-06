import JoinWaitlist from "@/components/landing/JoinWaitlist";
import HowItWorks from "@/components/landing/HowItWorks";
import About from "../components/landing/About";
import Hero from "../components/landing/Hero";
import FAQ from "@/components/landing/FAQ";

const Landing = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <HowItWorks />
      <JoinWaitlist />
      <FAQ />
    </main>
  );
};

export default Landing;
