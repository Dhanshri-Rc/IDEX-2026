import { Mic2, Users2, Globe2, Briefcase, UserPlus } from "lucide-react";
import { Linkedin } from "../components/SocialIcons";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FadeUp from "../components/FadeUp";
import PageHero from "../components/PageHero";
import Avatar from "../components/Avatar";
import speakerHero from "../assets/hero/speaker-hero.png";

const STATS = [
  { icon: Mic2, value: "50+", label: "Keynote Speakers" },
  { icon: Users2, value: "150+", label: "Expert Speakers" },
  { icon: Globe2, value: "30+", label: "Countries Represented" },
  { icon: Briefcase, value: "Diverse", label: "Industries & Domains" },
];

const SPEAKERS = [
  {
    name: "Prof. Michael Anderson",
    uni: "Stanford University, USA",
    tag: "KEYNOTE SPEAKER",
    tagColor: "bg-blue-50 text-blue-600",
    bar: "bg-blue-500",
  },
  {
    name: "Dr. Sofia Martinez",
    uni: "Massachusetts Institute of Technology, USA",
    tag: "KEYNOTE SPEAKER",
    tagColor: "bg-purple-50 text-purple-600",
    bar: "bg-purple-500",
  },
  {
    name: "Prof. Li Wei",
    uni: "National University of Singapore, Singapore",
    tag: "KEYNOTE SPEAKER",
    tagColor: "bg-green-50 text-green-600",
    bar: "bg-green-500",
  },
  {
    name: "Dr. Arjun Kumar",
    uni: "Microsoft Research, India",
    tag: "INVITED SPEAKER",
    tagColor: "bg-orange-50 text-orange-600",
    bar: "bg-orange-500",
  },
  {
    name: "Dr. Emma Johnson",
    uni: "University of Oxford, United Kingdom",
    tag: "INVITED SPEAKER",
    tagColor: "bg-teal-50 text-teal-600",
    bar: "bg-teal-500",
  },
  {
    name: "Dr. Marco Rossi",
    uni: "Politecnico di Milano, Italy",
    tag: "INVITED SPEAKER",
    tagColor: "bg-rose-50 text-rose-600",
    bar: "bg-rose-500",
  },
];

export default function Speakers() {
  return (
    <div>
      <PageHero
        variant="dark"
        breadcrumb="Speakers"
        title="Our"
        titleAccent="Speakers"
        image={speakerHero}
        description="Learn from visionary leaders, renowned researchers and industry experts who are shaping the future of innovation, decision engineering and artificial intelligence."
      />

      {/* STATS STRIP */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <FadeUp>
            <div className="bg-white shadow-card rounded-xl2 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-3 justify-center sm:justify-start">
                  <span className="w-11 h-11 rounded-full bg-surface-muted flex items-center justify-center shrink-0">
                    <s.icon size={20} className="text-brand-blue" />
                  </span>
                  <div>
                    <div className="font-bold text-navy-900 text-lg">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FEATURED SPEAKERS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Featured Speakers"
            title="Meet Our Distinguished Speakers"
            description="A distinguished lineup of thought leaders and innovators from academia, industry and government who will share their insights and experiences."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKERS.map((sp, i) => (
              <FadeUp key={sp.name} delay={i * 0.06}>
                <div className="card-lift bg-white border border-slate-100 rounded-xl2 shadow-card p-6 flex items-start gap-4">
                  <Avatar
                    name={sp.name}
                    size={64}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="flex-1">
                    <span
                      className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-2 ${sp.tagColor}`}
                    >
                      {sp.tag}
                    </span>
                    <h4 className="font-semibold text-navy-900 leading-snug">{sp.name}</h4>
                    <div className={`h-0.5 w-6 ${sp.bar} rounded my-1.5`} />
                    <p className="text-xs text-slate-500">{sp.uni}</p>
                  </div>
                  <a
                    href="#"
                    className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center shrink-0 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-colors"
                  >
                    <Linkedin size={13} />
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="blueOutline">View All Speakers</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1a1140] to-[#2c1a6b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4 text-white">
            <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <UserPlus size={20} />
            </span>
            <div>
              <h4 className="font-bold text-lg">Be Inspired. Gain Insights. Shape the Future.</h4>
              <p className="text-white/70 text-sm max-w-md">
                Join us to hear from global experts and innovators who are driving change and
                creating impact.
              </p>
            </div>
          </div>
          <Button as={Link} to="/registration" variant="white" className="shrink-0">
            Register Now
          </Button>
        </div>
      </section>
    </div>
  );
}
