import { motion } from "framer-motion";
import {
  DollarCoin,
  NairaCoin,
  KshCoin,
  PoundCoin,
  RCoin,
  SolLogo,
  PrivyLogo,
  CircleLogo,
} from "@/assets/imagesv2";

const coins = [
  { src: DollarCoin, alt: "Dollar", className: "absolute left-[2%] top-1/2 -translate-y-1/2 w-[140px] lg:w-[180px]" },
  { src: RCoin, alt: "R Coin", className: "absolute left-[16%] top-[8%] w-[90px] lg:w-[115px]" },
  { src: NairaCoin, alt: "Naira", className: "absolute right-[30%] top-[4%] w-[95px] lg:w-[120px]" },
  { src: PoundCoin, alt: "Pound", className: "absolute right-[2%] top-1/2 -translate-y-1/2 w-[140px] lg:w-[180px]" },
  { src: KshCoin, alt: "KSh", className: "absolute right-[15%] bottom-[6%] w-[90px] lg:w-[115px]" },
];

const PayBanner = () => {
  return (
    <section className="relative bg-[#040C02] w-full px-5 sm:px-10 2xl:px-20 overflow-hidden flex items-center justify-center min-h-[246px]">
      {/* Coins — hidden on mobile */}
      <div className="hidden sm:contents">
        {coins.map((coin) => (
          <motion.img
            key={coin.alt}
            src={coin.src}
            alt={coin.alt}
            className={coin.className}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Center content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-5 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {/* Badge */}
        <span className="bg-white/10 border border-white/20 text-white text-[12px] font-inter px-4 py-1.5 rounded-full tracking-wide">
          Pay Your Way, Across the Globe
        </span>

        {/* Headline */}
        <h2 className="font-bricolage font-bold text-[36px] sm:text-[48px] text-white leading-none">
          Fast, Cheap, Borderless
        </h2>

        {/* Powered by */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="font-inter text-[14px] text-white/60">Powered by</span>
          <img src={SolLogo} alt="Solana" className="h-6 sm:h-10 object-contain" />
          <img src={PrivyLogo} alt="Privy" className="h-6 sm:h-10 object-contain" />
          <img src={CircleLogo} alt="Circle" className="h-6 sm:h-10 object-contain" />
        </div>
      </motion.div>
    </section>
  );
};

export default PayBanner;
