import {
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaRocketchat,
  FaXTwitter,
} from "react-icons/fa6";
import { ModalNoiseRectangle, OvalBase } from "@/assets/images";
import { MdClose, MdOutlineIosShare } from "react-icons/md";
import { motion } from "framer-motion";
import React from "react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(25, 49, 30, 1) 28%, rgba(28, 96, 42, 1) 100%)`,
        }}
        className="flex flex-col gap-[1.075rem] rounded-[38.69px] px-7 xl:px-[2.125rem] py-7 xl:py-13 max-w-[42.1875rem] w-[80%] text-center relative overflow-hidden"
      >
        {/* OvalBase overlay */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={OvalBase}
          alt="ovalbase"
          className="absolute top-0 left-0 xl:top-[-5rem] xl:left-[-6rem] w-[18.125rem] h-[18.125rem] 2xl:w-[22.731875rem] 2xl:h-[22.731875rem] pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />

        {/* Noise background Texture */}
        <div className="absolute inset-0 left-0 w-full h-full z-0">
          <img
            src={ModalNoiseRectangle}
            alt="modalnoise"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Spot Color */}
        <div className="absolute top-0 left-0 max-w-sm w-full h-20 bg-[#CCFF00]/30 rounded-full blur-[100px] z-0" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-primary-2 text-2xl font-bold hover:text-white transition-all duration-300 cursor-pointer z-10"
          aria-label="Close"
        >
          <MdClose />
        </button>

        <div className="flex flex-col gap-[0.5375rem] items-center">
          <div className="flex flex-col gap-[1.3125rem] items-center">
            {/* Checkmark */}
            <div className="bg-primary-2 rounded-full w-[3.4725rem] h-[3.4725rem] flex items-center justify-center">
              <FaCheck className="text-3xl text-text-dark" />
            </div>

            <div className="flex flex-col gap-[0.3225rem] items-center">
              {/* Title */}
              <div className="text-primary-2 font-semibold text-sm">
                FLAMINGO <span className="text-white">waitlist.</span>
              </div>

              <div className="text-white font-bold text-2xl xl:text-[1.935rem]">
                THANKS FOR JOINING!
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-white text-sm leading-[27.5px]">
            You're one step closer to streaming, shopping, and selling in real
            time with the most interactive commerce experience yet.
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-[1.075rem] justify-center items-center">
          {/* Info and Socials */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-2 xl:gap-[1.075rem] max-w-[33.50875rem] w-full mx-auto">
            <div className="flex items-center justify-start gap-2 text-white">
              <FaRocketchat className="text-primary-2" />
              <p className="text-white text-xs">
                Be the first to know when we go live!
              </p>
            </div>
            <div className="h-6 w-[0.43px] bg-primary-2 hidden md:block" />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
              <p className="text-white text-xs">
                Follow our social media accounts
              </p>
              <span className="flex gap-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-primary-2 hover:bg-white rounded p-1 w-4 h-4 flex items-center justify-center"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/flamingoliveng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-primary-2 hover:bg-white rounded p-1 w-4 h-4 flex items-center justify-center"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="bg-primary-2 hover:bg-white rounded p-1 w-4 h-4 flex items-center justify-center"
                >
                  <FaXTwitter />
                </a>
              </span>
            </div>
          </div>

          {/* Tell a friend button */}
          <button
            className="max-w-[7.52375rem] w-full h-[1.88125rem] p-2 border border-primary-2 rounded-[5.16px] text-primary-2 font-semibold flex items-center justify-center gap-2 font-inter text-[0.64375rem] cursor-pointer hover:bg-primary-2 hover:text-text-dark transition"
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
                  alert("Link copied! Share it with your friends.");
                }
              } catch (error) {
                console.error("Error sharing:", error);
                // Fallback to clipboard if sharing fails
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied! Share it with your friends.");
              }
            }}
          >
            Tell a friend
            <MdOutlineIosShare size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
