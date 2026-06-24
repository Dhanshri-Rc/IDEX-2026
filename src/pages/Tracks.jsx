import {
  BrainCircuit,
  LineChart,
  Settings2,
  Cloud,
  Cpu,
  Users2,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FadeUp from "../components/FadeUp";
import PageHero from "../components/PageHero";
import innerHeroDark from "../assets/hero/inner-hero-dark.png";

const TRACKS = [
  {
    num: "01",
    icon: BrainCircuit,
    title: "Artificial Intelligence & Machine Learning",
    color: "bg-pink-500",
    textColor: "text-pink-600",
    items: [
      "Deep Learning",
      "Machine Learning Algorithms",
      "Generative AI",
      "Explainable AI",
      "Neural Networks & Architectures",
      "AI Applications",
    ],
  },
  {
    num: "02",
    icon: LineChart,
    title: "Data Science & Decision Analytics",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    items: [
      "Predictive Analytics",
      "Data Mining",
      "Big Data Engineering",
      "Business Intelligence",
      "Data Visualization",
      "Decision Support Systems",
    ],
  },
  {
    num: "03",
    icon: Settings2,
    title: "Optimization & Decision Engineering",
    color: "bg-green-500",
    textColor: "text-green-600",
    items: [
      "Operations Research",
      "Optimization Algorithms",
      "Multi-criteria Decision Making",
      "Simulation & Modeling",
      "Heuristic & Metaheuristic Methods",
      "Decision Support Systems",
    ],
  },
  {
    num: "04",
    icon: Cloud,
    title: "Emerging Computing Technologies",
    color: "bg-purple-500",
    textColor: "text-purple-600",
    items: [
      "Cloud & Edge Computing",
      "Internet of Things (IoT)",
      "Blockchain Technology",
      "Cybersecurity",
      "Quantum Computing",
      "Digital Twins",
    ],
  },
  {
    num: "05",
    icon: Cpu,
    title: "Intelligent Systems Applications",
    color: "bg-orange-500",
    textColor: "text-orange-600",
    items: [
      "Healthcare AI",
      "Smart Cities",
      "Finance & FinTech",
      "Smart Manufacturing",
      "Industry 4.0 / 5.0",
      "Agriculture Intelligence",
    ],
  },
  {
    num: "06",
    icon: Users2,
    title: "Socio-Technical & Human-Centric AI",
    color: "bg-teal-500",
    textColor: "text-teal-600",
    items: [
      "Human-AI Interaction",
      "Ethics & Responsible AI",
      "Policy & Governance",
      "Education & Training",
      "Sustainable Development",
      "Social Impact Computing",
    ],
  },
];

export default function Tracks() {
  return (
    <div>
      <PageHero
        variant="dark"
        breadcrumb="Tracks"
        title="Conference"
        titleAccent="Tracks"
        image={innerHeroDark}
        description="IDEAX 2026 invites high-quality research papers across a wide range of cutting-edge topics."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Tracks Overview"
            title="Explore. Innovate. Impact."
            description="IDEAX 2026 covers a wide spectrum of themes in Innovation, Decision Engineering and Artificial Intelligence to foster collaboration and drive meaningful impact."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS.map((t, i) => (
              <FadeUp key={t.num} delay={i * 0.06}>
                <div className="card-lift bg-white border border-slate-100 rounded-xl2 shadow-card p-6 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-full ${t.color} text-white flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110`}
                  >
                    <t.icon size={22} />
                  </div>
                  <span className={`font-bold text-sm ${t.textColor}`}>{t.num}</span>
                  <h3 className="font-semibold text-navy-900 mt-1 mb-3 leading-snug">
                    {t.title}
                  </h3>
                  <div className={`h-0.5 w-8 ${t.color} rounded mb-4`} />
                  <ul className="text-sm text-slate-500 space-y-1.5 flex-1">
                    {t.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${t.color}`} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`text-sm font-semibold mt-5 inline-flex items-center gap-1.5 ${t.textColor} hover:gap-2.5 transition-all`}
                  >
                    View Track Details →
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-12">
            <div className="relative overflow-hidden bg-surface-light rounded-xl2 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
                  <Send size={20} />
                </span>
                <div>
                  <h4 className="font-bold text-lg text-navy-900">Don't see your topic?</h4>
                  <p className="text-slate-500 text-sm">
                    We welcome interdisciplinary submissions that drive innovation and create
                    impact across domains.
                  </p>
                </div>
              </div>
              <Button as={Link} to="/registration" variant="navy" className="shrink-0">
                Submit Your Paper
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
