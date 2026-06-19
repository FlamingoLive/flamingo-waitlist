import { OvalBase } from "@/assets/images";
import { Underline } from "@/assets/imagesv2";
import {
  FlamingoLiveLogoWord,
  BagInner,
  ControllersOuter,
  FemaleClothOuter,
  HeadsetOuter,
  HeroMobilePhone,
  MakeupOuter,
  MaleTeeInner,
  MaleTeeOuter,
  PerfumeOuter,
  SneakersOuter,
  SunglassesOuter,
} from "@/assets/imagesV3";
import { scrollToSection } from "@/utils/scrollUtils";
import Button from "@/components/common/Button";
import PayBanner from "@/components/landingv2/PayBanner";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import { useEffect, useState } from "react";

const innerOrbitImages = [
  { src: BagInner, alt: "Bag" },
  { src: MaleTeeInner, alt: "Male Tee Inner" },
];

const outerOrbitImages = [
  { src: SunglassesOuter, alt: "Sunglasses" },
  { src: MaleTeeOuter, alt: "Male Tee Outer" },
  { src: SneakersOuter, alt: "Sneakers" },
  { src: ControllersOuter, alt: "Controllers" },
  { src: HeadsetOuter, alt: "Headset" },
  { src: MakeupOuter, alt: "Makeup" },
  { src: FemaleClothOuter, alt: "Female Cloth" },
  { src: PerfumeOuter, alt: "Perfume" },
];

const HeroV2 = () => {
  // Orbit radii are tuned so the outer ring always clears the (portrait) phone
  // mockup — even at the top/bottom of its rotation — so nothing overlaps the screen.
  const [orbitSettings, setOrbitSettings] = useState({
    outerRadius: 210,
    innerRadius: 122,
    itemSize: 40,
    phoneWidth: 148,
    containerSize: 480,
  });

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setOrbitSettings({
          outerRadius: 245,
          innerRadius: 138,
          itemSize: 44,
          phoneWidth: 168,
          containerSize: 550,
        });
      } else if (width >= 1280) {
        setOrbitSettings({
          outerRadius: 210,
          innerRadius: 122,
          itemSize: 40,
          phoneWidth: 148,
          containerSize: 480,
        });
      } else if (width >= 1024) {
        setOrbitSettings({
          outerRadius: 195,
          innerRadius: 108,
          itemSize: 34,
          phoneWidth: 130,
          containerSize: 440,
        });
      } else {
        setOrbitSettings({
          outerRadius: 152,
          innerRadius: 86,
          itemSize: 28,
          phoneWidth: 104,
          containerSize: 350,
        });
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
      className="min-h-screen flex flex-col relative bg-[#040C02] overflow-hidden"
    >
      {/* OvalBase overlay */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={OvalBase}
        alt="ovalbase"
        className="absolute top-0 left-0 2xl:top-[-1rem] 2xl:left-[-6rem] w-[32.125rem] h-[32.125rem] xl:w-[40.125rem] xl:h-[40.125rem] pointer-events-none select-none opacity-[0.35] z-0"
      />

      {/* Background Glow Circles */}
      <div className="absolute top-[-10%] left-[-15%] w-[45rem] h-[45rem] rounded-full bg-[#122c15]/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#122c15]/10 blur-[100px] pointer-events-none z-0" />

      {/* Navbar */}
      <nav className="relative z-10 px-5 sm:px-8 lg:px-12 xl:px-20 py-4 2xl:py-6">
        <div className="max-w-[85rem] w-full mx-auto flex items-center justify-between py-1">
          <a href="/" className="flex items-center">
            <img
              src={FlamingoLiveLogoWord}
              alt="Flamingo Live"
              className="h-9 sm:h-10 xl:h-11 w-auto"
            />
          </a>
          <Button
            variant="lime"
            size="md"
            className="rounded-full shadow-lg"
            onClick={() => scrollTo("joinwaitlist")}
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        <div className="relative flex-1 max-w-[85rem] w-full h-full mx-auto py-6 flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-16 2xl:gap-24">
          {/* Left: Text */}
          <div className="flex flex-col max-w-[40rem] xl:max-w-[48rem] w-full gap-6 lg:gap-8 z-10 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-bricolage font-semibold text-xs sm:text-sm tracking-[0.15em] text-[#eed312] uppercase"
              >
                Go Live. Get Discovered. Shop Instantly
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-inter text-3xl sm:text-4xl min-[1400px]:text-[48px] font-bold text-white leading-[1.2] min-[1400px]:leading-[58px]"
              >
                The {" "}
                <span className="relative inline-block whitespace-nowrap">
                  Cross-Border
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    src={Underline}
                    alt="underline"
                    className="absolute left-0 bottom-[-0.5rem] w-full pointer-events-none select-none"
                  />
                </span>
                {" "}Live Shopping Marketplace
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="font-inter text-sm sm:text-base text-white/80 leading-[1.6] max-w-[35rem] mx-auto lg:mx-0"
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
              className="flex gap-4 flex-wrap justify-center lg:justify-start"
            >
              <Button
                variant="lime"
                size="lg"
                icon={<MdOutlineKeyboardArrowRight size={24} />}
                className="sm:max-w-[12.5rem] w-full h-[3.5rem] text-sm"
                onClick={() => scrollTo("joinwaitlist")}
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<FiPlay size={18} />}
                className="sm:max-w-[12.5rem] w-full h-[3.5rem] text-white border border-white hover:bg-white/10 text-sm"
                onClick={() => scrollTo("howitworks")}
              >
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Right: Phone and Concentric Orbits */}
          <div
            className="hidden lg:flex items-center justify-center relative flex-shrink-0 z-10"
            style={{
              width: orbitSettings.containerSize,
              height: orbitSettings.containerSize,
            }}
          >
            {/* Concentric Circles Background */}
            <div
              className="absolute rounded-full border border-dashed border-white/[0.06] z-0 pointer-events-none"
              style={{
                width: orbitSettings.outerRadius * 2,
                height: orbitSettings.outerRadius * 2,
                left: `calc(50% - ${orbitSettings.outerRadius}px)`,
                top: `calc(50% - ${orbitSettings.outerRadius}px)`,
              }}
            />
            <div
              className="absolute rounded-full border border-dashed border-white/[0.06] z-0 pointer-events-none"
              style={{
                width: orbitSettings.innerRadius * 2,
                height: orbitSettings.innerRadius * 2,
                left: `calc(50% - ${orbitSettings.innerRadius}px)`,
                top: `calc(50% - ${orbitSettings.innerRadius}px)`,
              }}
            />

            {/* Phone Screen Mockup */}
            <motion.div
              className="relative z-10 select-none pointer-events-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                width: orbitSettings.phoneWidth,
              }}
            >
              <img
                src={HeroMobilePhone}
                alt="Flamingo App Live Stream"
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
              />
            </motion.div>

            {/* Inner Images — stationary, resting on the inner ring beside the phone */}
            {innerOrbitImages.map((image, index) => {
              // bag-inner sits at 180deg (9 o'clock), male-tee-inner at 0deg (3 o'clock)
              const angle = index * Math.PI + Math.PI;
              const x = orbitSettings.innerRadius * Math.cos(angle);
              const y = orbitSettings.innerRadius * Math.sin(angle);

              return (
                <motion.div
                  key={image.alt}
                  className="absolute cursor-pointer select-none p-1"
                  style={{
                    zIndex: 20,
                    left: `calc(50% - ${orbitSettings.itemSize / 2}px)`,
                    top: `calc(50% - ${orbitSettings.itemSize / 2}px)`,
                  }}
                  initial={{ opacity: 0, scale: 0, x, y }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.5 + index * 0.2 },
                    scale: { duration: 0.5, delay: 0.5 + index * 0.2 },
                    x: { duration: 0.4 },
                    y: { duration: 0.4 },
                  }}
                  whileHover={{ scale: 1.12, filter: "brightness(1.05)" }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: orbitSettings.itemSize,
                      height: orbitSettings.itemSize,
                    }}
                    className="object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
                  />
                </motion.div>
              );
            })}

            {/* Outer Orbiting Images — rotate around the phone, clearing it at every angle */}
            {outerOrbitImages.map((image, index) => {
              // 8 items spaced 45deg, rotated -112.5deg so they straddle (never sit on)
              // the cardinal points, matching the staggered ring in the design.
              const startAngle = index * (Math.PI / 4) - (5 * Math.PI) / 8;

              return (
                <motion.div
                  key={image.alt}
                  className="absolute"
                  style={{
                    zIndex: 20,
                    left: `calc(50% - ${orbitSettings.itemSize / 2}px)`,
                    top: `calc(50% - ${orbitSettings.itemSize / 2}px)`,
                  }}
                  animate={{
                    x: Array.from({ length: 120 }, (_, i) => {
                      const angle = startAngle + (i * (2 * Math.PI)) / 120;
                      return `${orbitSettings.outerRadius * Math.cos(angle)}px`;
                    }),
                    y: Array.from({ length: 120 }, (_, i) => {
                      const angle = startAngle + (i * (2 * Math.PI)) / 120;
                      return `${orbitSettings.outerRadius * Math.sin(angle)}px`;
                    }),
                  }}
                  transition={{
                    duration: 50,
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
                      opacity: { duration: 0.5, delay: index * 0.15 },
                      scale: { duration: 0.5, delay: index * 0.15 },
                    }}
                    whileHover={{ scale: 1.15, filter: "brightness(1.05)" }}
                    className="p-1 cursor-pointer select-none"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: orbitSettings.itemSize,
                        height: orbitSettings.itemSize,
                      }}
                      className="object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pay banner — bottom strip of the hero */}
      <PayBanner />
    </section>
  );
};

export default HeroV2;
