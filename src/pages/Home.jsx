import { motion } from "framer-motion";
import {
  Calendar, MapPin, Laptop, Lightbulb, BarChart3, Target,
  Users, FileText, Globe2, Mic2, BrainCircuit, LineChart,
  Cloud, HeartPulse, Leaf, Cpu, ChevronLeft, ChevronRight,
  CheckCircle2, FileCheck2, BadgeCheck, ShieldCheck, Send
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import homeHero from "../assets/hero/HomeBG.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const STATS = [
  { icon: Users, value: "500+", label: "Participants", color: "text-blue-600" },
  { icon: FileText, value: "150+", label: "Research Papers", color: "text-purple-600" },
  { icon: Globe2, value: "30+", label: "Countries", color: "text-cyan-600" },
  { icon: Mic2, value: "50+", label: "Keynote Speakers", color: "text-orange-500" },
];

const TRACKS = [
  { icon: BrainCircuit, color: "text-blue-600", title: "Artificial Intelligence & Machine Learning", desc: "Advances in AI, ML, deep learning and intelligent systems." },
  { icon: LineChart, color: "text-purple-600", title: "Decision Engineering & Analytics", desc: "Decision support systems, optimization, predictive analytics and simulation." },
  { icon: Cloud, color: "text-cyan-600", title: "Data Science & Big Data", desc: "Big data technologies, data mining, analytics and visualization." },
  { icon: Cpu, color: "text-orange-500", title: "Smart Systems & Emerging Tech", desc: "IoT, blockchain, cloud, edge computing and cyber-physical systems." },
  { icon: HeartPulse, color: "text-pink-500", title: "Intelligent Applications & Industry 4.0", desc: "AI in healthcare, finance, smart cities, robotics and automation." },
  { icon: Leaf, color: "text-green-500", title: "Sustainability & Societal Impact", desc: "Sustainable innovation, green computing and ethical AI." },
];

const SPEAKERS = [
  ["Prof. Yann LeCun", "New York University", "🇺🇸"],
  ["Prof. Fei-Fei Li", "Stanford University", "🇺🇸"],
  ["Prof. Amit P. Sheth", "University of South Carolina", "🇺🇸"],
  ["Prof. Virginia Dignum", "Umeå University", "🇸🇪"],
  ["Prof. Hiroaki Kitano", "Sony Computer Science Labs", "🇯🇵"],
];

const DATES = [
  ["Paper Submission Deadline", "15 July, 2026"],
  ["Notification of Acceptance", "15 August, 2026"],
  ["Camera Ready Submission", "15 September, 2026"],
  ["Early Bird Registration", "30 September, 2026"],
  ["Conference Dates", "10 – 12 December, 2026"],
];

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#07113F]">

      {/* HERO */}
      <section
        className="relative min-h-[420px] bg-[#020b22] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_410px] lg:px-16 lg:py-12">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p className="text-[15px] font-medium text-[#FFC21A]">Welcome to</p>

            <h1 className="mt-1 text-[46px] font-semibold leading-none text-white sm:text-[62px] lg:text-[56px]">
              IDEAX <span className="text-[#FFC21A]">2026</span>
            </h1>

            <h2 className="mt-4 max-w-[590px] text-[21px] font-semibold leading-tight text-white sm:text-[28px]">
              International Conference on Innovation, Decision Engineering and Artificial Intelligence
            </h2>

            <p className="mt-5 text-[14px] font-medium text-white/85">
              Innovating Intelligence. Engineering Decisions. Creating Impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white">
              {[
                [Calendar, "10 – 12 December, 2026"],
                [MapPin, "Singapore"],
                [Laptop, "Hybrid (In-person & Online)"],
              ].map(([Icon, text]) => (
                <span key={text} className="flex items-center gap-2">
                  <Icon size={16} className="text-[#FFC21A]" /> {text}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button variant="gold">Submit Paper</Button>
              <Button as={Link} to="/registration" variant="navyOutline">Register Now</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="hidden lg:flex flex-col gap-5 justify-self-end">
            {[
              [Lightbulb, "INNOVATION"],
              [BrainCircuit, "INTELLIGENCE"],
              [BarChart3, "DECISIONS"],
              [Target, "IMPACT"],
            ].map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 text-white">
                {/* <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur transition hover:scale-110 hover:bg-white/20">
                  <Icon size={18} />
                </span> */}
                <span className="text-[12px] font-bold tracking-wide">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="-mt-1 rounded-t-[22px] bg-[#F6FAFF]">
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_660px] lg:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[11px] font-bold uppercase text-blue-600">About IDEAX 2026</p>
            <h2 className="mt-2 max-w-[560px] text-[26px] font-bold leading-tight sm:text-[34px]">
              Shaping the Future with <span className="text-blue-600">Innovation</span> and Intelligence
            </h2>
            <p className="mt-4 max-w-[650px] text-[14px] leading-relaxed text-slate-600">
              IDEAX 2026 brings together global researchers, industry leaders, practitioners and innovators to exchange ideas, present cutting-edge research and explore the transformative power of innovation, decision engineering and artificial intelligence.
            </p>
            <Button as={Link} to="/about" variant="blueOutline" className="mt-6">Learn More</Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {STATS.map(({ icon: Icon, value, label, color }) => (
              <motion.div key={label} whileHover={{ y: -8, scale: 1.02 }} className="rounded-xl bg-white p-6 text-center shadow-[0_12px_35px_rgba(15,23,42,.08)] transition">
                <Icon className={`mx-auto mb-3 ${color}`} size={31} />
                <h3 className="text-[25px] font-bold">{value}</h3>
                <p className="text-[12px] font-medium text-slate-600">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1420px] text-center">
          <p className="text-[11px] font-bold uppercase text-blue-600">Conference Tracks</p>
          <h2 className="text-[27px] font-bold">Explore Key Themes</h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {TRACKS.map(({ icon: Icon, color, title, desc }) => (
              <motion.div key={title} whileHover={{ y: -8 }} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-[0_18px_45px_rgba(15,23,42,.12)]">
                <Icon size={36} className={`mx-auto mb-3 ${color} transition group-hover:scale-110`} />
                <h3 className="text-[13px] font-bold leading-tight">{title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>

          <Button as={Link} to="/tracks" variant="blueOutline" className="mt-6">View All Tracks</Button>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="relative bg-gradient-to-br from-[#05153D] via-[#0A1649] to-[#26003F] px-5 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1420px]">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase text-[#FFC21A]">Keynote Speakers</p>
              <h2 className="text-[25px] font-bold text-white">Global Minds. Intelligent Ideas. Lasting Impact.</h2>
            </div>
            <Button as={Link} to="/speakers" variant="navyOutline">View All Speakers</Button>
          </div>

          <div className="relative">
            <button className="absolute -left-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white md:flex">
              <ChevronLeft size={17} />
            </button>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {SPEAKERS.map(([name, uni, flag]) => (
                <motion.div key={name} whileHover={{ y: -8, scale: 1.02 }} className="rounded-xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur transition">
                  <div className="mx-auto mb-3 flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#11A8FF] bg-slate-200 text-[28px] font-bold text-slate-700">
                    {name.split(" ")[1]?.[0]}
                  </div>
                  <h3 className="text-[13px] font-bold text-white">{name}</h3>
                  <p className="mt-1 text-[11px] text-white/70">{uni}</p>
                  <p className="mt-1 text-[14px]">{flag}</p>
                </motion.div>
              ))}
            </div>

            <button className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white md:flex">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 gap-8 md:grid-cols-3">
          <Info title="Important Dates">
            {DATES.map(([label, date]) => (
              <li key={label} className="flex items-center gap-2 text-[12px]">
                <Calendar size={15} className="text-blue-600" />
                <span className="flex-1 text-slate-700">{label}</span>
                <b>{date}</b>
              </li>
            ))}
          </Info>

          <Info title="Why Attend IDEAX 2026?">
            {["Present your research to a global audience", "Learn from world-renowned experts", "Publish in reputed indexed proceedings", "Network with researchers and industry leaders", "Explore collaborations and innovations"].map((x) => (
              <li key={x} className="flex gap-2 text-[12px] text-slate-700">
                <CheckCircle2 size={15} className="text-green-500" /> {x}
              </li>
            ))}
          </Info>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase text-blue-600">Publication & Indexing</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                [FileCheck2, "Indexed in Scopus"],
                [BadgeCheck, "IEEE Xplore"],
                [ShieldCheck, "DOI Assignment"],
                [FileText, "Open Access Proceedings"],
              ].map(([Icon, label]) => (
                <motion.div whileHover={{ y: -5 }} key={label} className="rounded-xl bg-[#F6FAFF] p-5 text-center transition hover:shadow-lg">
                  <Icon size={25} className="mx-auto mb-2 text-blue-600" />
                  <p className="text-[11px] font-medium text-slate-600">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-6 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-[1420px] flex-col items-center justify-between gap-5 rounded-xl bg-gradient-to-r from-[#031CFF] via-[#0808A8] to-[#111827] px-7 py-6 text-white sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
              <Send size={20} />
            </span>
            <div>
              <h3 className="text-[17px] font-bold text-[#FFC21A]">Be a Part of IDEAX 2026</h3>
              <p className="text-[12px] text-white/85">Join us to innovate, engineer decisions and create a better tomorrow.</p>
            </div>
          </div>
          <Button as={Link} to="/registration" variant="gold">Register Now</Button>
        </div>
      </section>
    </main>
  );
}

function Info({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-bold uppercase text-blue-600">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}