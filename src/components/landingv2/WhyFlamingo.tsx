import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scrollUtils";
import {
  BuyerProtectionIcons,
  LightningIcon,
  WorldIcon,
  OffRampIcon,
} from "@/assets/imagesv2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "@/components/common/Button";

interface FeatureCard {
  badge: string;
  icon: string;
  title: string;
  description: string;
}

const cards: FeatureCard[] = [
  {
    badge: "99.9% Secure",
    icon: BuyerProtectionIcons,
    title: "Buyer Protection",
    description: "Smart escrow. Buyer protection on every transaction.",
  },
  {
    badge: "<2s Checkout",
    icon: LightningIcon,
    title: "Lightning Fast",
    description: "Instant payment means no waiting, low fees, no boundaries.",
  },
  {
    badge: "50+ Countries",
    icon: WorldIcon,
    title: "Global Reach",
    description: "Connect African sellers with global audiences instantly.",
  },
  {
    badge: "Stablecoin to Fiat",
    icon: OffRampIcon,
    title: "Off-Ramp",
    description: "Auto-conversion to 50+ local currencies.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const WhyFlamingo = () => {
  const scrollTo = (sectionId: string) => {
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  return (
    <section
      id="whyflamingo"
      className="bg-[#f8f8f8] w-full py-[60px] px-5 sm:px-10 2xl:px-20 flex flex-col gap-10 items-center"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col gap-[10px] items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bricolage font-bold text-[24px] text-[#131313]">
          Why Flamingo LIVE?
        </h2>
        <p className="font-inter text-[16px] text-[#131927] tracking-[0.5px] leading-[1.2]">
          Empowering African commerce on a global scale
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-[79rem]">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative bg-white border border-[#84b200] rounded-[16px] p-6 flex flex-col gap-6 overflow-hidden"
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="bg-[rgba(158,208,0,0.12)] text-[#203c18] text-[10px] font-inter font-medium uppercase px-2 py-0.5 rounded-full tracking-wide">
                {card.badge}
              </span>
            </div>

            {/* Icon — decorative, top-right */}
            <img
              src={card.icon}
              alt=""
              aria-hidden="true"
              className="absolute top-0 right-0 w-24 h-24  pointer-events-none select-none object-contain"
            />

            {/* Text */}
            <div className="flex flex-col gap-3">
              <h3 className="font-inter font-semibold text-[18px] text-[#131313] leading-[28px]">
                {card.title}
              </h3>
              <p className="font-inter text-[16px] text-[#4d5461] leading-[24px] tracking-[0.32px]">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* HOW IT WORKS scroll button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Button
          variant="outline"
          size="sm"
          icon={
            <span className="w-6 h-6 rounded-full bg-black/20 flex justify-center items-center">
              <MdOutlineKeyboardArrowDown size={20} />
            </span>
          }
          className="flex-row-reverse h-[2.75rem] bg-black/3 text-black/60 uppercase px-[0.625rem] text-[0.625rem] whitespace-nowrap border-[0.5px] border-black/70 hover:bg-black/10 rounded-full"
          onClick={() => scrollTo("howitworks")}
        >
          HOW IT WORKS
        </Button>
      </motion.div>
    </section>
  );
};

export default WhyFlamingo;
