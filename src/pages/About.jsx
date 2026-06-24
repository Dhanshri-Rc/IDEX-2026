import {
  Target,
  Eye,
  BrainCircuit,
  Workflow,
  Cpu,
  Handshake,
  Globe2,
  LineChart,
  Settings2,
  Cloud,
  HeartPulse,
  Users2,
  Award,
  Briefcase,
  GraduationCap,
  Landmark,
  Rocket,
  Calendar,
  FileCheck2,
  BadgeCheck,
  Network,
  FileText,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FadeUp from "../components/FadeUp";
import PageHero from "../components/PageHero";
import innerHeroLight from "../assets/hero/inner-hero-light.png";

const FOCUS_AREAS = [
  { icon: BrainCircuit, title: "Innovation", desc: "Encouraging novel ideas and creative solutions", color: "text-blue-600" },
  { icon: Workflow, title: "Decision Engineering", desc: "Modeling and optimizing decision processes", color: "text-teal-600" },
  { icon: Cpu, title: "Artificial Intelligence", desc: "Intelligent algorithms and adaptive systems", color: "text-purple-600" },
  { icon: Handshake, title: "Collaboration", desc: "Connecting academia, industry and institutions", color: "text-orange-500" },
  { icon: Globe2, title: "Sustainability", desc: "Technology-enabled sustainable and ethical solutions", color: "text-green-600" },
];

const CONFERENCE_TRACKS = [
  { num: "01", icon: BrainCircuit, title: "Artificial Intelligence & Machine Learning", items: ["Deep Learning", "Generative AI", "Explainable AI", "Neural Computing"] },
  { num: "02", icon: LineChart, title: "Data Science & Decision Analytics", items: ["Predictive Analytics", "Data Mining", "Big Data Engineering", "Business Intelligence"] },
  { num: "03", icon: Settings2, title: "Optimization & Decision Engineering", items: ["Operations Research", "Decision Support Systems", "Multi-criteria Decision Making", "Simulation & Modeling"] },
  { num: "04", icon: Cloud, title: "Emerging Computing Technologies", items: ["Cloud & Edge Computing", "Internet of Things (IoT)", "Blockchain", "Cybersecurity"] },
  { num: "05", icon: HeartPulse, title: "Intelligent Systems Applications", items: ["Healthcare AI", "Finance & FinTech", "Smart Cities", "Industry 4.0/5.0"] },
  { num: "06", icon: Users2, title: "Socio-Technical & Human-Centric AI", items: ["Human-AI Interaction", "Ethics & Responsible AI", "Policy & Governance", "Education & Training"] },
];

const WHY_PARTICIPATE = [
  "Present your research to a global audience",
  "Learn from world renowned experts",
  "Network with global research community",
  "Explore collaborations and partnerships",
  "Publish in reputed indexed proceedings",
  "Drive innovation for societal impact",
];

const STATS = [
  { icon: Users2, value: "500+", label: "Participants" },
  { icon: FileText, value: "150+", label: "Research Papers" },
  { icon: Globe2, value: "30+", label: "Countries" },
  { icon: Award, value: "50+", label: "Keynote Speakers" },
  { icon: Handshake, value: "20+", label: "Partner Institutions" },
];

const ATTENDEES = [
  { icon: Briefcase, label: "Researchers & Academicians" },
  { icon: Landmark, label: "Industry Professionals" },
  { icon: GraduationCap, label: "Students & Scholars" },
  { icon: Award, label: "Policy Makers & Government" },
  { icon: Rocket, label: "Startups & Innovators" },
];

const DATES = [
  { label: "Paper Submission Deadline", date: "30 June, 2026" },
  { label: "Notification of Acceptance", date: "31 August, 2026" },
  { label: "Camera-Ready Submission", date: "30 September, 2026" },
  { label: "Early Bird Registration", date: "15 October, 2026" },
  { label: "Conference Dates", date: "10 – 12 December, 2026" },
];

const PUBLICATION = [
  { icon: FileCheck2, title: "Peer Reviewed", desc: "All accepted papers are peer reviewed" },
  { icon: FileText, title: "Conference Proceedings", desc: "Published with ISBN and DOI" },
  { icon: Network, title: "Indexed & Abstracted", desc: "Scopus, Google Scholar and other databases" },
  { icon: BadgeCheck, title: "Selected Papers", desc: "Opportunity for extended journal publication" },
];

export default function About() {
  return (
    <div>
      <PageHero
        variant="light"
        breadcrumb="About"
        title="About the"
        titleAccent="IDEAX 2026"
        image={innerHeroLight}
        description="IDEAX 2026 is a premier international platform that brings together researchers, academicians, industry leaders and innovators to explore cutting-edge advancements in computing, intelligent systems and decision-making methodologies."
      />

      {/* MISSION / VISION / FOCUS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-6">
          <FadeUp className="md:col-span-1 flex flex-col gap-6">
            <div className="card-lift bg-surface-light rounded-xl2 p-6 text-center">
              <Target className="mx-auto text-brand-blue mb-3" size={26} />
              <h3 className="font-semibold text-navy-900 mb-2">Our Mission</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                To advance innovation and intelligent decision-making by fostering
                interdisciplinary research, collaboration and knowledge exchange for global
                impact.
              </p>
            </div>
            <div className="card-lift bg-surface-light rounded-xl2 p-6 text-center">
              <Eye className="mx-auto text-brand-blue mb-3" size={26} />
              <h3 className="font-semibold text-navy-900 mb-2">Our Vision</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                To become a leading global conference series that inspires innovation and shapes
                the future of intelligent decision systems.
              </p>
            </div>
          </FadeUp>

          <div className="md:col-span-2">
            <SectionTitle eyebrow="Core Focus Areas" align="left" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FOCUS_AREAS.map((f, i) => (
                <FadeUp key={f.title} delay={i * 0.06}>
                  <div className="card-lift bg-white border border-slate-100 rounded-xl2 p-5 text-center h-full">
                    <f.icon className={`mx-auto mb-3 ${f.color}`} size={26} />
                    <h4 className="font-semibold text-sm text-navy-900 mb-1">{f.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONFERENCE TRACKS */}
      <section className="bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Conference Tracks"
            description="IDEAX 2026 invites high-quality research papers across a wide range of topics, including but not limited to:"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONFERENCE_TRACKS.map((t, i) => (
              <FadeUp key={t.num} delay={i * 0.06}>
                <div className="card-lift relative bg-white rounded-xl2 shadow-card p-6 h-full">
                  <t.icon className="text-brand-blue mb-3" size={26} />
                  <h4 className="font-semibold text-navy-900 mb-2 leading-snug">{t.title}</h4>
                  <ul className="text-sm text-slate-500 space-y-1">
                    {t.items.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                  <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-2 border-brand-blue text-brand-blue text-xs font-bold flex items-center justify-center">
                    {t.num}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTICIPATE + STATS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-6">
          <FadeUp className="bg-surface-light rounded-xl2 p-7">
            <h3 className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
              Why Participate?
            </h3>
            <ul className="space-y-3">
              {WHY_PARTICIPATE.map((w) => (
                <li key={w} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xs">
                    ✓
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.1} className="bg-navy-900 rounded-xl2 p-7 relative overflow-hidden">
            <div className="absolute inset-0 bg-navy-radial pointer-events-none" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 relative z-10">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon className="mx-auto mb-2 text-brand-sky" size={22} />
                  <div className="text-xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHO SHOULD ATTEND + IMPORTANT DATES */}
      <section className="bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <SectionTitle eyebrow="Who Should Attend?" align="left" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {ATTENDEES.map((a, i) => (
                <FadeUp key={a.label} delay={i * 0.06}>
                  <div className="flex flex-col items-center text-center gap-3">
                    <span className="w-16 h-16 rounded-full bg-white shadow-card flex items-center justify-center">
                      <a.icon size={24} className="text-brand-blue" />
                    </span>
                    <p className="text-xs text-slate-600 font-medium leading-tight">{a.label}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.1} className="bg-white rounded-xl2 shadow-card p-6">
            <h3 className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
              Important Dates
            </h3>
            <ul className="space-y-3">
              {DATES.map((d) => (
                <li key={d.label} className="flex items-start gap-2.5 text-sm">
                  <Calendar size={15} className="text-brand-blue mt-0.5 shrink-0" />
                  <span className="text-slate-600 flex-1">{d.label}</span>
                  <span className="font-medium text-navy-900 whitespace-nowrap text-xs">
                    {d.date}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* PUBLICATION & INDEXING */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle eyebrow="Publication & Indexing" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {PUBLICATION.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.06}>
                <div className="card-lift text-center p-5 rounded-xl2 border border-slate-100 h-full">
                  <p.icon className="mx-auto mb-3 text-brand-blue" size={26} />
                  <h4 className="font-semibold text-sm text-navy-900 mb-1">{p.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <Trophy className="text-gold-500 shrink-0" size={34} />
            <div>
              <h4 className="font-bold text-lg">Be Part of IDEAX 2026</h4>
              <p className="text-white/70 text-sm max-w-md">
                Join us in shaping the future of intelligent systems and data-driven decisions
                that create a better and smarter world.
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
