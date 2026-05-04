import {
  OvalBase,
  FlamingoWhiteLogo,
  HandIphoneX4,
  HandIphoneX1,
  HandIphoneX2,
  HandIphoneX3,
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

  const scrollTo = (sectionId: string) => {
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  return (
    <section
      id="hero"
      className="h-[calc(100vh-220px)] flex flex-col relative bg-[#040C02] overflow-hidden"
    >
      {/* OvalBase overlay */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={OvalBase}
        alt="ovalbase"
        className="absolute top-0 left-0 2xl:top-[-1rem] 2xl:left-[-6rem] w-[32.125rem] h-[32.125rem] xl:w-[40.125rem] xl:h-[40.125rem] pointer-events-none select-none opacity-60"
        style={{ zIndex: 0 }}
      />

      {/* Spot Color */}
      <div className="absolute top-10 left-10 max-w-sm w-full h-30 bg-[#CCFF00]/20 rounded-full blur-[100px] z-0" />

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

      <div className="flex-1 flex flex-col px-5 sm:px-10 2xl:px-20">
        <div className="relative flex-1 max-w-[80rem] w-full h-full mx-auto py-3 sm:py-5 2xl:py-10 flex items-center 2xl:gap-[0.625rem]">
          {/* Left: Text */}
          <div className="flex flex-col max-w-[43.1475rem] w-full gap-[1.28rem]">
            <div className="flex flex-col gap-[1.066875rem]">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-bricolage font-semibold text-base text-[#eed312] tracking-[11%]"
              >
                Go Live. Get Discovered. Shop Instantly
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-bricolage text-[42px] font-bold text-white"
              >
                Flamingo connects African sellers to global audiences{" "}
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
                className="font-inter text-base text-white leading-[160%] tracking-[0.11em]"
              >
                Discover shoppable streams, interact with verified sellers, and
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
              animate={{ opacity: 1, x: 30 }}
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
    </section>
  );
};

export default HeroV2;
