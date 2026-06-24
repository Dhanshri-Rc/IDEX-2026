import { useState } from "react";
import {
  Calendar,
  MapPin,
  Laptop,
  Clock,
  ChevronDown,
  Download,
  Users,
  Send,
  Mic2,
  User,
  Coffee,
  BarChart3,
  Bell,
  BookOpen,
} from "lucide-react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FadeUp from "../components/FadeUp";
import PageHero from "../components/PageHero";
import scheduleHero from "../assets/hero/schedule-hero.png";

const META = [
  { icon: Calendar, title: "10 – 12", subtitle: "December, 2026" },
  { icon: MapPin, title: "Singapore,", subtitle: "Asia" },
  { icon: Laptop, title: "Hybrid", subtitle: "(In-person & Online)" },
  { icon: Clock, title: "3 Days", subtitle: "of Inspiring Sessions" },
];

const DAYS = [
  { key: "all", label: "All Days", date: "" },
  { key: "day1", label: "Day 1", date: "10 Dec, 2026" },
  { key: "day2", label: "Day 2", date: "11 Dec, 2026" },
  { key: "day3", label: "Day 3", date: "12 Dec, 2026" },
];

const SESSIONS = {
  day1: [
    {
      time: "08:30 – 09:30",
      duration: "60 mins",
      title: "Registration & Welcome Coffee",
      desc: "Level 1, Conference Foyer",
      icon: Users,
      tag: "General",
      tagColor: "bg-green-50 text-green-600",
    },
    {
      time: "09:30 – 10:00",
      duration: "30 mins",
      title: "Opening Ceremony",
      desc: "Welcome Address & Conference Overview",
      icon: Send,
      tag: "General",
      tagColor: "bg-blue-50 text-blue-600",
    },
    {
      time: "10:00 – 11:00",
      duration: "60 mins",
      title: "Keynote Speech",
      desc: "The Future of AI and Decision Engineering",
      person: "Prof. Michael Anderson, Stanford University, USA",
      icon: User,
      tag: "Keynote",
      tagColor: "bg-purple-50 text-purple-600",
    },
    {
      time: "11:15 – 12:45",
      duration: "90 mins",
      title: "Technical Session 1",
      desc: "AI & Machine Learning Innovations",
      icon: BarChart3,
      tag: "Track 01",
      tagColor: "bg-orange-50 text-orange-600",
    },
    {
      time: "12:45 – 14:00",
      duration: "75 mins",
      title: "Networking Lunch",
      desc: "Level 2, Grand Ballroom",
      icon: Coffee,
      tag: "General",
      tagColor: "bg-green-50 text-green-600",
    },
    {
      time: "14:00 – 15:30",
      duration: "90 mins",
      title: "Technical Session 2",
      desc: "Data Science & Analytics",
      icon: BarChart3,
      tag: "Track 02",
      tagColor: "bg-blue-50 text-blue-600",
    },
  ],
  day2: [
    {
      time: "09:00 – 10:00",
      duration: "60 mins",
      title: "Keynote Speech",
      desc: "Decision Engineering at Scale",
      person: "Prof. Fei-Fei Li, Stanford University, USA",
      icon: User,
      tag: "Keynote",
      tagColor: "bg-purple-50 text-purple-600",
    },
    {
      time: "10:15 – 11:45",
      duration: "90 mins",
      title: "Technical Session 3",
      desc: "Optimization & Decision Engineering",
      icon: BarChart3,
      tag: "Track 03",
      tagColor: "bg-green-50 text-green-600",
    },
    {
      time: "12:00 – 13:00",
      duration: "60 mins",
      title: "Panel Discussion",
      desc: "Ethics & Responsible AI",
      icon: Mic2,
      tag: "Panel",
      tagColor: "bg-rose-50 text-rose-600",
    },
    {
      time: "13:00 – 14:00",
      duration: "60 mins",
      title: "Lunch Break",
      desc: "Level 2, Grand Ballroom",
      icon: Coffee,
      tag: "General",
      tagColor: "bg-green-50 text-green-600",
    },
    {
      time: "14:15 – 15:45",
      duration: "90 mins",
      title: "Technical Session 4",
      desc: "Emerging Computing Technologies",
      icon: BarChart3,
      tag: "Track 04",
      tagColor: "bg-purple-50 text-purple-600",
    },
  ],
  day3: [
    {
      time: "09:00 – 10:00",
      duration: "60 mins",
      title: "Keynote Speech",
      desc: "Human-Centric AI Systems",
      person: "Prof. Virginia Dignum, Umeå University, Sweden",
      icon: User,
      tag: "Keynote",
      tagColor: "bg-purple-50 text-purple-600",
    },
    {
      time: "10:15 – 11:45",
      duration: "90 mins",
      title: "Technical Session 5",
      desc: "Intelligent Systems Applications",
      icon: BarChart3,
      tag: "Track 05",
      tagColor: "bg-orange-50 text-orange-600",
    },
    {
      time: "12:00 – 13:00",
      duration: "60 mins",
      title: "Best Paper Awards & Closing Ceremony",
      desc: "Level 1, Main Hall",
      icon: Send,
      tag: "General",
      tagColor: "bg-blue-50 text-blue-600",
    },
  ],
};

const ALL_SESSIONS = [...SESSIONS.day1, ...SESSIONS.day2, ...SESSIONS.day3];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("all");
  const [openItem, setOpenItem] = useState(null);

  const visibleSessions = activeDay === "all" ? SESSIONS.day1 : SESSIONS[activeDay];
  const dayLabel =
    activeDay === "all"
      ? "Day 1 · Thursday, 10 December 2026"
      : `${DAYS.find((d) => d.key === activeDay)?.label} · ${
          DAYS.find((d) => d.key === activeDay)?.date
        }`;

  return (
    <div>
      <PageHero
        variant="light"
        breadcrumb="Schedule"
        title="Conference"
        titleAccent="Schedule"
        image={scheduleHero}
        description="Explore the full program of IDEAX 2026. Plan your experience and make the most of every session."
      />

      {/* META STRIP */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <FadeUp>
            <div className="bg-white shadow-card rounded-xl2 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {META.map((m) => (
                <div key={m.title} className="flex items-center gap-3 justify-center sm:justify-start">
                  <span className="w-11 h-11 rounded-full bg-surface-muted flex items-center justify-center shrink-0">
                    <m.icon size={20} className="text-brand-blue" />
                  </span>
                  <div>
                    <div className="font-bold text-navy-900 text-sm leading-tight">{m.title}</div>
                    <div className="text-xs text-slate-500">{m.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Conference Program"
            title="Three Days of Insight, Innovation & Impact"
            description="A carefully curated program featuring keynote speeches, technical sessions, panel discussions, workshops and networking opportunities."
          />

          {/* Day tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {DAYS.map((d) => (
              <button
                key={d.key}
                onClick={() => setActiveDay(d.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-300 ${
                  activeDay === d.key
                    ? "bg-brand-blue text-white border-brand-blue shadow-glowBlue"
                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-blue/40"
                }`}
              >
                <Calendar size={15} />
                {d.label}
                {d.date && <span className="text-xs opacity-70">{d.date}</span>}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-3">
              <select className="text-sm border border-slate-200 rounded-lg px-3 py-2.5 text-slate-600 input-glow">
                <option>All Tracks</option>
                <option>Track 01</option>
                <option>Track 02</option>
              </select>
              <Button variant="blueOutline" icon={false} className="!py-2.5">
                <Download size={15} /> Download Schedule
              </Button>
            </div>
          </div>

          {/* Session list */}
          <div className="border border-slate-100 rounded-xl2 shadow-card overflow-hidden">
            <div className="flex items-center justify-between bg-surface-light px-5 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                <Calendar size={15} className="text-brand-blue" /> {dayLabel}
              </div>
              <span className="text-xs text-slate-400">All times are in SGT (GMT+8)</span>
            </div>

            <div>
              {visibleSessions.map((s, i) => (
                <div
                  key={i}
                  className="border-b last:border-b-0 border-slate-100 px-5 py-4 flex items-start gap-4 hover:bg-surface-light/60 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div className="w-28 sm:w-32 shrink-0">
                    <div className="text-sm font-semibold text-brand-blue">{s.time}</div>
                    <div className="text-xs text-slate-400">{s.duration}</div>
                  </div>
                  <span className="w-9 h-9 rounded-full bg-surface-muted flex items-center justify-center shrink-0">
                    <s.icon size={16} className="text-brand-blue" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-navy-900 text-sm">{s.title}</h4>
                    <p className="text-xs text-slate-500">{s.desc}</p>
                    {s.person && (
                      <p className="text-xs text-brand-blue mt-1 font-medium">{s.person}</p>
                    )}
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${s.tagColor}`}
                  >
                    {s.tag}
                  </span>
                  <button
                    onClick={() => setOpenItem(openItem === i ? null : i)}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform ${
                        openItem === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <button className="text-brand-blue text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              View Full Day Schedule <ChevronDown size={15} />
            </button>
          </div>

          {/* bottom cards */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            <FadeUp className="bg-surface-light rounded-xl2 p-6 flex items-start gap-4">
              <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <BookOpen size={20} className="text-brand-blue" />
              </span>
              <div>
                <h4 className="font-semibold text-navy-900 mb-1">Plan Your Experience</h4>
                <p className="text-sm text-slate-500 mb-3">
                  Browse sessions, tracks and speakers to build your personalized schedule.
                </p>
                <Button variant="blueOutline" className="!px-4 !py-2 text-xs">
                  View Program Guide
                </Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.08} className="bg-orange-50 rounded-xl2 p-6 flex items-start gap-4">
              <span className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Bell size={20} className="text-orange-500" />
              </span>
              <div>
                <h4 className="font-semibold text-navy-900 mb-1">Don't Miss a Session</h4>
                <p className="text-sm text-slate-500 mb-3">
                  Add sessions to your calendar and get timely reminders.
                </p>
                <Button variant="orange" className="!px-4 !py-2 text-xs">
                  Add to Calendar
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
