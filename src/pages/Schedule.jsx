import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Monitor,
  Clock3,
  Users,
  Send,
  Mic,
  Network,
  BarChart3,
  Bell,
  Download,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import scheduleHero from "../assets/hero/ideax-2026-contact-page-banner.webp";
import scheduleCta from "../assets/hero/ideax-2026-conference-tracks-call-to-action.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const scheduleItems = [
  {
    time: "08:30 – 09:30",
    duration: "60 mins",
    icon: Users,
    title: "Registration & Welcome Coffee",
    desc: "Level 1, Conference Foyer",
    tag: "General",
    color: "#12B8A6",
  },
  {
    time: "09:30 – 10:00",
    duration: "30 mins",
    icon: Send,
    title: "Opening Ceremony",
    desc: "Welcome Address & Conference Overview",
    tag: "General",
    color: "#0B63FF",
  },
  {
    time: "10:00 – 11:00",
    duration: "60 mins",
    icon: Mic,
    title: "Keynote Speech",
    desc: "The Future of AI and Decision Engineering",
    speaker: "Prof. Michael Anderson, Stanford University, USA",
    tag: "Keynote",
    color: "#7C3AED",
  },
  {
    time: "11:15 – 12:45",
    duration: "90 mins",
    icon: Network,
    title: "Technical Session 1",
    desc: "AI & Machine Learning Innovations",
    tag: "Track 01",
    color: "#FF7A00",
  },
  {
    time: "12:45 – 14:00",
    duration: "75 mins",
    icon: Users,
    title: "Networking Lunch",
    desc: "Level 2, Grand Ballroom",
    tag: "General",
    color: "#12B8A6",
  },
  {
    time: "14:00 – 15:30",
    duration: "90 mins",
    icon: BarChart3,
    title: "Technical Session 2",
    desc: "Data Science & Analytics",
    tag: "Track 02",
    color: "#0B63FF",
  },
];

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-white text-[#07113F] overflow-hidden">
      {/* Hero */}
      <section
        className="
    relative
    min-h-[360px] sm:min-h-[470px] lg:min-h-[500px]
    bg-white
    bg-no-repeat
    bg-cover
    bg-center
    lg:bg-[length:100%_100%]
    lg:bg-top
  "
        style={{ backgroundImage: `url(${scheduleHero})` }}
      >
        <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-8 lg:px-16 pt-8 sm:pt-12 lg:pt-14">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-[480px]"
          >
            <div className="flex items-center gap-3 text-[#07113F]/80 text-[13px]">
              <Link to="/" className="hover:text-[#0B63FF]">
                Home
              </Link>
              <span>›</span>
              <span className="text-[#0B63FF]">Schedule</span>
            </div>

            <h1 className="mt-6 font-[600] leading-[1.1]">
              <span className="block text-[#07113F] text-[36px] sm:text-[38px] lg:text-[42px]">
                Conference
              </span>
              <span className="block text-[36px] sm:text-[48px] lg:text-[52px] font-bold bg-gradient-to-r from-[#0B63FF] via-[#13B5FF] to-[#00D4FF] bg-clip-text text-transparent">
                Schedule
              </span>
            </h1>

            <div className="mt-4 flex h-[4px] w-[70px] overflow-hidden rounded-full">
              <span className="w-[55%] bg-[#13B5FF]" />
              <span className="w-[45%] bg-[#FFC21A]" />
            </div>

            <p className="mt-7 max-w-[300px] text-[#07113F] text-[14px] sm:text-[15px] leading-6 lg:leading-8">
              Explore the full program of IDEAX 2026. Plan your experience and
              make the most of every session.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-8 lg:px-16 pb-10 -mt-4">
        <div className="max-w-[1240px] mx-auto">
          {/* Info Strip */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-1 bg-white rounded-[12px] px-6 py-5 shadow-[0_8px_28px_rgba(0,30,100,0.12)] border border-[#E5ECF7]"
          >
            {[
              [CalendarDays, "10 – 12", "December, 2026", "#0B63FF"],
              [MapPin, "Singapore,", "Asia", "#FF9900"],
              [Monitor, "Hybrid", "(In-person & Online)", "#14B8A6"],
              [Clock3, "3 Days", "of Inspiring Sessions", "#7C3AED"],
            ].map(([Icon, title, desc, color], i) => (
              <motion.div
                key={title}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`flex items-center gap-4 ${i !== 3 ? "lg:border-r lg:border-[#D8E2F1]" : ""}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#0637C8]">
                    {title}
                  </h4>
                  <p className="text-[12px] font-medium">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center pt-8"
          >
            <div className="flex flex-col items-center">
              <p className="uppercase text-[#0B63FF] text-[14px] font-[600]">
                Conference Program
              </p>

              <div className="mt-4 flex h-[3px] w-[60px] overflow-hidden rounded-full">
                <span className="w-[55%] bg-[#13B5FF]" />
                <span className="w-[45%] bg-[#FFC21A]" />
              </div>
            </div>
            <h2 className="mt-4 text-[20px] sm:text-[24px] font-[600] text-[#07113F]">
              Three Days of Insight, Innovation & Impact
            </h2>
            <p className="mt-3 max-w-[480px] mx-auto text-[14px] text-[#4B5579] leading-6">
              A carefully curated program featuring keynote speeches, technical
              sessions, panel discussions, workshops and networking
              opportunities.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mt-8 flex flex-col xl:flex-row justify-between gap-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full xl:w-auto">
              {[
                "All Days",
                "Day 1\n10 Dec, 2026",
                "Day 2\n11 Dec, 2026",
                "Day 3\n12 Dec, 2026",
              ].map((d, i) => (
                <button
                  key={d}
                  className={`rounded-[8px] border px-5 py-3 text-left text-[13px] font-semibold transition-all hover:-translate-y-1 ${
                    i === 0
                      ? "bg-[#0B63FF] text-white border-[#0B63FF] shadow-[0_10px_24px_rgba(11,99,255,0.28)]"
                      : "bg-white text-[#07113F] border-[#D8E2F1] hover:border-[#0B63FF]"
                  }`}
                >
                  <CalendarDays className="inline w-4 h-4 mr-2" />
                  {d.split("\n")[0]}
                  {d.includes("\n") && (
                    <span className="block ml-6 text-[12px] font-medium opacity-80">
                      {d.split("\n")[1]}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
              <button className="h-[46px] px-6 rounded-[8px] bg-[#F1F5FF] text-[13px] font-semibold flex items-center justify-center gap-8">
                All Tracks <ChevronDown className="w-4 h-4" />
              </button>
              <button className="h-[46px] px-6 rounded-[8px] border border-[#0B63FF] text-[#0B63FF] text-[13px] font-semibold flex items-center justify-center gap-3 hover:bg-[#0B63FF] hover:text-white transition">
                <Download className="w-4 h-4" /> Download Schedule
              </button>
            </div>
          </div>

          {/* Schedule Table */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 rounded-[12px] overflow-hidden border border-[#E1E9F6] shadow-[0_10px_30px_rgba(0,30,100,0.08)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#F4F8FF] px-5 py-4 text-[13px] font-semibold text-[#0637C8]">
              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Day 1 <span>•</span> Thursday, 10 December 2026
              </span>
              <span className="text-[#4B5579] font-[12px]">
                All times are in SGT (GMT+8)
              </span>
            </div>

            <div className="bg-white">
              {scheduleItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ backgroundColor: "#F8FBFF" }}
                    className="
  relative grid grid-cols-1
  sm:grid-cols-[120px_60px_1fr]
  lg:grid-cols-[150px_80px_1fr_120px_30px]
  gap-4 px-4 sm:px-5 py-4
  border-b border-[#E7EDF7] items-center
"
                  >
                    <div className="md:border-r md:border-[#DDE6F4]">
                      <p className="text-[14px] font-[600] text-[#003BCB]">
                        {item.time}
                      </p>
                      <p className="text-[12px] text-[#4B5579]">
                        {item.duration}
                      </p>
                    </div>

                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>

                    <div>
                      <h4 className="text-[14px] font-[600] text-[#07113F]">
                        {item.title}
                      </h4>
                      <p className="text-[12px] font-medium text-[#1F2A44]">
                        {item.desc}
                      </p>
                      {item.speaker && (
                        <p className="mt-1 text-[12px] text-[#0B63FF] font-medium">
                          {item.speaker}
                        </p>
                      )}
                    </div>

                    <span
                      className="w-fit rounded-md px-4 py-1 text-[12px] font-semibold"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}16`,
                      }}
                    >
                      {item.tag}
                    </span>

                    <ChevronDown className="w-4 h-4 text-[#0B63FF]" />
                  </motion.div>
                );
              })}
            </div>
{/* <Link to="/contact">
            <button className="w-full py-4 text-[13px] font-[600] text-[#0B63FF] hover:bg-[#F4F8FF] transition">
              View Full Day 1 Schedule{" "}
              <ChevronDown className="inline w-4 h-4 ml-2" />
            </button></Link> */}
          </motion.div>

          {/* Bottom CTA Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
            {[
              [
                CalendarDays,
                "Plan Your Experience",
                "Browse sessions, tracks and speakers to build your personalized schedule.",
                "VIEW PROGRAM GUIDE",
                "#0B63FF",
              ],
              [
                Bell,
                "Don’t Miss a Session",
                "Add sessions to your calendar and get timely reminders.",
                "ADD TO CALENDAR",
                "#FF9900",
              ],
            ].map(([Icon, title, desc, btn, color]) => (
              <motion.div
                key={title}
                whileHover={{ y: -7, scale: 1.01 }}
                className="rounded-[12px] p-5 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left shadow-[0_8px_24px_rgba(0,30,100,0.08)] border transition-all duration-500 h-full"
                style={{
                  backgroundColor: `${color}12`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${color}12` }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>

                <div className="flex flex-col h-full flex-1">
                  <h3 className="text-[17px] font-semibold text-[#07113F]">
                    {title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#4B5579] flex-1">
                    {desc}
                  </p>
<Link to="/contact">
                  <button
                    className="mt-5 self-center sm:self-start inline-flex items-center gap-3 px-5 py-3 rounded-[6px] border text-[12px] font-medium hover:scale-105 transition-all duration-300"
                    style={{ color, borderColor: color }}
                  >
                    {btn}
                    <ArrowRight className="w-4 h-4" />
                  </button></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
