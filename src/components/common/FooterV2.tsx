import React from "react";
import {
  FlamingoLogo,
  InstagramIcon,
  FacebookIcon,
  XIcon,
} from "@/assets/images";

const FooterV2: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010500] flex flex-col font-montserrat text-[0.773125rem] font-light">
      <div className="w-full mx-auto flex py-10 px-5 sm:px-10 2xl:px-[6.25rem]">
        <div className="max-w-[77.5rem] flex flex-wrap justify-between items-start w-full mx-auto py-[0.875rem]">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-start justify-center">
            <div className="w-24 h-24 flex items-start justify-center">
              <img
                src={FlamingoLogo}
                alt="Flamingolive Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Center: Links */}
          <div className="flex gap-4 xl:gap-10 flex-wrap">
            <div className="flex flex-col items-start mb-6 md:mb-0">
              <a href="#" className="text-white mb-2 hover:underline">
                Resources
              </a>
              <a
                href="mailto:support@flamingolive.app"
                className="text-white hover:underline"
              >
                support@flamingolive.app
              </a>
            </div>
            <div className="flex flex-col items-start mb-6 md:mb-0">
              <a href="#" className="text-white mb-2 hover:underline">
                Privacy policy
              </a>
              <a href="#" className="text-white hover:underline">
                Terms and Conditions
              </a>
            </div>
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/flamingoliveapp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/flamingoliveapp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={XIcon} alt="X (Twitter)" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <p className="w-full border-t border-[#A9D1A1] text-white text-center py-[0.625rem] px-5 sm:px-10 2xl:px-[6.25rem] text-[0.625rem] tracking-[4.64px] font-light">
        FLAMINGO LIVE ©{currentYear} ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default FooterV2;
