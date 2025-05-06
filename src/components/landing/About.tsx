import { motion } from "framer-motion";
import {
  MockUp1,
  MockUp2,
  MockUp3,
  MockUp4,
  TitikTitikBlack,
} from "@/assets/images";
import Button from "@/components/common/Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { scrollToSection } from "@/utils/scrollUtils";

const customerScreens = [MockUp1, MockUp2, MockUp3, MockUp4];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  }),
};

const About = () => {
  const scrollToHowItWorks = () => {
    setTimeout(() => {
      scrollToSection("howitworks");
    }, 100);
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen px-5 sm:px-10 2xl:px-[8.625rem] bg-white flex flex-1"
    >
      <div className="max-w-[72.75rem] w-full flex-1 py-5 xl:py-10 mx-auto flex flex-col justify-between gap-6">
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-[1.35rem] font-bold text-[#0C2319] mb-2">
              ABOUT FLAMINGO
            </h2>
            <p className="font-inter text-[#19311E] text-sm font-medium">
              At Flamingo, we bring shopping to life, literally. We're a vibrant
              live-stream marketplace where real moments meet real purchases.
              Our mission is simple: connect shoppers with the brands and
              products they love through fun, interactive and authentic live
              experiences.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col w-full px-5 xl:px-10 py-6 gap-[3.125rem] bg-black/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center w-full h-auto p-4 xl:h-[579px] relative">
              {/* Right Dots */}
              <img
                src={TitikTitikBlack}
                alt="Decorative dots top left"
                className="absolute top-32 -left-20 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-30"
                aria-hidden="true"
              />
              <img
                src={TitikTitikBlack}
                alt="Decorative dots bottom right"
                className="absolute bottom-12 right-0 w-16 h-16 md:w-24 md:h-24 opacity-30"
                aria-hidden="true"
              />
              <div className="z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[2.5625rem]">
                {customerScreens.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`Customer screen ${i + 1}`}
                    className={`w-full xl:h-[28.9875rem] ${
                      i === 1 ? "scale-110" : ""
                    }`}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.06 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* How it works button */}
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
              <span className="w-6 h-6 rounded-full bg-black/30 text-black flex justify-center items-center">
                <MdOutlineKeyboardArrowDown size={24} />
              </span>
            }
            className="flex-row-reverse max-w-[8.0625rem] w-[90%] h-[2.75rem] bg-black/3 text-black/60 uppercase p-[0.625rem] text-[0.625rem] whitespace-nowrap border-[0.5px] border-black/70 hover:bg-black/10"
            onClick={scrollToHowItWorks}
          >
            HOW IT WORKS
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
