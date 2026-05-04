import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { iMockup, TitikTitikBlack } from "@/assets/images";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../common/Button";
import { scrollToSection } from "@/utils/scrollUtils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I unlock my seller access?",
    answer:
      "Getting your seller access turned on is easy. Just answer a few questions, provide your return address and complete our quick tutorial.",
  },
  {
    question: "Can I have a second seller account?",
    answer:
      "We are only allowing one seller account per person. If you need to create a second account, please contact us at support@flamingolive.ng",
  },
  {
    question: "When can I schedule a live stream?",
    answer:
      "Once you complete the tutorial and get your seller access turned on, you can schedule a live stream & create listings at any time.",
  },
  {
    question: "How and when do I get paid?",
    answer:
      "You'll get paid 48-72 hours after your buyer has received their order.",
  },
  {
    question: "Do I need to show my face on camera?",
    answer:
      "No. Showing your face is not required. However, we recommend it to help build trust with your audience.",
  },
  {
    question: "Am I allowed to sell if I'm under 18?",
    answer:
      "If you are 13-17 years old, you can sell with an adult guardian's permission.",
  },
  {
    question: "What are the fees?",
    answer: "Flamingo takes 5-8% per transaction, plus credit card fees.",
  },
  {
    question: "What can I sell?",
    answer: "You can sell almost everything on Flamingo!.",
  },
];
const MemoizedFAQItem = memo(
  ({
    idx,
    isOpen,
    faq,
    onClick,
  }: {
    idx: number;
    isOpen: boolean;
    faq: FAQItem;
    onClick: () => void;
  }) => {
    return (
      <div
        key={idx}
        className="rounded-[6.02px] border-[1.5px] border-[#152329] pl-[1.880625rem]"
      >
        <div
          className="flex w-full items-stretch text-left min-h-[3.760625rem] gap-[1.880625rem] focus:outline-none cursor-pointer"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span
            className={`flex items-center font-bold text-[1.128125rem] rounded-md text-text-dark ${
              idx === 0 ? "pr-1" : ""
            }`}
          >
            {String(idx + 1).padStart(2, "0")}
          </span>
          <AnimatePresence initial={false}>
            {!isOpen && (
              <motion.button
                key="plus"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="max-w-[4.0625rem] w-full cursor-pointer flex items-center justify-center text-2xl bg-[#152329] hover:bg-[#152329]/90 text-primary-2 font-bold transition-colors duration-200"
              >
                <FaPlus />
              </motion.button>
            )}
          </AnimatePresence>
          <span className="flex-1 flex items-center text-text-dark text-lg xl:text-[1.128125rem] font-medium pr-2">
            {faq.question}
          </span>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.button
                key="minus"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="max-w-[4.043125rem] w-full cursor-pointer flex items-center justify-center rounded-tr-md rounded-br-md text-2xl font-bold transition-colors duration-200 bg-[#d4ff00] hover:bg-[#d4ff00]/85 text-[#16351f]"
              >
                <FaMinus />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-text-dark text-base font-inter font-light pl-[3.15rem] pt-[0.94rem] pr-[0.47rem] pb-6">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const scrollToTheTop = () => {
    setTimeout(() => {
      scrollToSection("hero");
    }, 100);
  };

  return (
    <section
      id="faq"
      className="w-full py-10 min-h-screen px-5 sm:px-10 2xl:px-[6.25rem] flex flex-col gap-10"
    >
      <div className="flex-1 relative max-w-[77.5rem] w-full mx-auto flex py-5 items-center gap-[6.25rem] xl:gap-[12.5rem]">
        {/* FAQ Content */}
        <motion.div
          className="relative flex-1 w-full lg:max-w-[30rem] xl:max-w-[38.153125rem] flex flex-col gap-[2.820625rem]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.1 }}
        >
          <h2 className="text-3xl md:text-[2.444375rem] font-bricolage tracking-[0.11em] font-bold text-text-dark">
            FREQUENTLY <br className="hidden lg:block" />
            ASKED<span className="text-primary-2"> QUESTIONS</span>
          </h2>
          <div className="lg:mt-8 space-y-4 z-10">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <MemoizedFAQItem
                  key={idx}
                  idx={idx}
                  isOpen={isOpen}
                  faq={faq}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                />
              );
            })}
          </div>
        </motion.div>
        {/* FAQ Image */}
        <div className="hidden lg:block absolute right-0 top-10">
          {/* Spot color */}
          <div className="absolute top-20 left-0 w-full h-full bg-[#CCFF00]/30 rounded-full blur-[100px] z-0" />
          <img
            src={TitikTitikBlack}
            alt="Decorative dots top left"
            className="absolute -top-5 -left-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 z-10"
            aria-hidden="true"
          />
          <motion.div
            className="relative flex-1 flex items-center justify-center w-full max-w-[20.659375rem] z-20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            style={{ aspectRatio: "330.55/684.82" }}
          >
            <img
              src={iMockup}
              alt="FAQ phone mockup"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <img
            src={TitikTitikBlack}
            alt="Decorative dots top left"
            className="absolute -bottom-5 -right-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 z-10"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* To the Top button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="flex justify-end relative z-10"
      >
        <Button
          variant="outline"
          size="sm"
          icon={
            <span className="w-6 h-6 rounded-full bg-black/30 text-black flex justify-center items-center">
              <MdOutlineKeyboardArrowUp size={24} />
            </span>
          }
          className="flex-row-reverse max-w-[7.75rem] w-[90%] h-[2.75rem] bg-black/3 text-text-dark uppercase p-[0.625rem] text-[0.625rem] whitespace-nowrap border-[0.5px] border-black/70 hover:bg-black/10"
          onClick={scrollToTheTop}
        >
          To the Top
        </Button>
      </motion.div>
    </section>
  );
};

export default FAQ;
