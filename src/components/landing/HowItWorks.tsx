import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import {
  MockUp1,
  MockUp2,
  MockUp3,
  MockUp4,
  MockUp5,
  MockUp6,
  MockUp7,
  TitikTitik,
} from "@/assets/images";
import { scrollToSection } from "@/utils/scrollUtils";

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

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const buyerFeatures = [
  {
    title: "Explore Live MARKET",
    description:
      "Browse trending streams in categories like Fashion, Electronics, Home, and more. Watch live demos and interact with sellers.",
    image: MockUp1,
    bgColor: "bg-[#F8F8F8]",
    imagePosition: "top",
  },
  {
    title: "Follow Sellers & Revisit Shops",
    description:
      "Follow sellers to track streams, product listings, and ratings. Never miss future drops or deals.",
    image: MockUp3,
    bgColor: "bg-[#EFA519]/60",
    imagePosition: "top",
  },
  {
    title: "Engage, Bid, or Buy Instantly",
    description:
      "Chat with sellers, place bids, or snag exclusive deals. Enjoy giveaways, flash sales, and limited-time offers.",
    image: MockUp2,
    bgColor: "bg-[#A9D1A1]",
    imagePosition: "bottom",
  },
  {
    title: "Seamless Checkout",
    description:
      "Make purchases with Fast and secure checkout, clear shipping details, and real-time order tracking.",
    image: MockUp4,
    bgColor: "bg-[#F8F8F8]",
    imagePosition: "bottom",
  },
];

const sellerFeatures = [
  {
    title: "Set Up Your Shop",
    description:
      "Create your account, verify your details, and customize your profile, add your bio, banner, and payment info so buyers can trust you.",
    image: MockUp5,
    bgColor: "bg-[#F8F8F8]",
    imagePosition: "top",
  },
  {
    title: "Select Categories & Products",
    description:
      "Select the product categories you specialize in and upload your listings with images, descriptions, and pricing.",
    image: MockUp6,
    bgColor: "bg-[#A9D1A1]",
    imagePosition: "top",
  },
  {
    title: "Plan & Promote Live Shows",
    description:
      "Pick a date and time for your stream, add a thumbnail and title, then share the link across social channels to build the buzz.",
    image: MockUp3,
    bgColor: "bg-[#EFA519]/60",
    imagePosition: "bottom",
  },
  {
    title: "Go Live, Engage & Sell",
    description:
      "Host your interactive broadcast: demo products, answer viewer questions, run auctions or flash deals, and watch the sales roll in.",
    image: MockUp7,
    bgColor: "bg-[#F8F8F8]",
    imagePosition: "bottom",
  },
];

const HowItWorks = () => {
  const scrollToWaitlist = () => {
    setTimeout(() => {
      scrollToSection("joinwaitlist");
    }, 100);
  };

  return (
    <section
      id="howitworks"
      className="w-full bg-primary-1 py-10 px-5 sm:px-10 xl:px-[6.25rem] overflow-hidden"
    >
      <div className="max-w-[72.75rem] w-full mx-auto flex flex-col gap-10">
        {/* Section Heading */}
        <motion.div
          className="w-full text-left flex flex-col gap-[0.625rem] p-[0.625rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
        >
          <h2 className="text-white text-2xl md:text-[1.35rem] font-bold">
            HOW FLAMINGO WORKS
          </h2>
          <p className="text-[#FCFCFC] text-sm font-medium leading-[120%] tracking-[0.5px]">
            Shop smarter, faster, and more personally — all through live,
            interactive streams.
          </p>
        </motion.div>

        {/* Buyer Screens */}
        <motion.div
          className="relative hidden md:flex flex-col w-full gap-10 p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          style={{
            background:
              "linear-gradient(to right, rgba(2, 98, 22, 0.2) 3%, rgba(25, 49, 30, 0.2) 22%, rgba(25, 49, 30, 0.6) 80%, rgba(255, 255, 255, 0.02) 100%)",
          }}
        >
          <h2 className="inline-block bg-text-dark w-full text-primary-2 font-bold p-[0.625rem] uppercase text-xs md:text-base">
            For Buyers
          </h2>

          {/* Spot Color */}
          <div className="absolute top-60 left-0 max-w-md w-full h-60 bg-[#CCFF00]/30 rounded-full blur-[100px] z-0" />

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 xl:gap-10 w-full relative z-10">
            <img
              src={TitikTitik}
              alt="Decorative dots left"
              className="absolute top-40 -left-24 w-24 h-24 lg:w-32 lg:h-32 z-[-1]"
              aria-hidden="true"
            />

            {buyerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="col-span-2 md:col-span-1 flex-1"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className={`${feature.bgColor} p-[0.625rem] h-full flex ${
                    feature.imagePosition === "top"
                      ? "flex-col"
                      : "flex-col-reverse"
                  } justify-between gap-[0.625rem] transition-transform duration-300`}
                >
                  <div className="flex flex-col  p-[0.625rem] gap-[0.625rem]">
                    <h3
                      className={`text-sm font-semibold uppercase  ${
                        index === 1 ? "text-white" : "text-[#4A4A4A]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold leading-[120%] tracking-[0.5px] w-[90%] ${
                        index === 1 ? "text-white" : "text-[#19311E]"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative h-[18.25rem] w-full overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`absolute ${
                        feature.imagePosition === "top"
                          ? "top-0 mt-[0.625rem]"
                          : "bottom-10 mb-[0.625rem]"
                      } inset-x-0 w-full max-w-[16rem] mx-auto`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sellers Screens */}
        <motion.div
          className="relative hidden md:flex flex-col w-full gap-10 p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          style={{
            background:
              "linear-gradient(to right, rgba(2, 98, 22, 0.2) 3%, rgba(25, 49, 30, 0.2) 22%, rgba(25, 49, 30, 0.6) 80%, rgba(255, 255, 255, 0.02) 100%)",
          }}
        >
          <h2 className="inline-block bg-text-dark w-full text-primary-2 font-bold p-[0.625rem] uppercase text-xs md:text-base relative z-10">
            For Sellers
          </h2>

          <img
            src={TitikTitik}
            alt="Decorative dots top right"
            className="absolute top-0 -right-14 w-24 h-24 lg:w-32 lg:h-32 z-0 opacity-60"
            aria-hidden="true"
          />

          <img
            src={TitikTitik}
            alt="Decorative dots left middle"
            className="absolute -left-16 bottom-72 w-24 h-24 lg:w-32 lg:h-32 z-0 opacity-60"
            aria-hidden="true"
          />

          <img
            src={TitikTitik}
            alt="Decorative dots bottom right"
            className="absolute -right-5 -bottom-8 w-24 h-24 lg:w-32 lg:h-32 z-0 opacity-60"
            aria-hidden="true"
          />

          {/* Spot Color */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-20 max-w-md w-full h-60 bg-[#CCFF00]/30 rounded-full blur-[100px] z-0" />

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 xl:gap-10 w-full z-10">
            {sellerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="col-span-2 md:col-span-1 flex-1"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className={`${feature.bgColor} p-[0.625rem] h-full flex ${
                    feature.imagePosition === "top"
                      ? "flex-col"
                      : "flex-col-reverse"
                  } justify-between gap-[0.625rem] transition-transform duration-300`}
                >
                  <div className="flex flex-col  p-[0.625rem] gap-[0.625rem]">
                    <h3
                      className={`text-sm font-semibold uppercase  ${
                        index === 2 ? "text-white" : "text-[#4A4A4A]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold leading-[120%] tracking-[0.5px] w-[90%] ${
                        index === 2 ? "text-white" : "text-[#19311E]"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative h-[18.25rem] w-full overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`absolute ${
                        feature.imagePosition === "top"
                          ? "top-0 mt-[0.625rem]"
                          : "bottom-10 mb-[0.625rem]"
                      } inset-x-0 w-full max-w-[16rem] mx-auto`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

                {/* Buyer Screens */}
                <div
          className="relative md:hidden flex flex-col w-full gap-10 p-10"
          style={{
            background:
              "linear-gradient(to right, rgba(2, 98, 22, 0.2) 3%, rgba(25, 49, 30, 0.2) 22%, rgba(25, 49, 30, 0.6) 80%, rgba(255, 255, 255, 0.02) 100%)",
          }}
        >
          <h2 className="inline-block bg-text-dark w-full text-primary-2 font-bold p-[0.625rem] uppercase text-xs md:text-base">
            For Buyers
          </h2>

          {/* Spot Color */}
          <div className="absolute top-60 left-0 max-w-md w-full h-60 bg-[#CCFF00]/30 rounded-full blur-[100px] z-0" />

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 xl:gap-10 w-full relative z-10">
            <img
              src={TitikTitik}
              alt="Decorative dots left"
              className="absolute top-40 -left-24 w-24 h-24 lg:w-32 lg:h-32 z-[-1]"
              aria-hidden="true"
            />

            {buyerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="col-span-2 md:col-span-1 flex-1"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className={`${feature.bgColor} p-[0.625rem] h-full flex ${
                    feature.imagePosition === "top"
                      ? "flex-col"
                      : "flex-col-reverse"
                  } justify-between gap-[0.625rem] transition-transform duration-300`}
                >
                  <div className="flex flex-col  p-[0.625rem] gap-[0.625rem]">
                    <h3
                      className={`text-sm font-semibold uppercase  ${
                        index === 1 ? "text-white" : "text-[#4A4A4A]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold leading-[120%] tracking-[0.5px] w-[90%] ${
                        index === 1 ? "text-white" : "text-[#19311E]"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative h-[18.25rem] w-full overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`absolute ${
                        feature.imagePosition === "top"
                          ? "top-0 mt-[0.625rem]"
                          : "bottom-10 mb-[0.625rem]"
                      } inset-x-0 w-full max-w-[16rem] mx-auto`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sellers Screens */}
        <div
          className="relative md:hidden flex flex-col w-full gap-10 p-10"
          style={{
            background:
              "linear-gradient(to right, rgba(2, 98, 22, 0.2) 3%, rgba(25, 49, 30, 0.2) 22%, rgba(25, 49, 30, 0.6) 80%, rgba(255, 255, 255, 0.02) 100%)",
          }}
        >
          <h2 className="inline-block bg-text-dark w-full text-primary-2 font-bold p-[0.625rem] uppercase text-xs md:text-base relative z-10">
            For Sellers
          </h2>

          <img
            src={TitikTitik}
            alt="Decorative dots top right"
            className="absolute top-0 -right-14 w-24 h-24 lg:w-32 lg:h-32 z-0 opacity-60"
            aria-hidden="true"
          />

          <img
            src={TitikTitik}
            alt="Decorative dots left middle"
            className="absolute -left-16 bottom-72 w-24 h-24 lg:w-32 lg:h-32 z-0 opacity-60"
            aria-hidden="true"
          />

          <img
            src={TitikTitik}
            alt="Decorative dots bottom right"
            className="absolute -right-5 -bottom-8 w-24 h-24 lg:w-32 lg:h-32 z-0 opacity-60"
            aria-hidden="true"
          />

          {/* Spot Color */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-20 max-w-md w-full h-60 bg-[#CCFF00]/30 rounded-full blur-[100px] z-0" />

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 xl:gap-10 w-full z-10">
            {sellerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="col-span-2 md:col-span-1 flex-1"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className={`${feature.bgColor} p-[0.625rem] h-full flex ${
                    feature.imagePosition === "top"
                      ? "flex-col"
                      : "flex-col-reverse"
                  } justify-between gap-[0.625rem] transition-transform duration-300`}
                >
                  <div className="flex flex-col  p-[0.625rem] gap-[0.625rem]">
                    <h3
                      className={`text-sm font-semibold uppercase  ${
                        index === 2 ? "text-white" : "text-[#4A4A4A]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold leading-[120%] tracking-[0.5px] w-[90%] ${
                        index === 2 ? "text-white" : "text-[#19311E]"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative h-[18.25rem] w-full overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`absolute ${
                        feature.imagePosition === "top"
                          ? "top-0 mt-[0.625rem]"
                          : "bottom-10 mb-[0.625rem]"
                      } inset-x-0 w-full max-w-[16rem] mx-auto`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="flex flex-col gap-[1.25rem] p-[0.625rem] items-center w-full text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col gap-[0.625rem]">
            <h3 className="text-[1.35rem] font-bold text-center">
              Be the First to Stream, Shop and Connect — Join Our Waitlist Today.
            </h3>
            <p className="text-sm text-center font-medium">
              Get early access to exclusive live shopping experiences. Secure
              your spot and stay ahead of the trend!
            </p>
          </div>

          <Button
            variant="lime"
            size="lg"
            icon={<MdOutlineKeyboardArrowRight size={24} />}
            className="max-w-[12.5rem] w-full h-[3.75rem]"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
