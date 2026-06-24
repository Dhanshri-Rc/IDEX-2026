import { useState } from "react";
import { Users2, ShieldCheck, UserCog, Network, ChevronRight, UserPlus } from "lucide-react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FadeUp from "../components/FadeUp";
import PageHero from "../components/PageHero";
import Avatar from "../components/Avatar";
import committeeHero from "../assets/hero/committee-hero.png";

const STEERING = [
  { name: "Prof. David Tan", role: "Chair", org: "National University of Singapore, Singapore" },
  { name: "Prof. Elena Kovacs", role: "Co-Chair", org: "Technical University of Munich, Germany" },
  { name: "Prof. Amit Sharma", role: "Co-Chair", org: "Indian Institute of Technology, India" },
  { name: "Prof. Marco Rossi", role: "Co-Chair", org: "Politecnico di Milano, Italy" },
  { name: "Prof. Mei Lin", role: "Co-Chair", org: "Tsinghua University, China" },
];

const TECHNICAL = [
  { name: "Prof. John Doe", org: "University of California, USA" },
  { name: "Prof. Satoshi Nakamura", org: "The University of Tokyo, Japan" },
  { name: "Prof. Priya Nair", org: "IIT Bombay, India" },
];

const ORGANIZING = [
  { name: "Dr. Wei Huang", org: "Conference Director" },
  { name: "Dr. Anita Verma", org: "Program Coordinator" },
  { name: "Mr. Ryan Lee", org: "Operations Manager" },
];

function PersonCard({ name, role, sub, bar = "bg-brand-blue" }) {
  return (
    <div className="card-lift bg-white border border-slate-100 rounded-xl2 shadow-card p-5 text-center shrink-0 w-48">
      <Avatar
        name={name}
        size={64}
        className="mx-auto mb-3 transition-transform duration-300 hover:scale-105"
      />
      <h4 className="font-semibold text-sm text-navy-900">{name}</h4>
      <div className={`h-0.5 w-6 mx-auto rounded my-1.5 ${bar}`} />
      {role && <p className="text-xs font-semibold text-brand-blue mb-0.5">{role}</p>}
      <p className="text-xs text-slate-500 leading-snug">{sub}</p>
    </div>
  );
}

export default function Committee() {
  const [tab, setTab] = useState("technical");

  return (
    <div>
      <PageHero
        variant="light"
        breadcrumb="Committee"
        title="Our"
        titleAccent="Committee"
        image={committeeHero}
        description="A dedicated team of experts and professionals working together to make IDEAX 2026 a remarkable success."
      />

      {/* STEERING COMMITTEE */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Steering Committee"
            title="Guiding Vision. Driving Impact."
            description="Our Steering Committee provides strategic direction and vision to ensure the highest quality and impact of the conference."
          />
          <div className="flex flex-wrap justify-center gap-6">
            {STEERING.map((m, i) => (
              <FadeUp key={m.name} delay={i * 0.06}>
                <PersonCard name={m.name} role={m.role} sub={m.org} />
              </FadeUp>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="blueOutline">View Full Steering Committee</Button>
          </div>
        </div>
      </section>

      {/* TECHNICAL + ORGANIZING TABS */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Technical Program Committee */}
          <FadeUp className="bg-blue-50/60 rounded-xl2 p-6 flex flex-col lg:flex-row items-center gap-6">
            <div className="flex items-start gap-4 lg:w-72 shrink-0">
              <span className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center shrink-0">
                <Users2 size={22} className="text-brand-blue" />
              </span>
              <div>
                <h4 className="font-semibold text-navy-900">Technical Program Committee</h4>
                <p className="text-xs text-slate-500 mt-1 mb-3">
                  Responsible for the review of submissions and curating a high-quality technical
                  program.
                </p>
                <Button variant="blueOutline" className="!px-4 !py-2 text-xs">
                  View All Members
                </Button>
              </div>
            </div>
            <div className="flex gap-5 overflow-x-auto flex-1 w-full lg:justify-end">
              {TECHNICAL.map((m) => (
                <PersonCard key={m.name} name={m.name} sub={m.org} />
              ))}
              <button className="hidden sm:flex w-10 h-10 rounded-full bg-white shadow-card items-center justify-center self-center shrink-0 hover:bg-brand-blue hover:text-white transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </FadeUp>

          {/* Organizing Committee */}
          <FadeUp delay={0.08} className="bg-orange-50/60 rounded-xl2 p-6 flex flex-col lg:flex-row items-center gap-6">
            <div className="flex items-start gap-4 lg:w-72 shrink-0">
              <span className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center shrink-0">
                <UserCog size={22} className="text-orange-500" />
              </span>
              <div>
                <h4 className="font-semibold text-navy-900">Organizing Committee</h4>
                <p className="text-xs text-slate-500 mt-1 mb-3">
                  Managing the planning, coordination and execution of IDEAX 2026.
                </p>
                <Button variant="orange" className="!px-4 !py-2 text-xs">
                  View All Members
                </Button>
              </div>
            </div>
            <div className="flex gap-5 overflow-x-auto flex-1 w-full lg:justify-end">
              {ORGANIZING.map((m) => (
                <PersonCard key={m.name} name={m.name} sub={m.org} bar="bg-orange-500" />
              ))}
              <button className="hidden sm:flex w-10 h-10 rounded-full bg-white shadow-card items-center justify-center self-center shrink-0 hover:bg-orange-500 hover:text-white transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <UserPlus size={20} />
            </span>
            <div>
              <h4 className="font-bold text-lg">Be Part of the Team</h4>
              <p className="text-white/70 text-sm max-w-md">
                We are always looking for enthusiastic volunteers to help make IDEAX 2026 a
                success.
              </p>
            </div>
          </div>
          <Button variant="white" className="shrink-0">
            Join as Volunteer
          </Button>
        </div>
      </section>
    </div>
  );
}
