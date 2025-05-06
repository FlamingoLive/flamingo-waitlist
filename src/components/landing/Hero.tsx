import { scrollToSection } from "@/utils/scrollUtils";
import Button from "@/components/common/Button";
import {
  OvalBase,
  Underline,
  HandIphoneX4,
  HandIphoneX1,
  HandIphoneX2,
  HandIphoneX3,
} from "@/assets/images";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  GamepadImg,
  NecklaceImg,
  ClothImg,
  ShoeImg,
  FlowerImg,
  SprayImg,
} from "@/assets/images";
import { useEffect, useState } from "react";
import Navbar from "../common/Navbar";

const Hero = () => {
  const [orbitRadius, setOrbitRadius] = useState(85);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setOrbitRadius(180);
      } else if (width >= 1280) {
        setOrbitRadius(170);
      } else if (width >= 1024) {
        setOrbitRadius(160);
      } else {
        setOrbitRadius(85);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const orbitingImages = [
    { src: GamepadImg, alt: "Gamepad" },
    { src: NecklaceImg, alt: "Necklace" },
    { src: ClothImg, alt: "Cloth" },
    { src: ShoeImg, alt: "Shoe" },
    { src: FlowerImg, alt: "Flower" },
    { src: SprayImg, alt: "Spray" },
  ];

  const scrollTo = (sectionId: string) => {
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative bg-primary-1 overflow-hidden"
    >
      <Navbar />

      {/* OvalBase overlay */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={OvalBase}
        alt="ovalbase"
        className="absolute top-0 left-0 2xl:top-[-1rem] 2xl:left-[-6rem] w-[32.125] h-[32.125rem] 2xl:w-[52.125] 2xl:h-[52.125rem] pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />

      {/* Spot Color */}
      <div className="absolute top-10 left-10 max-w-sm w-full h-30 bg-[#CCFF00]/30 rounded-full blur-[100px] z-0" />

      <div className="flex-1 flex flex-col border px-5 2xl:px-20">
        <div className="relative flex-1 max-w-[80rem] w-full h-full mx-auto py-3 sm:py-5 2xl:py-10 flex items-center 2xl:gap-[0.625rem]">
          {/* Left: Text */}
          <div className="flex flex-col max-w-[43.1475rem] w-full gap-[1.28rem]">
            <div className="flex flex-col gap-[1.066875rem]">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-semibold text-base text-[#F5C415] tracking-[11%]"
              >
                Go Live. Get Discovered. Shop Instantly
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl md:text-[2.8125rem] font-bold text-white"
              >
                Flamingo connects sellers and buyers{" "}
                <span className="relative inline-block">
                  in real-time
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    src={Underline}
                    alt="underline"
                    className="absolute left-0 bottom-[-0.5rem] w-full pointer-events-none select-none"
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="font-poppins text-base text-white leading-[160%] tracking-[0.11em]"
              >
                Discover trending products, interact with verified sellers, and
                shop securely — all in one live, vibrant marketplace.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-4 flex-wrap"
            >
              <Button
                variant="lime"
                size="lg"
                icon={<MdOutlineKeyboardArrowRight size={24} />}
                className="sm:max-w-[12.5rem] w-full h-[3.75rem]"
                onClick={() => scrollTo("joinwaitlist")}
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<FiPlay />}
                className="sm:max-w-[12.5rem] w-full h-[3.75rem] text-white border border-white hover:bg-white/10"
                onClick={() => scrollTo("howitworks")}
              >
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Right: Hand and iPhone */}
          <div className="hidden lg:flex h-full">
            <motion.div
              className="absolute -right-10 -bottom-5 w-full max-w-[35rem] 2xl:max-w-[47.721875rem]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full" style={{ aspectRatio: "763.55/572.66" }}>
                <img
                  src={HandIphoneX1}
                  alt="Hand and Iphone Image"
                  className="w-full h-full object-contain z-0"
                  srcSet={`${HandIphoneX1} 1x, ${HandIphoneX2} 2x, ${HandIphoneX3} 3x, ${HandIphoneX4} 4x`}
                />
              </div>

              {/* Orbiting Images */}
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
                      style={{
                        zIndex: 2,
                      }}
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
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          opacity: { duration: 0.5, delay: index * 0.2 },
                          scale: { duration: 0.5, delay: index * 0.2 },
                        }}
                        className="p-3"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-[3rem] md:w-[3.5rem] lg:w-[4rem] xl:w-[4.5rem] 2xl:w-[5.54rem] h-[3rem] md:h-[3.5rem] lg:h-[4rem] xl:h-[4.5rem] 2xl:h-[5.32rem] object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative flex flex-col justify-center gap-6 py-6 2xl:py-[2.0625rem] bg-[#a9d1a1]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-fit flex flex-wrap justify-center gap-2 sm:gap-4 2xl:gap-[2.75rem] mx-auto px-5 sm:px-10 2xl:px-20 text-text-dark"
        >
          <div className="flex flex-col gap-2 items-center px-4">
            <div className="text-xl 2xl:text-2xl font-medium">5000+</div>
            <div className="text-sm">Shoppers waiting</div>
          </div>
          <div className="border-l border-[#0C2319]" />
          <div className="flex flex-col gap-1 2xl:gap-2 items-center px-4">
            <div className="text-xl 2xl:text-2xl font-medium">500+</div>
            <div className="text-sm">Sellers</div>
          </div>
          <div className="border-l border-[#0C2319]" />
          <div className="flex flex-col gap-1 2xl:gap-2 items-center px-4">
            <div className="text-xl 2xl:text-2xl font-medium">3x Faster</div>
            <div className="text-sm">Shopping Experience</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex justify-center"
        >
          <Button
            variant="outline"
            size="sm"
            icon={
              <span className="w-6 h-6 rounded-full bg-text-dark/20 text-text-dark flex justify-center items-center">
                <MdOutlineKeyboardArrowDown size={24} />
              </span>
            }
            onClick={() => scrollTo("about")}
            className="flex-row-reverse max-w-[6.5rem] w-[90%] h-[2.75rem] bg-text-dark/3 text-text-dark uppercase p-[0.625rem] text-[0.625rem] whitespace-nowrap border-[0.5px] border-text-dark/70 hover:bg-text-dark/10"
          >
            About us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
