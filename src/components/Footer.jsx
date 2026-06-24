import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Linkedin, Twitter, Facebook, Youtube } from "./SocialIcons";
import Logo from "../assets/icons/Logo";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Tracks", to: "/tracks" },
  { label: "Speakers", to: "/speakers" },
  { label: "Schedule", to: "/schedule" },
  { label: "Committee", to: "/committee" },
  { label: "Registration", to: "/registration" },
  { label: "Contact", to: "/contact" },
];

const SOCIALS = [
  { Icon: Linkedin, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size={34} />
              <span className="font-display font-bold text-lg">
                IDEAX <span className="text-gold-500">2026</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              International Conference on Innovation, Decision Engineering and Artificial
              Intelligence.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {SOCIALS.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-white/90">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold-500" /> info@ideax-conference.org
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold-500" /> +65 9123 4567
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-gold-500" /> Singapore
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-white/90">
              Subscribe
            </h4>
            <p className="text-sm text-white/60 mb-3">
              Stay updated with the latest news and announcements.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white/5 border border-white/15 rounded-lg overflow-hidden"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm px-3 py-2.5 w-full outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                className="bg-brand-blue hover:bg-brand-blueDark transition-colors p-2.5 m-1 rounded-md"
                aria-label="Subscribe"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center text-xs text-white/40">
          © 2026 IDEAX 2026. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
