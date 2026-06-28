import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  FileSignature,
  FolderOpen,
  UserCircle,
  Mail,
  Bell,
  LogOut,
  Calendar,
  ChevronDown,
  FileEdit,
  Search,
  Copyright,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Headphones,
  Megaphone,
  ClipboardList,
  Users,
  ArrowRight,
  Trophy,
  Menu,
  X,
} from "lucide-react";

import Logo from "../assets/icons/Logo";
import dashboardCtaBg from "../assets/hero/ideax-2026-dashboard-background.webp";
import footerTrophyBg from "../assets/hero/ideax-2026-dashboard-background.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileEdit, label: "Submit Paper" },
  { icon: CheckSquare, label: "Check Status" },
  { icon: FileSignature, label: "Copyright Form" },
  { icon: FolderOpen, label: "My Submissions" },
  { icon: UserCircle, label: "Profile" },
  { icon: Mail, label: "Messages", badge: 3 },
  { icon: Bell, label: "Notifications", badge: 2 },
];

const STATS = [
  {
    icon: FileText,
    value: "01",
    label: "Submissions",
    sub: "Total Papers Submitted",
    color: "#0B63FF",
    link: "View all",
  },
  {
    icon: Clock,
    value: "01",
    label: "Under Review",
    sub: "Currently in Review",
    color: "#10B981",
    link: "View status",
  },
  {
    icon: CheckCircle2,
    value: "00",
    label: "Accepted",
    sub: "Papers Accepted",
    color: "#7C3AED",
    link: "View details",
  },
  {
    icon: XCircle,
    value: "00",
    label: "Rejected",
    sub: "Papers Rejected",
    color: "#F97316",
    link: "View details",
  },
];

const QUICK_ACTIONS = [
  {
    icon: FileEdit,
    title: "Submit Paper",
    desc: "Submit your original research paper for review.",
    color: "#0B63FF",
    btn: "Submit New Paper",
  },
  {
    icon: Search,
    title: "Check Status",
    desc: "Check the status of your submitted paper.",
    color: "#0E8F54",
    btn: "Check Status",
  },
  {
    icon: Copyright,
    title: "Copyright Form",
    desc: "Submit the copyright transfer form for your paper.",
    color: "#FF7417",
    btn: "Submit Copyright",
  },
];

const DATES = [
  ["Paper Submission Deadline", "30 June, 2026"],
  ["Notification of Acceptance", "31 August, 2026"],
  ["Camera-Ready Submission", "30 September, 2026"],
  ["Early Bird Registration", "15 October, 2026"],
  ["Conference Dates", "10 – 12 December, 2026"],
];

const ANNOUNCEMENTS = [
  {
    icon: Megaphone,
    title: "Call for Papers Extended!",
    desc: "The paper submission deadline has been extended to 30 June, 2026.",
    date: "20 May, 2026",
    color: "#0B63FF",
  },
  {
    icon: ClipboardList,
    title: "Guidelines Updated",
    desc: "Please check the author guidelines for the complete submission process.",
    date: "15 May, 2026",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Join Our Community",
    desc: "Connect with researchers and industry experts from around the world.",
    date: "10 May, 2026",
    color: "#7C3AED",
  },
];

export default function Dashboard() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F9FF] text-[#07113F]">
      <div className="flex">
        {/* SIDEBAR */}
        <aside
          className={`fixed lg:sticky top-0 z-50 h-screen w-[280px] bg-[#020B26] text-white flex flex-col transition-transform duration-300 ${
            mobileNavOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          {/* Logo */}
          <div className="px-4 pt-5 pb-4">
            <Link to="/" className="flex items-center gap-2">
              <Logo size={36} />
              <div>
                <h2 className="text-[16px] font-[600] leading-none">
                  IDEAX <span className="text-[#F5A400]">2026</span>
                </h2>
                <p className="mt-1 text-[7px] font-semibold tracking-[1.4px] text-white/70">
                  INNOVATE • DECIDE • TRANSFORM
                </p>
              </div>
            </Link>
          </div>

          <div className="px-4 pt-3 pb-3 text-[10px] uppercase text-white/55">
            Participant Dashboard
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
            {NAV.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-[10px] rounded-[7px] text-[12px] font-semibold transition-all hover:bg-[#0B63FF]"
              >
                <item.icon size={15} strokeWidth={2} />
                <span className="flex-1 text-left">{item.label}</span>

                {item.badge && (
                  <span className="bg-[#0B63FF] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <button
              onClick={() => navigate("/login")}
              className="w-full flex items-center gap-3 px-3 py-[10px] rounded-[7px] text-[12px] font-semibold text-white/85 hover:bg-white/10 transition-all"
            >
              <LogOut size={15} />
              Logout
            </button>
          </nav>

          {/* CTA Trophy Card */}
          <div
            className="mx-4 mb-4 min-h-[215px] rounded-[9px] border border-[#1B4AA8]/70 bg-cover bg-bottom px-4 pt-5 pb-3 overflow-hidden"
            style={{
              backgroundImage: `
      linear-gradient(180deg, rgba(2,11,38,0.15) 0%, rgba(2,11,38,0.1) 100%),
      url(${footerTrophyBg})
    `,
            }}
          >
            <h3 className="text-[18px] font-semibold leading-[1.25] text-white">
              Be a Part of <br /> IDEAX 2026
            </h3>

            <p className="mt-4 max-w-[170px] text-[12px] leading-6 text-white/85">
              Join researchers and industry experts from around the world.
            </p>

            <Link
              to="/registration"
              className="mt-4 inline-flex h-[34px] items-center justify-center gap-3 rounded-[5px] border border-white/35 px-4 text-[12px] font-semibold text-white hover:bg-white hover:text-[#07113F] transition"
            >
              Register Now <ArrowRight size={14} />
            </Link>
          </div>
        </aside>

        {mobileNavOpen && (
          <button
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileNavOpen(false)}
          />
        )}

        {/* MAIN */}
        <div className="min-w-0 flex-1">
          {/* TOP BAR */}
          <header className="sticky top-0 z-30 bg-white border-b border-[#E5ECF7]">
            <div className=" h-[80px] sm:h-[90px] lg:h-[88px] flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8  py-1 sm:py-2 lg:py-4">
              <button
                className="lg:hidden w-10 h-10 rounded-lg border border-[#E5ECF7] flex items-center justify-center"
                onClick={() => setMobileNavOpen(true)}
              >
                <Menu size={22} />
              </button>

              <div className="hidden md:block max-w-[300px] text-[12px] lg:text-[14px] font-semibold leading-6 text-[#07113F]">
                International Conference on Innovation, Decision Engineering and
                Artificial Intelligence
              </div>

              <div className="ml-auto flex items-center gap-4 sm:gap-16">
                <div className="hidden lg:flex items-center gap-3 border-l border-[#E5ECF7] pl-8">
                  <Calendar size={25} className="text-[#0B63FF]" />
                  <div>
                    <p className="text-[12px] font-semibold">
                      10 – 12 Dec, 2026
                    </p>
                    <p className="text-[12px] text-[#4B5579]">Singapore</p>
                  </div>
                </div>
                <button className="relative">
                  <Mail size={24} className="text-[#0B63FF]" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                    3
                  </span>
                </button>

                <button className="relative">
                  <Bell size={24} className="text-[#0B63FF]" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                    2
                  </span>
                </button>

                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#5AA9FF] text-white flex items-center justify-center font-semibold">
                    RA
                  </span>
                  <div className="hidden sm:block">
                    <p className="text-[14px] font-semibold">Rahul Arora</p>
                    <p className="text-[12px] text-[#4B5579]">Participant</p>
                  </div>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </header>

          <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Welcome */}
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <h1 className="lg:text-[16px] font-[600]">
                Welcome back, Rahul! 👋
              </h1>
              <p className="mt-2 text-[12px] text-[#4B5579]">
                Here’s an overview of your paper submission activities.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-[14px] border border-[#E5ECF7] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${s.color}14`,
                        color: s.color,
                      }}
                    >
                      <s.icon size={22} />
                    </span>
                    <span className="text-[22px] font-[600] text-[#07113F]">
                      {s.value}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[14px] font-[500]">{s.label}</h3>
                  <p className="mt-1 text-[12px] text-[#4B5579]">{s.sub}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-[12px] font-[500] text-[#0B63FF]">
                    {s.link} <ArrowRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <section>
              <h3 className="mb-4 text-[14px] font-[600] uppercase">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {QUICK_ACTIONS.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-[14px] border border-[#E5ECF7] p-7 text-center shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
                  >
                    <span
                      className="mx-auto w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${a.color}14`,
                        color: a.color,
                      }}
                    >
                      <a.icon size={22} />
                    </span>

                    <h4
                      className="mt-5 text-[14px] font-[500]"
                      style={{ color: a.color }}
                    >
                      {a.title}
                    </h4>
                    <p className="mt-3 mx-auto max-w-[190px] text-[12px] leading-6 text-[#4B5579]">
                      {a.desc}
                    </p>

                    <button
                      className="mt-6 inline-flex items-center justify-center gap-3 rounded-md border px-6 py-2 text-[12px] font-[600] hover:text-white transition"
                      style={{ borderColor: a.color, color: a.color }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = a.color;
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = a.color;
                      }}
                    >
                      {a.btn} <ArrowRight size={15} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Submissions + Dates */}
            <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-[14px] border border-[#E5ECF7] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
              >
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-[#0B63FF] text-[14px] font-[500] uppercase">
                    My Submissions
                  </h3>
                  <button className="text-[#0B63FF] text-[12px] font-semibold">
                    View All
                  </button>
                </div>

                <div className="rounded-xl border border-[#E5ECF7] p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex gap-4">
                      <span className="rounded-lg text-[#0B63FF] flex items-center justify-center">
                        <FileText size={30} />
                      </span>
                      <div>
                        <p className="text-[12px] font-semibold text-[#4B5579]">
                          IDEAX26-0001
                        </p>
                        <h4 className="mt-2  text-[14px] font-[500] leading-6">
                          A Hybrid Deep Learning Approach for Intelligent
                          Decision Support Systems
                        </h4>
                      </div>
                    </div>
                    <span className="w-[180px] rounded-full bg-orange-100 px-4 py-2 text-[11px] font-semibold text-orange-600">
                      Under Review
                    </span>
                  </div>

                  <p className="mt-4 text-[13px] text-[#4B5579]">
                    Submitted on: 15 May, 2026
                  </p>
                  <p className="mt-1 text-[13px] text-[#4B5579]">
                    Track: Artificial Intelligence & Machine Learning
                  </p>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {[
                      "Submitted",
                      "Under Review",
                      "Decision",
                      "Camera Ready",
                    ].map((step, i) => (
                      <div key={step}>
                        <span
                          className={`mx-auto w-9 h-9 rounded-full border-2 flex items-center justify-center ${
                            i < 2
                              ? "border-[#0B63FF] text-[#0B63FF]"
                              : "border-gray-300 text-gray-400"
                          }`}
                        >
                          {i < 2 ? <CheckCircle2 size={17} /> : "•"}
                        </span>
                        <p
                          className={`mt-2 text-[12px] font-semibold ${i < 2 ? "text-[#0B63FF]" : "text-[#4B5579]"}`}
                        >
                          {step}
                        </p>
                        <p className="text-[11px] text-[#4B5579]">
                          {i === 0
                            ? "15 May, 2026"
                            : i === 1
                              ? "18 May, 2026"
                              : "Pending"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-[14px] border border-[#E5ECF7] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
              >
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-[#0B63FF] text-[14px] font-[500] uppercase">
                    Important Dates
                  </h3>
                  <button className="text-[#0B63FF] text-[12px] font-semibold">
                    View Schedule
                  </button>
                </div>

                <ul className="space-y-5">
                  {DATES.map(([label, date]) => (
                    <li key={label} className="flex items-center gap-4">
                      <Calendar size={20} className="text-[#0B63FF]" />
                      <span className="flex-1 text-[13px] font-[500]">
                        {label}
                      </span>
                      <span className="text-[13px] font-[500] text-[#0B63FF]">
                        {date}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="mt-10 w-full rounded-md border border-[#0B63FF] py-3 text-[12px] font-[500] text-[#0B63FF] hover:bg-[#0B63FF] hover:text-white transition">
                  View Full Schedule{" "}
                  <ArrowRight className="inline ml-2" size={16} />
                </button>
              </motion.div>
            </section>

            {/* Announcements + Help */}
            <section className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-[14px] border border-[#E5ECF7] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
              >
                <h3 className="text-[14px] font-[600] uppercase mb-5">
                  Announcements
                </h3>

                <div className="space-y-4">
                  {ANNOUNCEMENTS.map((a) => (
                    <div
                      key={a.title}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 border-b last:border-b-0 pb-4"
                    >
                      <span
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: `${a.color}14`,
                          color: a.color,
                        }}
                      >
                        <a.icon size={22} />
                      </span>
                      <div className="flex-1">
                        <h4 className="text-[14px] font-semibold">{a.title}</h4>
                        <p className="mt-1 text-[12px] text-[#4B5579]">
                          {a.desc}
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-[12px] text-[#4B5579]">{a.date}</p>
                        <button className="mt-1 text-[12px] font-[500] text-[#0B63FF]">
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-[14px] border border-[#E5ECF7] p-7 text-center shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
              >
                <h3 className="text-[17px] font-semibold">Need Help?</h3>
                <p className="mt-3 text-[13px] leading-6 text-[#4B5579]">
                  Our support team is here to assist you with any queries.
                </p>
                <Headphones className="mx-auto mt-5 h-20 w-20 text-[#0B63FF]" />
                <button className="mt-6 inline-flex items-center gap-3 rounded-md border border-[#0B63FF] px-6 py-3 text-[13px] font-[500] text-[#0B63FF] hover:bg-[#0B63FF] hover:text-white transition">
                  Contact Support <ArrowRight size={15} />
                </button>
              </motion.div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
