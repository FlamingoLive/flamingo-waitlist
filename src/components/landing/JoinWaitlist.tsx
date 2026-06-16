import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
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
            <h1 className="text-3xl lg:text-[4.01875rem] font-bold text-center leading-[1.12] lg:tracking-[-1.44px] text-[#5F7A23]">
              <span>EXPERIENCE </span>
              <span className="text-[#19311E]">SHOPPING</span>
              <span> THAT</span>
              <br className="hidden lg:block" />
              <span> MOVES AS </span>
              <span className="text-[#19311E]">FAST AS YOU DO</span>
            </h1>
            <p className="text-lg lg:text-[1.36875rem] text-center text-[#19311E] leading-[2rem] font-medium font-inter">
              Get early access to exclusive live shopping experiences. Secure
              your spot and stay ahead of{" "}
              <br className="hidden lg:block" />
              the trend
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-between p-[0.3125rem] pl-5 max-w-[27rem] w-full h-[3.5rem] mx-auto gap-2 rounded-full border border-black/20 focus-within:ring-2 focus-within:ring-[#b8ff01] transition-all duration-200"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 w-full h-full bg-transparent outline-none text-black font-inter placeholder-black/40 text-sm"
                required
              />
              <Button
                type="submit"
                variant="lime"
                size="md"
                icon={<MdOutlineKeyboardArrowRight size={18} />}
                className="h-[2.75rem] px-5 text-sm font-inter font-medium !rounded-full whitespace-nowrap"
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
