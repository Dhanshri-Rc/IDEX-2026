import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/icons/Logo";
import Button from "./Button";

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

export default function Navbar({ variant = "light" }) {
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
  }, [location]);

  const isDark = variant === "dark";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isDark
          ? "bg-navy-900"
          : scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo size={38} />
          <span className="font-display font-bold text-lg sm:text-xl leading-none">
            <span className={isDark ? "text-white" : "text-navy-900"}>IDEAX</span>{" "}
            <span className="text-gold-500">2026</span>
            <span
              className={`block text-[9px] font-semibold tracking-[0.18em] mt-0.5 ${
                isDark ? "text-white/60" : "text-slate-500"
              }`}
            >
              INNOVATE · DECIDE · TRANSFORM
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link text-sm font-medium transition-colors ${
                  isActive
                    ? `active ${isDark ? "text-white" : "text-brand-blue"}`
                    : isDark
                    ? "text-white/80 hover:text-white"
                    : "text-navy-900/80 hover:text-navy-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button as={Link} to="/registration" variant="blue" className="px-5 py-2.5">
            Register Now
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 rounded-md ${isDark ? "text-white" : "text-navy-900"}`}
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden overflow-hidden border-t ${
              isDark ? "bg-navy-900 border-white/10" : "bg-white border-slate-100"
            }`}
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2.5 px-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-brand-blue/10 text-brand-blue"
                        : isDark
                        ? "text-white/80"
                        : "text-navy-900/80"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/registration"
                onClick={() => setOpen(false)}
                className="mt-2 bg-brand-blue text-white text-center py-2.5 rounded-md text-sm font-semibold"
              >
                Register Now
              </Link>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className={`text-center py-2.5 rounded-md text-sm font-semibold border ${
                  isDark ? "border-white/30 text-white" : "border-slate-200 text-navy-900"
                }`}
              >
                Participant Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
