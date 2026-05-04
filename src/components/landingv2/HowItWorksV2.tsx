import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { scrollToSection } from "@/utils/scrollUtils";
import Button from "@/components/common/Button";
import {
  PaymentModal,
  SellerGoesLiveIcon,
  WatchEngageIcon,
  InstantCheckoutIcon,
  DeliveryConfirmedIcon,
  RepRewardsIcon,
} from "@/assets/imagesv2";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";

const STEP_DURATION = 3500;

interface Step {
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: SellerGoesLiveIcon,
    title: "Seller Goes Live",
    description:
      "Seller launches a shoppable stream from the Flamingo app. Products overlay in real-time.",
  },
  {
    icon: WatchEngageIcon,
    title: "Buyers Watch & Engage",
    description:
      "Viewers react, ask questions, see social proof. Building trust before they tap buy.",
  },
  {
    icon: InstantCheckoutIcon,
    title: "Instant Checkout",
    description:
      "Buyer taps 'Buy Now'. Payment via credit card, bank transfer or USDC. Escrowed instantly. No card friction.",
  },
  {
    icon: DeliveryConfirmedIcon,
    title: "Delivery Confirmed",
    description:
      "Buyer confirms receipt. Escrow releases. Seller receives local currency via off-ramp.",
  },
  {
    icon: RepRewardsIcon,
    title: "Rep & Rewards",
    description:
      "Build your reputation and earn rewards with every completed transaction.",
  },
];

const HowItWorksV2 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [fillPct, setFillPct] = useState(0);

  const scrollTo = (sectionId: string) => {
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  useEffect(() => {
    setFillPct(0);
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / STEP_DURATION) * 100, 100);
      setFillPct(pct);
      if (pct >= 100) clearInterval(interval);
    }, 16);

    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [activeStep]);

  return (
    <section
      id="howitworks"
      className="relative bg-[#071404] w-full py-[60px] px-5 sm:px-10 2xl:px-[87px] flex flex-col gap-[60px] items-center overflow-hidden"
    >

      {/* Header */}
      <motion.div
        className="flex flex-col gap-[10px] items-start w-full max-w-[80rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bricolage font-bold text-[24px] text-white">
          HOW FLAMINGO WORKS
        </h2>
        <p className="font-inter text-[20px] text-[#e5e7ea] leading-[26px] max-w-[700px]">
          Shop smarter, faster, and more personally — all through live,
          interactive streams.
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-[140px] items-center w-full max-w-[80rem]">
        {/* Left: payment modal image */}
        <motion.div
          className="shrink-0 w-full lg:w-[420px]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={PaymentModal}
            alt="Flamingo payment flow"
            className="w-full h-auto object-contain rounded-[28px]"
          />
        </motion.div>

        {/* Right: animated timeline */}
        <div className="flex gap-4 items-start flex-1 min-w-0">
          {/* Vertical progress track */}
          <div className="flex flex-col gap-[10px] items-center shrink-0 pt-7">
            {steps.map((_, i) => (
              <div
                key={i}
                className="w-[6px] h-[104px] rounded-[24px] overflow-hidden bg-[rgba(204,255,0,0.08)]"
              >
                {i < activeStep && (
                  <div className="w-full h-full bg-[rgba(204,255,0,0.74)] rounded-[24px]" />
                )}
                {i === activeStep && (
                  <div
                    className="w-full bg-[rgba(204,255,0,0.74)] rounded-[24px]"
                    style={{ height: `${fillPct}%`, transition: "height 16ms linear" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step items */}
          <div className="flex flex-col flex-1 min-w-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="flex gap-3 items-start px-[10px] py-5 rounded-[17px] cursor-pointer"
                animate={{ opacity: i === activeStep ? 1 : 0.35 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveStep(i)}
              >
                {/* Glass icon container */}
                <div className="flex items-center justify-center p-[10px] rounded-[14px] shrink-0 bg-white/10 backdrop-blur-md border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                  <img
                    src={step.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                  <h3 className="font-bricolage font-semibold text-[20px] text-white tracking-[-0.128px]">
                    {step.title}
                  </h3>
                  <p className="font-inter text-[16px] text-[#d2d5db] leading-[24px] tracking-[0.32px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="flex flex-col gap-10 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-[10px] items-center text-center">
          <p className="font-bricolage font-semibold text-[20px] text-white">
            Be the First to Stream, Shop, and Shine — Join Our Waitlist Today
          </p>
          <p className="font-inter text-[18px] text-[#d2d5db] leading-[24px] max-w-[700px]">
            Get early access to exclusive live shopping experiences. Secure your
            spot and stay ahead of the trend
          </p>
        </div>

        <Button
          variant="lime"
          size="lg"
          icon={<MdOutlineKeyboardArrowRight size={20} />}
          className="rounded-full w-[200px] h-[60px]"
          onClick={() => scrollTo("joinwaitlist")}
        >
          Join Waitlist
        </Button>

        <Button
          variant="outline"
          size="sm"
          icon={
            <span className="w-6 h-6 rounded-full bg-white/20 flex justify-center items-center">
              <MdOutlineKeyboardArrowDown size={16} />
            </span>
          }
          className="flex-row-reverse h-[2.75rem] bg-white/3 text-white/70 px-[0.625rem] text-[0.625rem] whitespace-nowrap border-[0.5px] border-white/70 hover:bg-white/10 rounded-full"
          onClick={() => scrollTo("joinwaitlist")}
        >
          {""}
        </Button>
      </motion.div>
    </section>
  );
};

export default HowItWorksV2;
