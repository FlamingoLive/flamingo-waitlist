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
  { src: DollarCoin, alt: "Dollar", className: "absolute left-[2%] top-1/2 -translate-y-1/2 w-[100px] lg:w-[130px]" },
  { src: RCoin, alt: "R Coin", className: "absolute left-[14%] top-[10%] w-[60px] lg:w-[80px]" },
  { src: NairaCoin, alt: "Naira", className: "absolute right-[30%] top-[5%] w-[70px] lg:w-[90px]" },
  { src: PoundCoin, alt: "Pound", className: "absolute right-[4%] top-1/2 -translate-y-1/2 w-[100px] lg:w-[130px]" },
  { src: KshCoin, alt: "KSh", className: "absolute right-[14%] bottom-[8%] w-[60px] lg:w-[80px]" },
];

const PayBanner = () => {
  return (
    <section className="relative bg-[#040C02] w-full py-[56px] px-5 sm:px-10 2xl:px-20 overflow-hidden flex items-center justify-center min-h-[220px]">
      {/* Coins */}
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
          <img src={SolLogo} alt="Solana" className="h-5 object-contain" />
          <img src={PrivyLogo} alt="Privy" className="h-5 object-contain" />
          <img src={CircleLogo} alt="Circle" className="h-5 object-contain" />
        </div>
      </motion.div>
    </section>
  );
};

export default PayBanner;
