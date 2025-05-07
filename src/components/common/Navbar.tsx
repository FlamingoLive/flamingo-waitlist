import { FlamingoWhiteLogo} from '../../assets/images';
import { scrollToSection } from "@/utils/scrollUtils";
import Button from "./Button";

const Navbar = () => {

  const scrollToWaitlist = () => {
    setTimeout(() => {
      scrollToSection("joinwaitlist");
    }, 100);
  };


  return (
    <nav className={`w-full z-50 transition-all duration-300 py-2 px-5 gap-1 sm:py-3 sm:px-10 sm:gap-2 2xl:py-10 2xl:px-20 2xl:gap-[0.625rem] border-b border-[#A9D1A1]`}>
      <div className="max-w-[80rem] w-full mx-auto 2xl:py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={FlamingoWhiteLogo}
            alt="Flamingolive Logo"
            className="h-10 sm:h-12 md:h-16 w-auto"
          />
        </a>
        <div className="flex gap-4">
          <Button onClick={scrollToWaitlist} variant="lime" size="md">
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
