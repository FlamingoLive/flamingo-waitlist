import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { ModalNoiseRectangle, OvalBase } from "@/assets/images";
import {
  CheckmarkIcon,
  ShareIcon,
  MessageIcon,
} from "@/assets/imagesV3";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import React from "react";
import toast from "react-hot-toast";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div
        style={{
          background: `radial-gradient(circle at 20% 20%, #122a10 0%, #040c02 100%)`,
        }}
        className="flex flex-col items-center justify-center gap-6 rounded-[38.69px] border border-primary-2/30 px-6 py-9 md:px-10 md:py-11 w-full max-w-[675px] text-center relative overflow-hidden"
      >
        {/* OvalBase overlay */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={OvalBase}
          alt="ovalbase"
          className="absolute top-[-4rem] left-[-4rem] w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] pointer-events-none select-none opacity-40 z-0"
          style={{ zIndex: 0 }}
        />

        {/* Noise background Texture */}
        <div className="absolute inset-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
          <img
            src={ModalNoiseRectangle}
            alt="modalnoise"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Spot Color */}
        <div className="absolute -top-20 -left-20 w-[15rem] h-[15rem] rounded-full bg-[#ccff00]/15 blur-[60px] pointer-events-none z-0" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors duration-300 text-2xl cursor-pointer z-10"
          aria-label="Close"
        >
          <MdClose />
        </button>

        {/* Upper section: Checkmark & Headings */}
        <div className="flex flex-col gap-4 items-center relative z-10">
          {/* Checkmark Image */}
          <img
            src={CheckmarkIcon}
            alt="Checkmark"
            className="w-[3.75rem] h-[3.75rem] object-contain"
          />

          <div className="flex flex-col gap-1 items-center">
            {/* Title */}
            <div className="text-primary-2 font-semibold text-[13px] leading-[16px] tracking-wide font-bricolage">
              Flamingo LIVE <span className="text-white">Waitlist</span>
            </div>

            {/* Header */}
            <h2 className="text-white font-semibold text-[28px] leading-[34px] tracking-normal font-inter">
              Thanks for joining!
            </h2>
          </div>
        </div>

        {/* Middle section: Description */}
        <div className="text-white text-[14px] leading-[20px] tracking-normal max-w-[513.34px] mx-auto font-inter relative z-10">
          You're one step closer to streaming, shopping, and selling in real
          time with the most interactive commerce experience yet.
        </div>

        {/* Lower section: Info, Socials and CTA */}
        <div className="relative z-10 flex flex-col gap-5 justify-center items-center w-full">
          {/* Info and Socials */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 w-full mx-auto">
            <div className="flex flex-1 items-center justify-center md:justify-end gap-2 text-white">
              <img src={MessageIcon} alt="Message" className="w-4 h-4 shrink-0" />
              <p className="text-white text-[12px] leading-[14px] tracking-normal font-inter whitespace-nowrap">
                Be the first to know when we go live!
              </p>
            </div>
            <div className="h-5 w-px bg-white/25 shrink-0 hidden md:block" />
            <div className="flex flex-1 flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5">
              <p className="text-white text-[12px] leading-[14px] tracking-normal font-inter whitespace-nowrap">
                Follow our social media accounts
              </p>
              <span className="flex gap-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-primary-2 hover:bg-white rounded-[3px] w-4 h-4 flex items-center justify-center text-text-dark hover:text-black transition-colors duration-300"
                >
                  <FaFacebookF size={10} />
                </a>
                <a
                  href="https://www.instagram.com/flamingoliveapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-primary-2 hover:bg-white rounded-[3px] w-4 h-4 flex items-center justify-center text-text-dark hover:text-black transition-colors duration-300"
                >
                  <FaInstagram size={10} />
                </a>
                <a
                  href="https://x.com/flamingoliveapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="bg-primary-2 hover:bg-white rounded-[3px] w-4 h-4 flex items-center justify-center text-text-dark hover:text-black transition-colors duration-300"
                >
                  <FaXTwitter size={10} />
                </a>
              </span>
            </div>
          </div>

          {/* Tell a friend button */}
          <button
            className="group px-5 py-2.5 border border-primary-2 rounded-[8px] text-primary-2 font-semibold flex items-center justify-center gap-2 font-inter text-[12px] leading-[14px] tracking-normal cursor-pointer hover:bg-primary-2 hover:text-[#040C02] transition-colors duration-300 w-fit mx-auto"
            onClick={async () => {
              try {
                if (navigator.share) {
                  await navigator.share({
                    title: "Join Flamingo Waitlist",
                    text: "Join me on Flamingo - the most interactive commerce experience yet!",
                    url: window.location.href,
                  });
                } else {
                  await navigator.clipboard.writeText(window.location.href);
                  toast.success("Link copied! Share it with your friends.");
                }
              } catch (error) {
                console.error("Error sharing:", error);
                await navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied! Share it with your friends.");
              }
            }}
          >
            <span>Tell a friend</span>
            <img
              src={ShareIcon}
              alt="Share"
              className="w-[14px] h-[14px] transition duration-300 group-hover:brightness-0"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
