import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Lock,
  Eye,
  EyeOff,
  FileText,
  ShieldCheck,
  Award,
  FileCheck2,
  UserPlus,
  BookOpen,
} from "lucide-react";
import Logo from "../assets/icons/Logo";
import Button from "../components/Button";
import loginGlobe from "../assets/hero/login-globe-book.png";

const FEATURES = [
  { icon: FileText, title: "Easy Submission", desc: "Simple and streamlined submission process" },
  { icon: ShieldCheck, title: "Peer Review", desc: "Rigorous peer review by experts in the field" },
  { icon: Award, title: "Quality Publication", desc: "Selected papers will be published in Scopus indexed proceedings" },
  { icon: FileCheck2, title: "Global Visibility", desc: "Showcase your research to an international audience" },
];

export default function ParticipantLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* LEFT PANEL */}
      <div className="relative bg-navy-900 text-white p-8 sm:p-12 flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-navy-radial pointer-events-none" />
        <Link to="/" className="flex items-center gap-2.5 relative z-10">
          <Logo size={36} />
          <span className="font-display font-bold text-lg">
            IDEAX <span className="text-gold-500">2026</span>
            <span className="block text-[9px] font-semibold tracking-[0.18em] text-white/50">
              INNOVATE · DECIDE · TRANSFORM
            </span>
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-10"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <UserPlus size={13} /> International Conference
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Welcome to IDEAX 2026</h1>
          <p className="text-gold-500 font-semibold mt-1 text-lg">Article Submission Portal</p>
          <p className="text-white/65 mt-4 leading-relaxed max-w-sm">
            Submit your original research and be a part of the global platform for innovation,
            decision engineering and artificial intelligence.
          </p>

          <div className="space-y-5 mt-8">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <f.icon size={17} className="text-brand-sky" />
                </span>
                <div>
                  <h4 className="font-semibold text-sm">{f.title}</h4>
                  <p className="text-xs text-white/55 mt-0.5">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 mt-auto pt-10">
          <img
            src={loginGlobe}
            alt="Global research network"
            className="w-full max-w-xs mx-auto transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-col justify-center px-6 sm:px-12 py-12">
        <div className="max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="w-14 h-14 rounded-full bg-surface-muted flex items-center justify-center mx-auto mb-4">
              <Send size={22} className="text-brand-blue" />
            </span>
            <h2 className="text-2xl font-bold text-navy-900">Login to Your Account</h2>
            <p className="text-sm text-slate-500 mt-1">
              Access your account to submit and manage your articles.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email address"
                  className="input-glow w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Enter your password"
                  className="input-glow w-full pl-10 pr-10 py-3 border border-slate-200 rounded-lg text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-xs font-medium text-brand-blue hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <Button type="submit" variant="blue" icon={false} className="w-full justify-center">
              Login
            </Button>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <div className="flex-1 h-px bg-slate-200" />
              OR
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 border border-slate-200 rounded-lg py-3 text-sm font-medium hover:bg-surface-light transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.49-1.14 2.76-2.6 3.61v3h3.86c2.26-2.09 3.76-5.18 3.76-9.85z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09C3.26 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.29c-.25-.72-.39-1.49-.39-2.29s.14-1.57.39-2.29V6.62H1.26A11.96 11.96 0 0 0 0 12c0 1.93.46 3.76 1.26 5.38l4.01-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.26 6.62l4.01 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                />
              </svg>
              Login with Google
            </button>
          </form>

          <div className="bg-surface-light rounded-xl2 p-5 mt-6 text-center">
            <h4 className="font-semibold text-navy-900 text-sm mb-1">New Here?</h4>
            <p className="text-xs text-slate-500 mb-3">
              Create an account to submit your article.
            </p>
            <Button variant="blueOutline" icon={false} className="!px-4 !py-2 text-xs mx-auto">
              <UserPlus size={14} /> Create New Account
            </Button>
          </div>

          <div className="flex items-center gap-3 mt-6 bg-blue-50/60 rounded-xl2 p-4">
            <BookOpen size={18} className="text-brand-blue shrink-0" />
            <p className="text-xs text-slate-600 flex-1">
              Before submission, please make sure your paper follows our guidelines.
            </p>
            <button className="text-xs font-semibold text-brand-blue whitespace-nowrap hover:underline">
              View Guidelines →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
