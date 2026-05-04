import {
  OvalBase,
  FlamingoWhiteLogo,
  HandIphoneX1,
  HandIphoneX2,
  HandIphoneX3,
  HandIphoneX4,
  GamepadImg,
  NecklaceImg,
  ClothImg,
  ShoeImg,
  FlowerImg,
  SprayImg,
} from "@/assets/images";
import { Underline } from "@/assets/imagesv2";
import { scrollToSection } from "@/utils/scrollUtils";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import { useEffect, useState } from "react";

const orbitingImages = [
  { src: GamepadImg, alt: "Gamepad" },
  { src: NecklaceImg, alt: "Necklace" },
  { src: ClothImg, alt: "Cloth" },
  { src: ShoeImg, alt: "Shoe" },
  { src: FlowerImg, alt: "Flower" },
  { src: SprayImg, alt: "Spray" },
];

const HeroV2 = () => {
  const [orbitRadius, setOrbitRadius] = useState(85);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setOrbitRadius(130);
      } else if (width >= 1280) {
        setOrbitRadius(120);
      } else if (width >= 1024) {
        setOrbitRadius(110);
      } else {
        setOrbitRadius(65);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const scrollTo = (sectionId: string) => {
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  return (
    <section id="hero" className="relative bg-[#040C02] overflow-hidden lg:min-h-screen flex flex-col">
      {/* Decorative oval */}
      <img
        src={OvalBase}
        alt=""
        aria-hidden="true"
        className="absolute -top-16 -left-20 w-[34rem] h-[34rem] pointer-events-none select-none opacity-60"
      />
      {/* Lime glow */}
      <div className="absolute top-10 left-10 w-72 h-32 bg-[#CCFF00]/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 border-b border-[#a9d1a1] px-5 sm:px-10 2xl:px-20 py-5 2xl:py-10">
        <div className="max-w-[80rem] w-full mx-auto flex items-center justify-between py-3">
          <a href="/v2" className="flex items-center">
            <img
              src={FlamingoWhiteLogo}
              alt="Flamingo"
              className="h-10 sm:h-12 md:h-16 w-auto"
            />
          </a>

          <Button
            variant="lime"
            size="md"
            className="rounded-full"
            onClick={() => scrollTo("joinwaitlist")}
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative flex items-start px-5 sm:px-10 lg:px-24 xl:px-36 2xl:px-48 pt-10 flex-1 min-h-[36rem]">
        {/* Left: text */}
        <div className="relative z-10 flex flex-col gap-14 max-w-[44rem] py-10 lg:py-16">
          <div className="flex flex-col gap-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-bricolage font-semibold text-[#eed312] text-base tracking-[0.11em]"
            >
              Go Live. Get Discovered. Shop Instantly
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-bricolage font-bold text-white text-4xl md:text-[2.625rem] leading-tight"
            >
              Flamingo connects African sellers to global audiences{" "}
              <span className="relative inline-block">
                in real-time
                <motion.img
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  src={Underline}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-0 bottom-[-0.4rem] w-full pointer-events-none select-none origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="font-inter text-white text-lg leading-6 max-w-[670px]"
            >
              Discover shoppable streams, interact with verified sellers, and
              shop securely — all in one live, vibrant marketplace.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex gap-4 flex-wrap items-center"
          >
            <Button
              variant="lime"
              size="lg"
              icon={<MdOutlineKeyboardArrowRight size={20} />}
              className="rounded-full w-full sm:w-auto h-[60px]"
              onClick={() => scrollTo("joinwaitlist")}
            >
              Join Waitlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<FiPlay size={18} />}
              className="rounded-full h-[60px] w-full sm:w-auto text-white border border-white hover:bg-white/10"
              onClick={() => scrollTo("howitworks")}
            >
              See How It Works
            </Button>
          </motion.div>
        </div>

        {/* Right: hand + phone mockup + orbiting products */}
        <motion.div
          className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-full max-w-[40rem] xl:max-w-[46rem] 2xl:max-w-[54rem] pointer-events-none select-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full" style={{ aspectRatio: "763.55/572.66" }}>
            <img
              src={HandIphoneX4}
              alt="Hand and iPhone"
              className="w-full h-full object-contain z-0"
              srcSet={`${HandIphoneX1} 1x, ${HandIphoneX2} 2x, ${HandIphoneX3} 3x, ${HandIphoneX4} 4x`}
            />
          </div>

          {/* Orbiting product images */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateY(-20%)" }}
          >
            {orbitingImages.map((image, index) => {
              const startAngle =
                index * (360 / orbitingImages.length) * (Math.PI / 180);
              return (
                <motion.div
                  key={image.alt}
                  className="absolute"
                  style={{ zIndex: 2 }}
                  animate={{
                    x: Array.from({ length: 80 }, (_, i) => {
                      const angle = startAngle + (i * (2 * Math.PI)) / 80;
                      return `${orbitRadius * Math.cos(angle)}%`;
                    }),
                    y: Array.from({ length: 80 }, (_, i) => {
                      const angle = startAngle + (i * (2 * Math.PI)) / 80;
                      return `${orbitRadius * Math.sin(angle)}%`;
                    }),
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      opacity: { duration: 0.5, delay: index * 0.2 },
                      scale: { duration: 0.5, delay: index * 0.2 },
                    }}
                    className="p-3"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-[3.5rem] lg:w-[4rem] xl:w-[4.5rem] 2xl:w-[5.54rem] h-[3.5rem] lg:h-[4rem] xl:h-[4.5rem] 2xl:h-[5.32rem] object-contain"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroV2;
