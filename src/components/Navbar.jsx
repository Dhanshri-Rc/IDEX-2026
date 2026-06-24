import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/icons/Logo";
import hlogo from "../assets/hero/logo.png"

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Tracks", to: "/tracks" },
  { label: "Speakers", to: "/speakers" },
  { label: "Schedule", to: "/schedule" },
  { label: "Committee", to: "/committee" },
  { label: "Registration", to: "/registration" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_25px_rgba(15,23,42,0.08)]" : ""
      }`}
    >
      <nav className="relative mx-auto flex h-[70px] max-w-[1420px] items-center justify-between px-5 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* <Logo size={55} /> */}
<img src={hlogo} alt="logo" className="w-[190px]" />
        
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-[14px] font-extrabold uppercase text-[#07113F] transition-all duration-300 hover:text-[#2563EB]
                after:absolute after:-bottom-3 after:left-0 after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-[#2563EB] after:transition-transform after:duration-300 hover:after:scale-x-100
                ${isActive ? "text-[#2563EB] after:scale-x-100" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-[#07113F] transition-all duration-300 hover:bg-[#F4F7FF] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu - not full width */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-5 top-[78px] z-50 w-[285px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_55px_rgba(15,23,42,0.18)] sm:right-8 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {LINKS.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.03 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 text-[13px] font-extrabold uppercase transition-all duration-300 ${
                          isActive
                            ? "bg-[#2563EB] text-white"
                            : "text-[#07113F] hover:bg-[#F4F7FF] hover:text-[#2563EB]"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}