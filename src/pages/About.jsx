import React from "react";
import {
  Brain,
  Eye,
  Target,
  Network,
  Handshake,
  Globe2,
  BarChart3,
  Cpu,
  Settings,
  Cloud,
  Cross,
  Users,
  CalendarDays,
  Trophy,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  BookOpen,
  FileText,
  Award,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import heroBg from "../assets/AboutBg.png";
import ctaBg from "../assets/AboutCta.png";
import whyBg from "../assets/AboutPract.png";

const tracks = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    color: "#0B63FF",
    items: ["Deep Learning", "Generative AI", "Explainable AI", "Neural Computing"],
  },
  {
    icon: BarChart3,
    title: "Data Science & Decision Analytics",
    color: "#13BFD6",
    items: ["Predictive Analytics", "Data Mining", "Big Data Engineering", "Business Intelligence"],
  },
  {
    icon: Settings,
    title: "Optimization & Decision Engineering",
    color: "#7146FF",
    items: ["Operations Research", "Decision Support Systems", "Multi-criteria Decision Making", "Simulation & Modeling"],
  },
  {
    icon: Cloud,
    title: "Emerging Computing Technologies",
    color: "#FF9900",
    items: ["Cloud & Edge Computing", "Internet of Things (IoT)", "Blockchain", "Cybersecurity"],
  },
  {
    icon: Cross,
    title: "Intelligent Systems Applications",
    color: "#28B64B",
    items: ["Healthcare AI", "Finance & FinTech", "Smart Cities", "Industry 4.0/5.0"],
  },
  {
    icon: Users,
    title: "Socio-Technical & Human-Centric AI",
    color: "#236CFF",
    items: ["Human-AI Interaction", "Ethics & Responsible AI", "Policy & Governance", "Education & Training"],
  },
];

const focusAreas = [
  { icon: Brain, title: "Innovation", desc: "Encouraging novel ideas and creative solutions", color: "#0B63FF" },
  { icon: Network, title: "Decision Engineering", desc: "Modeling and optimizing decision processes", color: "#12AFC2" },
  { icon: Cpu, title: "Artificial Intelligence", desc: "Intelligent algorithms and adaptive systems", color: "#6F42FF" },
  { icon: Handshake, title: "Collaboration", desc: "Connecting academia, industry and institutions", color: "#FF9900" },
  { icon: Globe2, title: "Sustainability", desc: "Technology-enabled sustainable and ethical solutions", color: "#27B43E" },
];

const whyItems = [
  "Present your research to a global audience",
  "Learn from world renowned experts",
  "Network with global research community",
  "Explore collaborations and partnerships",
  "Publish in reputed indexed proceedings",
  "Drive innovation for societal impact",
];

const dates = [
  ["Paper Submission Deadline", "30 June, 2026"],
  ["Notification of Acceptance", "31 August, 2026"],
  ["Camera-Ready Submission", "30 September, 2026"],
  ["Early Bird Registration", "15 October, 2026"],
  ["Conference Dates", "10 – 12 December, 2026"],
];

export default function AboutIdeax2026() {
  return (
    <div className="min-h-screen bg-white text-[#07113F] font-sans overflow-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_4px_18px_rgba(0,35,120,0.08)]">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-8 h-[74px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-11 h-11 text-[#0B63FF]" />
            <div>
              <h1 className="text-3xl font-black tracking-wide">
                IDEAX <span className="text-[#F5A400]">2026</span>
              </h1>
              <p className="text-[10px] font-bold tracking-[2px] text-[#07113F]">
                INNOVATE • DECIDE • TRANSFORM
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-extrabold uppercase">
            {["Home", "About", "Tracks", "Speakers", "Schedule", "Committee", "Registration", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className={`relative hover:text-[#0B63FF] transition ${
                    item === "About" ? "text-[#0B63FF]" : ""
                  }`}
                >
                  {item}
                  {item === "About" && (
                    <span className="absolute -bottom-4 left-0 w-full h-[3px] bg-[#0B63FF] rounded-full" />
                  )}
                </a>
              )
            )}
          </nav>

          <button className="hidden sm:block bg-gradient-to-r from-[#075BFF] to-[#6D4CFF] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition">
            REGISTER NOW
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative min-h-[530px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-white/20 lg:bg-transparent" />
        <div className="relative max-w-[1420px] mx-auto px-5 lg:px-14 pt-12 lg:pt-20">
          <div className="max-w-[520px]">
            <h2 className="text-[42px] sm:text-[58px] lg:text-[70px] leading-[1.05] font-black text-[#06134A]">
              About the <br /> IDEAX 2026
            </h2>

            <h3 className="mt-5 text-xl lg:text-2xl font-black leading-snug">
              International Conference on{" "}
              <span className="text-[#0B63FF]">Innovation, Decision Engineering</span> and{" "}
              <span className="text-[#0B63FF]">Artificial Intelligence</span>
            </h3>

            <div className="mt-7 w-[90px] h-[5px] bg-gradient-to-r from-[#0B63FF] to-[#FFAA00] rounded-full" />

            <p className="mt-8 text-[15px] lg:text-[16px] leading-8 font-semibold text-[#07113F]/90">
              IDEAX 2026 is a premier international platform that brings together researchers,
              academicians, industry leaders and innovators to explore cutting-edge advancements in
              computing, intelligent systems and decision-making methodologies.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-[1420px] mx-auto px-4 lg:px-10">
        {/* Mission Vision Focus */}
        <section className="grid grid-cols-1 lg:grid-cols-[250px_250px_1fr] gap-4 -mt-2">
          {[
            {
              title: "OUR MISSION",
              icon: Target,
              desc: "To advance innovation and intelligent decision-making by fostering interdisciplinary research, collaboration and knowledge exchange for global impact.",
            },
            {
              title: "OUR VISION",
              icon: Eye,
              desc: "To become a leading global conference series that inspires innovation and shapes the future of intelligent decision systems.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-8 text-center shadow-[0_8px_25px_rgba(0,40,120,0.12)] hover:-translate-y-2 transition duration-500"
            >
              <h4 className="font-black text-[#07113F]">{card.title}</h4>
              <card.icon className="mx-auto my-8 w-16 h-16 text-[#0B63FF]" />
              <p className="text-sm leading-7 font-semibold text-[#07113F]/80">{card.desc}</p>
            </div>
          ))}

          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_25px_rgba(0,40,120,0.14)]">
            <h4 className="text-center font-black text-[#0637C8] mb-7">CORE FOCUS AREAS</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {focusAreas.map((f) => (
                <div key={f.title} className="text-center group">
                  <div
                    className="mx-auto w-24 h-24 flex items-center justify-center border-2 rounded-[28px] rotate-45 group-hover:scale-110 transition"
                    style={{ borderColor: f.color }}
                  >
                    <f.icon className="-rotate-45 w-12 h-12" style={{ color: f.color }} />
                  </div>
                  <h5 className="mt-6 font-black text-sm" style={{ color: f.color }}>
                    {f.title}
                  </h5>
                  <p className="mt-2 text-xs leading-5 font-semibold">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracks */}
        <section className="py-12">
          <h3 className="text-center text-2xl font-black text-[#0637C8]">CONFERENCE TRACKS</h3>
          <p className="text-center mt-4 font-semibold text-sm">
            IDEAX 2026 invites high-quality research papers across a wide range of topics, including but not limited to:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-9">
            {tracks.map((t, i) => (
              <div
                key={t.title}
                className="relative bg-white rounded-2xl p-6 min-h-[330px] shadow-[0_8px_24px_rgba(0,40,120,0.12)] hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(0,40,120,0.18)] transition duration-500"
              >
                <t.icon className="w-14 h-14 mb-5" style={{ color: t.color }} />
                <h4 className="font-black text-[15px] leading-5">{t.title}</h4>
                <ul className="mt-5 space-y-3 text-xs font-semibold text-[#07113F]/80">
                  {t.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center border-2 font-black"
                  style={{ borderColor: t.color, color: t.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why + Stats */}
        <section className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 py-8">
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
            <h3 className="font-black mb-6">WHY PARTICIPATE?</h3>
            <div className="space-y-4">
              {whyItems.map((item, i) => (
                <div key={item} className="flex items-center gap-4 font-bold text-sm">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#0B63FF] to-[#22C55E]">
                    {i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-8 lg:p-12 bg-cover bg-center text-white shadow-xl"
            style={{ backgroundImage: `url(${whyBg})` }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 h-full items-center text-center">
              {[
                ["500+", "Participants", Users],
                ["150+", "Research Papers", FileText],
                ["30+", "Countries", Globe2],
                ["50+", "Keynote Speakers", Award],
                ["20+", "Partner Institutions", Network],
              ].map(([num, label, Icon]) => (
                <div key={label}>
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#00B8FF]" />
                  <h4 className="text-3xl font-black">{num}</h4>
                  <p className="text-sm mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attend + Dates */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 py-8">
          <div>
            <h3 className="text-center text-xl font-black text-[#0637C8] mb-8">WHO SHOULD ATTEND?</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["Researchers & Academicians", "Industry Professionals", "Students & Scholars", "Policy Makers & Government", "Startups & Innovators"].map(
                (x, i) => (
                  <div key={x} className="text-center bg-white rounded-2xl p-5 shadow-md hover:-translate-y-2 transition">
                    <div className="w-24 h-24 mx-auto rounded-full bg-[#EAF3FF] flex items-center justify-center">
                      {i === 0 ? <BookOpen /> : i === 1 ? <Users /> : i === 2 ? <Award /> : i === 3 ? <Globe2 /> : <Trophy />}
                    </div>
                    <p className="mt-4 text-sm font-black">{x}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
            <h3 className="text-center font-black text-[#0637C8] mb-6">IMPORTANT DATES</h3>
            <div className="space-y-5">
              {dates.map(([name, date]) => (
                <div key={name} className="flex items-center justify-between gap-4 font-bold text-sm">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-6 h-6 text-[#0B63FF]" />
                    <span>{name}</span>
                  </div>
                  <span className="text-[#0637C8]">{date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publication */}
        <section className="py-8">
          <h3 className="text-center text-xl font-black text-[#0637C8] mb-7">PUBLICATION & INDEXING</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 bg-white rounded-2xl p-7 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
            {[
              ["Peer Reviewed", "All accepted papers are peer reviewed", FileText],
              ["Conference Proceedings", "Published with ISBN and DOI", BookOpen],
              ["Indexed & Abstracted", "Scopus, Google Scholar and other databases", Globe2],
              ["Selected Papers", "Opportunity for extended journal publication", Award],
            ].map(([title, desc, Icon]) => (
              <div key={title} className="flex items-center gap-4">
                <Icon className="w-12 h-12 text-[#0B63FF]" />
                <div>
                  <h4 className="font-black">{title}</h4>
                  <p className="text-sm font-semibold mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="my-8 rounded-2xl overflow-hidden bg-cover bg-center text-white p-8 lg:p-12 shadow-xl"
          style={{ backgroundImage: `url(${ctaBg})` }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <Trophy className="w-24 h-24 text-[#FFB000]" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-black">Be Part of IDEAX 2026</h2>
                <p className="mt-3 max-w-[650px] text-white/90">
                  Join us in shaping the future of intelligent systems and data-driven decisions that create a better and smarter world.
                </p>
              </div>
            </div>

            <button className="bg-[#FFB000] text-[#07113F] px-10 py-5 rounded-xl font-black flex items-center gap-4 hover:scale-105 transition">
              REGISTER NOW <ArrowRight />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#020B26] text-white pt-12 pb-6">
        <div className="max-w-[1420px] mx-auto px-5 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black">IDEAX <span className="text-[#F5A400]">2026</span></h2>
            <p className="mt-4 text-white/70 leading-7">
              International Conference on Innovation, Decision Engineering and Artificial Intelligence.
            </p>
            <div className="flex gap-4 mt-6">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                <Icon key={i} className="w-5 h-5 hover:text-[#0B63FF] transition" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black mb-5">QUICK LINKS</h4>
            {["Home", "About", "Tracks", "Speakers", "Schedule", "Committee", "Registration", "Contact"].map((x) => (
              <p key={x} className="text-white/70 text-sm hover:text-white cursor-pointer">{x}</p>
            ))}
          </div>

          <div>
            <h4 className="font-black mb-5">CONTACT US</h4>
            <p className="flex gap-3 text-white/70 mb-4"><MapPin /> Singapore</p>
            <p className="flex gap-3 text-white/70 mb-4"><Mail /> info@ideax-conference.org</p>
            <p className="flex gap-3 text-white/70"><Phone /> +65 9123 4567</p>
          </div>

          <div>
            <h4 className="font-black mb-5">STAY UPDATED</h4>
            <p className="text-white/70 mb-5">Subscribe to get the latest updates and announcements.</p>
            <div className="flex border border-white/30 rounded-lg overflow-hidden">
              <input className="bg-transparent px-4 py-3 flex-1 outline-none text-sm" placeholder="Enter your email" />
              <button className="bg-[#0B63FF] px-4">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-white/60 mt-10 text-sm">© 2026 IDEAX 2026. All Rights Reserved.</p>
      </footer>
    </div>
  );
}