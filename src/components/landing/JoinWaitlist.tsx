import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { scrollToSection } from "@/utils/scrollUtils";
import { JoinWaitlistBg, NoiseRectangle } from "@/assets/images";
import Button from "@/components/common/Button";
import SuccessModal from "./SuccessModal";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const JoinWaitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const scrollToFAQ = () => {
    setTimeout(() => {
      scrollToSection("faq");
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;

    setIsLoading(true);

    try {
      // Use Google Forms URL
      const formUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
      const formData = new FormData();
      formData.append(import.meta.env.VITE_ENTRY_ID, email);

      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setShowSuccessModal(true);
      setEmail("");
    } catch (error: any) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SuccessModal open={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      <section
        id="joinwaitlist"
        className="relative w-full min-h-screen flex flex-col gap-[2.5rem] items-center justify-center py-10 px-5 sm:px-10 2xl:px-[6.25rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${JoinWaitlistBg})` }}
      >
        <div className="flex-1 flex justify-center items-center">
          <div
            className="relative z-10 flex flex-col gap-8 items-center justify-center w-full max-w-[76.875rem] mx-auto py-12 px-4 md:px-12"
            style={{
              backgroundImage: `url(${NoiseRectangle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-3xl lg:text-[4.01875rem] font-bold text-center lg:text-left text-[#AFB7B4]">
              <span className="opacity-60">EXPERIENCE </span>
              <span className="text-[#003720] opacity-100">SHOPPING</span>
              <span> THAT</span>
              <br className="hidden lg:block" />
              <span> MOVES AS </span>
              <span className="text-[#19311E]">FAST AS YOU DO</span>
            </h1>
            <p className="text-lg lg:text-[1.36875rem] text-center text-[#19311E] leading-[2rem] font-medium font-inter">
              Live, interactive, and instant — Flamingo is redefining how you
              shop.
              <br className="hidden lg:block" />
              Be the first to dive in — join the waitlist now
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex border items-center justify-center p-[0.25rem] max-w-[23.14rem] w-full h-[2.6875rem] mx-auto gap-4 rounded-[8px] focus-within:ring focus-within:ring-black transition-all duration-200"
            >
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 w-full h-full pl-2 outline-none text-black font-inter placeholder-[#16351f] placeholder:text-[0.773125rem] text-sm"
                required
              />
              <Button
                type="submit"
                variant="lime"
                size="lg"
                className="w-[5.31125rem] h-[2.1875rem] px-[0.374375rem] py-[0.701875rem] text-[0.74875rem] font-inter font-medium !rounded-[6px]"
                isLoading={isLoading}
                loadingText="Submitting..."
                disabled={!isValidEmail(email)}
              >
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>

        {/* faq button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex justify-center mt-10"
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
            onClick={scrollToFAQ}
          >
            FAQ
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default JoinWaitlist;
