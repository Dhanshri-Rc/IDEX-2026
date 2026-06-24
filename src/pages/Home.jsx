import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Laptop,
  Lightbulb,
  Cpu,
  BarChart3,
  Target,
  Users,
  FileText,
  Globe2,
  Mic2,
  BrainCircuit,
  LineChart,
  Cloud,
  HeartPulse,
  Leaf,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  FileCheck2,
  BadgeCheck,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FadeUp from "../components/FadeUp";
import Avatar from "../components/Avatar";
import homeHero from "../assets/hero/home-hero-ai.png";

const STATS = [
  { icon: Users, value: "500+", label: "Participants" },
  { icon: FileText, value: "150+", label: "Research Papers" },
  { icon: Globe2, value: "30+", label: "Countries" },
  { icon: Mic2, value: "50+", label: "Keynote Speakers" },
];

const TRACKS = [
  {
    icon: BrainCircuit,
    color: "text-blue-600 bg-blue-50",
    title: "Artificial Intelligence & Machine Learning",
    desc: "Advances in AI, ML, deep learning and intelligent systems.",
  },
  {
    icon: LineChart,
    color: "text-indigo-600 bg-indigo-50",
    title: "Decision Engineering & Analytics",
    desc: "Decision support systems, optimization, predictive analytics and simulation.",
  },
  {
    icon: Cloud,
    color: "text-teal-600 bg-teal-50",
    title: "Data Science & Big Data",
    desc: "Big data technologies, data mining, analytics and visualization.",
  },
  {
    icon: Cpu,
    color: "text-orange-500 bg-orange-50",
    title: "Smart Systems & Emerging Tech",
    desc: "IoT, blockchain, cloud, edge computing and cyber-physical systems.",
  },
  {
    icon: HeartPulse,
    color: "text-rose-600 bg-rose-50",
    title: "Intelligent Applications & Industry 4.0",
    desc: "AI in healthcare, finance, smart cities, robotics and automation.",
  },
  {
    icon: Leaf,
    color: "text-green-600 bg-green-50",
    title: "Sustainability & Societal Impact",
    desc: "Sustainable innovation, green computing and ethical AI.",
  },
];

const SPEAKERS = [
  { name: "Prof. Yann LeCun", uni: "New York University", flag: "🇺🇸" },
  { name: "Prof. Fei-Fei Li", uni: "Stanford University", flag: "🇺🇸" },
  { name: "Prof. Amit P. Sheth", uni: "University of South Carolina", flag: "🇺🇸" },
  { name: "Prof. Virginia Dignum", uni: "Umeå University", flag: "🇸🇪" },
  { name: "Prof. Hiroaki Kitano", uni: "Sony Computer Science Labs", flag: "🇯🇵" },
];

const DATES = [
  { label: "Paper Submission Deadline", date: "15 July, 2026" },
  { label: "Notification of Acceptance", date: "15 August, 2026" },
  { label: "Camera Ready Submission", date: "15 September, 2026" },
  { label: "Early Bird Registration", date: "30 September, 2026" },
  { label: "Conference Dates", date: "10 – 12 December, 2026" },
];

const WHY_ATTEND = [
  "Present your research to a global audience",
  "Learn from world-renowned experts",
  "Publish in reputed indexed proceedings",
  "Network with researchers and industry leaders",
  "Explore collaborations and innovations",
];

const PUBLICATIONS = [
  { icon: FileCheck2, label: "Indexed in Scopus" },
  { icon: BadgeCheck, label: "IEEE Xplore" },
  { icon: ShieldCheck, label: "DOI Assignment" },
  { icon: FileText, label: "Open Access Proceedings" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const perPage = 1;

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-navy-radial pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-gold-500 font-semibold text-sm">Welcome to</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-2 leading-[1.05]">
              IDEAX <span className="text-gold-500">2026</span>
            </h1>
            <p className="text-white/85 text-lg mt-4 max-w-md">
              International Conference on Innovation, Decision Engineering and Artificial
              Intelligence
            </p>
            <p className="text-white/50 text-sm mt-3">
              Innovating Intelligence. Engineering Decisions. Creating Impact.
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gold-500" /> 10 – 12 December, 2026
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold-500" /> Singapore
              </div>
              <div className="flex items-center gap-2">
                <Laptop size={16} className="text-gold-500" /> Hybrid (In-person & Online)
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="gold">Submit Paper</Button>
              <Button as={Link} to="/registration" variant="navyOutline">
                Register Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <img
              src={homeHero}
              alt="AI Innovation"
              className="w-full max-w-md transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="hidden md:flex flex-col gap-5 shrink-0">
              {[
                { icon: Lightbulb, label: "INNOVATION" },
                { icon: BrainCircuit, label: "INTELLIGENCE" },
                { icon: BarChart3, label: "DECISIONS" },
                { icon: Target, label: "IMPACT" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-brand-sky" />
                  </span>
                  <span className="text-white text-xs font-semibold tracking-wide whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeUp>
              <span className="text-brand-blue text-xs font-bold tracking-widest uppercase">
                About IDEAX 2026
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
                Shaping the Future with{" "}
                <span className="text-brand-blue">Innovation</span> and Intelligence
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                IDEAX 2026 brings together global researchers, industry leaders, practitioners
                and innovators to exchange ideas, present cutting-edge research and explore the
                transformative power of innovation, decision engineering and artificial
                intelligence.
              </p>
              <Button as={Link} to="/about" variant="blueOutline" className="mt-6">
                Learn More
              </Button>
            </FadeUp>

            <div className="grid grid-cols-2 gap-5">
              {STATS.map((s, i) => (
                <FadeUp key={s.label} delay={i * 0.08}>
                  <div className="card-lift bg-white rounded-xl2 shadow-card p-6 text-center">
                    <s.icon className="mx-auto mb-3 text-brand-blue" size={28} />
                    <div className="text-2xl font-bold text-navy-900">{s.value}</div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle eyebrow="Conference Tracks" title="Explore Key Themes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS.map((t, i) => (
              <FadeUp key={t.title} delay={i * 0.06}>
                <div className="card-lift bg-white border border-slate-100 rounded-xl2 shadow-card p-6 h-full">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${t.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <t.icon size={22} />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2 leading-snug">{t.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button as={Link} to="/tracks" variant="blueOutline">
              View All Tracks
            </Button>
          </div>
        </div>
      </section>

      {/* KEYNOTE SPEAKERS */}
      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-radial pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">
                Keynote Speakers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Global Minds. Intelligent Ideas. Lasting Impact.
              </h2>
            </div>
            <Button as={Link} to="/speakers" variant="navyOutline">
              View All Speakers
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {SPEAKERS.map((sp, i) => (
                <FadeUp key={sp.name} delay={i * 0.07}>
                  <div className="card-lift bg-white/5 border border-white/10 rounded-xl2 p-5 text-center">
                    <Avatar
                      name={sp.name}
                      size={80}
                      ring
                      className="mx-auto mb-3 transition-transform duration-300 hover:scale-105"
                    />
                    <h4 className="text-white font-semibold text-sm">{sp.name}</h4>
                    <p className="text-white/50 text-xs mt-1">{sp.uni}</p>
                    <p className="text-white/40 text-xs mt-1">{sp.flag}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <button
              onClick={() => setSlide((s) => Math.max(0, s - 1))}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
            <button
              onClick={() => setSlide((s) => s + 1)}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center transition-colors"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* DATES / WHY ATTEND / PUBLICATION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
          <FadeUp>
            <h3 className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
              Important Dates
            </h3>
            <ul className="space-y-3">
              {DATES.map((d) => (
                <li key={d.label} className="flex items-start gap-2.5 text-sm">
                  <Calendar size={15} className="text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <div className="text-slate-700">{d.label}</div>
                  </div>
                  <span className="ml-auto font-medium text-navy-900 whitespace-nowrap">
                    {d.date}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h3 className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
              Why Attend IDEAX 2026?
            </h3>
            <ul className="space-y-3">
              {WHY_ATTEND.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h3 className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
              Publication &amp; Indexing
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {PUBLICATIONS.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-surface-light hover:shadow-card transition-shadow"
                >
                  <p.icon size={22} className="text-brand-blue" />
                  <span className="text-xs text-slate-600 leading-tight">{p.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-brand-indigo to-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-white">
            <span className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <Send size={18} />
            </span>
            <div>
              <h4 className="font-bold text-lg">Be a Part of IDEAX 2026</h4>
              <p className="text-white/80 text-sm">
                Join us to innovate, engineer decisions and create a better tomorrow.
              </p>
            </div>
          </div>
          <Button as={Link} to="/registration" variant="gold" className="shrink-0">
            Register Now
          </Button>
        </div>
      </section>
    </div>
  );
}
