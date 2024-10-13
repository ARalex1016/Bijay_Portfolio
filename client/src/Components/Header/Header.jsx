// Lucide Icon
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import MenuItem from "./MenuItem";
import Button1 from "../Button1";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((pre) => !pre);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // To close nav bar on click outside (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleResize = () => {
      closeMenu(); // Close the menu on resize
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="w-screen h-16 bg-darkSecondary shadow-lg flex justify-between items-center px-8 relative"
      >
        {/* Logo */}
        <div className="text-2xl dark:text-darkAccent hover:text-slate-50 font-bold font-serif">
          Bijay Lama
        </div>

        {/* Modile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden absolute right-0 top-full w-1/2 bg-transparent border-b-2 border-l-2 border-slate-300 rounded-bl-3xl shadow-lg backdrop-blur-[10px] z-50 overflow-hidden"
              initial={{
                height: 0,
              }}
              animate={{
                height: "fit-content",
              }}
              exit={{
                height: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
            >
              <ul className="flex flex-col items-center gap-8 py-8">
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>
                  <Button1 onClick={() => navigate("/login")}>Admin</Button1>
                </MenuItem>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex flex-row md:gap-10 lg:gap-32 xl:gap-40">
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
          </ul>
        </nav>

        <Button1 onClick={() => navigate("/login")} className="hidden md:block">
          Admin
        </Button1>

        <div onClick={toggleMenu} className="sm:block md:hidden">
          {isMenuOpen ? (
            <X className="text-slate-50 hover:text-slate-300" size={40} />
          ) : (
            <Menu className="text-slate-50 hover:text-slate-300" size={40} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
