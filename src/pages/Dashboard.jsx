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
  Trophy,
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
} from "lucide-react";
import Logo from "../assets/icons/Logo";
import Button from "../components/Button";

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
  { icon: FileText, value: "01", label: "Submissions", sub: "Total Papers Submitted", color: "bg-blue-50 text-blue-600", link: "View all" },
  { icon: Clock, value: "01", label: "Under Review", sub: "Currently in Review", color: "bg-amber-50 text-amber-600", link: "View status" },
  { icon: CheckCircle2, value: "00", label: "Accepted", sub: "Papers Accepted", color: "bg-green-50 text-green-600", link: "View details" },
  { icon: XCircle, value: "00", label: "Rejected", sub: "Papers Rejected", color: "bg-red-50 text-red-600", link: "View details" },
];

const QUICK_ACTIONS = [
  { icon: FileEdit, title: "Submit Paper", desc: "Submit your original research paper for review.", color: "bg-blue-50 text-blue-600", btn: "Submit New Paper", variant: "blue" },
  { icon: Search, title: "Check Status", desc: "Check the status of your submitted paper.", color: "bg-green-50 text-green-600", btn: "Check Status", variant: "navy" },
  { icon: Copyright, title: "Copyright Form", desc: "Submit the copyright transfer form for your paper.", color: "bg-orange-50 text-orange-600", btn: "Submit Copyright", variant: "orange" },
];

const DATES = [
  { label: "Paper Submission Deadline", date: "30 June, 2026" },
  { label: "Notification of Acceptance", date: "31 August, 2026" },
  { label: "Camera-Ready Submission", date: "30 September, 2026" },
  { label: "Early Bird Registration", date: "15 October, 2026" },
  { label: "Conference Dates", date: "10 – 12 December, 2026" },
];

const ANNOUNCEMENTS = [
  { icon: Megaphone, title: "Call for Papers Extended!", desc: "The paper submission deadline has been extended to 30 June, 2026.", date: "20 May, 2026", color: "bg-blue-50 text-blue-600" },
  { icon: ClipboardList, title: "Guidelines Updated", desc: "Please check the author guidelines for the complete submission process.", date: "15 May, 2026", color: "bg-green-50 text-green-600" },
  { icon: Users, title: "Join Our Community", desc: "Connect with researchers and industry experts from around the world.", date: "10 May, 2026", color: "bg-purple-50 text-purple-600" },
];

export default function Dashboard() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-light flex">
      {/* SIDEBAR */}
      <aside
        className={`fixed lg:sticky top-0 h-screen w-72 bg-navy-900 text-white flex flex-col z-40 transition-transform duration-300 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo size={34} />
            <span className="font-display font-bold text-base">
              IDEAX <span className="text-gold-500">2026</span>
              <span className="block text-[8px] font-semibold tracking-[0.18em] text-white/50">
                INNOVATE · DECIDE · TRANSFORM
              </span>
            </span>
          </Link>
        </div>

        <div className="px-6 pt-5 pb-2 text-[11px] font-semibold tracking-widest text-white/40 uppercase">
          Participant Dashboard
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {NAV.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-brand-blue text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={17} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <button
            onClick={() => navigate("/login")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors mt-2"
          >
            <LogOut size={17} />
            Logout
          </button>
        </nav>

        <div className="p-5 m-4 rounded-xl2 bg-gradient-to-br from-brand-blue to-brand-indigo">
          <h4 className="font-bold text-sm mb-1">Be a Part of IDEAX 2026</h4>
          <p className="text-xs text-white/75 mb-4">
            Join researchers and industry experts from around the world.
          </p>
          <Button as={Link} to="/registration" variant="white" className="!px-4 !py-2 text-xs w-full justify-center">
            Register Now
          </Button>
          <Trophy className="text-gold-400 mx-auto mt-4" size={36} />
        </div>
      </aside>

      {mobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* MAIN */}
      <div className="flex-1 min-w-0">
        {/* TOP BAR */}
        <header className="bg-white border-b border-slate-100 sticky top-0 z-20">
          <div className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4">
            <button className="lg:hidden" onClick={() => setMobileNavOpen(true)}>
              <ChevronRight size={22} />
            </button>
            <div className="hidden sm:block text-sm text-slate-500 leading-tight">
              <p className="font-medium text-navy-900">
                International Conference on Innovation, Decision Engineering and Artificial
                Intelligence
              </p>
            </div>
            <div className="flex items-center gap-5 ml-auto">
              <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
                <Calendar size={15} className="text-brand-blue" />
                <div>
                  <div className="font-semibold text-navy-900">10 – 12 Dec, 2026</div>
                  <div>Singapore</div>
                </div>
              </div>
              <button className="relative">
                <Mail size={19} className="text-slate-500" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="relative">
                <Bell size={19} className="text-slate-500" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center">
                  RA
                </span>
                <div className="hidden sm:block text-xs">
                  <div className="font-semibold text-navy-900">Rahul Arora</div>
                  <div className="text-slate-400">Participant</div>
                </div>
                <ChevronDown size={14} className="text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-5 sm:p-8 space-y-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl font-bold text-navy-900">Welcome back, Rahul! 👋</h1>
            <p className="text-sm text-slate-500 mt-1">
              Here's an overview of your paper submission activities.
            </p>
          </motion.div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="card-lift bg-white rounded-xl2 shadow-card p-5"
              >
                <span className={`w-11 h-11 rounded-full ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon size={19} />
                </span>
                <div className="text-2xl font-bold text-navy-900">{s.value}</div>
                <div className="text-sm font-semibold text-navy-900">{s.label}</div>
                <div className="text-xs text-slate-400 mb-3">{s.sub}</div>
                <button className="text-xs font-medium text-brand-blue hover:underline">
                  {s.link} →
                </button>
              </motion.div>
            ))}
          </div>

          {/* QUICK ACTIONS */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">
              Quick Actions
            </h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {QUICK_ACTIONS.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="card-lift bg-white rounded-xl2 shadow-card p-6 text-center"
                >
                  <span className={`w-14 h-14 rounded-full ${a.color} flex items-center justify-center mx-auto mb-4`}>
                    <a.icon size={22} />
                  </span>
                  <h4 className="font-semibold text-navy-900 mb-1">{a.title}</h4>
                  <p className="text-xs text-slate-500 mb-4">{a.desc}</p>
                  <Button variant={a.variant} icon={false} className="w-full justify-center text-sm">
                    {a.btn}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SUBMISSIONS + DATES */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl2 shadow-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-brand-blue text-sm uppercase tracking-wide">
                  My Submissions
                </h3>
                <button className="text-xs font-medium text-brand-blue hover:underline">
                  View All
                </button>
              </div>
              <div className="border border-slate-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400">IDEAX26-0001</span>
                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full">
                    Under Review
                  </span>
                </div>
                <h4 className="font-semibold text-navy-900 text-sm mb-1">
                  A Hybrid Deep Learning Approach for Intelligent Decision Support Systems
                </h4>
                <p className="text-xs text-slate-500 mb-1">Submitted on: 15 May, 2026</p>
                <p className="text-xs text-slate-500 mb-4">
                  Track: Artificial Intelligence & Machine Learning
                </p>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  {["Submitted", "Under Review", "Decision", "Camera Ready"].map((step, i) => (
                    <div key={step} className="flex flex-col items-center flex-1 relative">
                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mb-1 ${
                          i < 2
                            ? "bg-brand-blue border-brand-blue text-white"
                            : "border-slate-300 text-slate-300"
                        }`}
                      >
                        {i < 2 && <CheckCircle2 size={11} />}
                      </span>
                      <span className="text-center">{step}</span>
                      <span className="text-slate-400">
                        {i === 0 ? "15 May, 2026" : i === 1 ? "18 May, 2026" : "Pending"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl2 shadow-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-brand-blue text-sm uppercase tracking-wide">
                  Important Dates
                </h3>
                <button className="text-xs font-medium text-brand-blue hover:underline">
                  View Schedule
                </button>
              </div>
              <ul className="space-y-3 mb-4">
                {DATES.map((d) => (
                  <li key={d.label} className="flex items-center gap-2.5 text-sm">
                    <Calendar size={14} className="text-brand-blue shrink-0" />
                    <span className="text-slate-600 flex-1">{d.label}</span>
                    <span className="font-medium text-brand-blue text-xs whitespace-nowrap">
                      {d.date}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="blueOutline" icon={false} className="w-full justify-center text-sm">
                View Full Schedule
              </Button>
            </div>
          </div>

          {/* ANNOUNCEMENTS + HELP */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl2 shadow-card p-6">
              <h3 className="font-bold text-brand-blue text-sm uppercase tracking-wide mb-4">
                Announcements
              </h3>
              <div className="space-y-4">
                {ANNOUNCEMENTS.map((a) => (
                  <div key={a.title} className="flex items-start gap-3 pb-4 border-b last:border-0 border-slate-100">
                    <span className={`w-10 h-10 rounded-full ${a.color} flex items-center justify-center shrink-0`}>
                      <a.icon size={17} />
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-navy-900">{a.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{a.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-slate-400 mb-1">{a.date}</p>
                      <button className="text-xs font-medium text-brand-blue hover:underline">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl2 shadow-card p-6 text-center flex flex-col items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-3">
                <Headphones size={22} className="text-purple-600" />
              </span>
              <h4 className="font-semibold text-navy-900 mb-1">Need Help?</h4>
              <p className="text-xs text-slate-500 mb-4">
                Our support team is here to assist you with any queries.
              </p>
              <Button variant="blueOutline" icon={false} className="text-sm">
                Contact Support
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
