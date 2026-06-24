import {
  Calendar,
  MapPin,
  Laptop,
  Monitor,
  Users,
  GraduationCap,
  User,
  Briefcase,
  Check,
  Gift,
  Award,
  FileCheck2,
  FileText,
  Share2,
  Megaphone,
  MessageCircleQuestion,
  Mail,
  Phone,
  CalendarCheck2,
} from "lucide-react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FadeUp from "../components/FadeUp";
import PageHero from "../components/PageHero";
import registrationHero from "../assets/hero/registration-hero.png";

const META = [
  { icon: Calendar, title: "10 – 12", subtitle: "December, 2026" },
  { icon: MapPin, title: "Singapore,", subtitle: "Asia" },
  { icon: Laptop, title: "Hybrid", subtitle: "(In-person & Online)" },
];

const ONLINE = [
  {
    icon: GraduationCap,
    color: "bg-blue-500",
    title: "Student Registration",
    price: "₹2,000",
    features: [
      "Online Virtual Presentation",
      "Conference Kit (Digital)",
      "Participation Certificate",
      "Peer Review & Publication",
      "Access to All Sessions",
      "E-Program Book",
    ],
  },
  {
    icon: User,
    color: "bg-green-500",
    title: "Faculty / Academician",
    price: "₹3,000",
    features: [
      "Online Virtual Presentation",
      "Conference Kit (Digital)",
      "Participation Certificate",
      "Peer Review & Publication",
      "Access to All Sessions",
      "E-Program Book",
    ],
  },
  {
    icon: Briefcase,
    color: "bg-purple-500",
    title: "Industry Professionals",
    price: "₹3,500",
    features: [
      "Online Virtual Presentation",
      "Conference Kit (Digital)",
      "Participation Certificate",
      "Peer Review & Publication",
      "Access to All Sessions",
      "E-Program Book",
    ],
  },
];

const OFFLINE = [
  {
    icon: GraduationCap,
    color: "bg-orange-500",
    title: "Student Registration",
    price: "₹3,500",
    features: [
      "Offline Presentation",
      "Conference Kit (Physical)",
      "Participation Certificate",
      "Peer Review & Publication",
      "Access to All Sessions",
      "Lunch & Refreshments",
      "E-Program Book",
    ],
  },
  {
    icon: User,
    color: "bg-orange-500",
    title: "Faculty / Academician",
    price: "₹4,000",
    features: [
      "Offline Presentation",
      "Conference Kit (Physical)",
      "Participation Certificate",
      "Peer Review & Publication",
      "Access to All Sessions",
      "Lunch & Refreshments",
      "E-Program Book",
    ],
  },
  {
    icon: Briefcase,
    color: "bg-red-500",
    title: "Industry Professionals",
    price: "₹5,000",
    features: [
      "Offline Presentation",
      "Conference Kit (Physical)",
      "Participation Certificate",
      "Peer Review & Publication",
      "Access to All Sessions",
      "Lunch & Refreshments",
      "E-Program Book",
    ],
  },
];

const INCLUDED = [
  { icon: Gift, title: "Conference Kit", desc: "Exclusive conference kit with essential materials and souvenirs." },
  { icon: Award, title: "Certificate", desc: "E-certificate of participation for all registered delegates." },
  { icon: FileCheck2, title: "Peer Review", desc: "All accepted papers will go through a rigorous peer review." },
  { icon: FileText, title: "Publication", desc: "Accepted & presented papers will be published in Springer / Scopus Indexed Proceedings." },
  { icon: Share2, title: "Full Access", desc: "Access to all keynote sessions, technical sessions & workshops." },
  { icon: Users, title: "Networking", desc: "Connect with global experts and fellow participants." },
];

function PriceCard({ plan, accentBorder }) {
  return (
    <FadeUp>
      <div className={`card-lift bg-white rounded-xl2 shadow-card border ${accentBorder} p-6 h-full flex flex-col`}>
        <span
          className={`w-12 h-12 rounded-full ${plan.color} text-white flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110`}
        >
          <plan.icon size={20} />
        </span>
        <h4 className="font-semibold text-navy-900 mb-1">{plan.title}</h4>
        <div className="text-2xl font-bold text-navy-900 mb-4">{plan.price}</div>
        <ul className="space-y-2 text-sm text-slate-600 flex-1 mb-5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check size={15} className="text-green-500 mt-0.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <Button variant="blueOutline" className="w-full justify-center">
          Register Now
        </Button>
      </div>
    </FadeUp>
  );
}

export default function Registration() {
  return (
    <div>
      <PageHero
        variant="dark"
        breadcrumb="Registration"
        title="Register for"
        titleAccent="IDEAX 2026"
        image={registrationHero}
        description="Be a part of the global platform bringing together innovators, researchers and industry leaders to shape the future of AI and Decision Engineering."
        meta={META}
      />

      {/* PRICING */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            eyebrow="Choose Your Registration Type"
            title="Registration Categories & Fees"
            description="Choose the registration type and category that best fits your participation. All registrations include conference kit, certificate and peer-reviewed publication."
          />

          {/* Online */}
          <div className="rounded-xl2 overflow-hidden border border-slate-100 shadow-card mb-10">
            <div className="bg-blue-600 text-white flex items-center justify-between px-5 py-3">
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Monitor size={16} /> ONLINE VIRTUAL PRESENTATION
              </span>
              <span className="text-xs bg-white/15 px-3 py-1 rounded-full">
                Access from Anywhere
              </span>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 p-6 bg-blue-50/30">
              {ONLINE.map((p) => (
                <PriceCard key={p.title} plan={p} accentBorder="border-blue-100" />
              ))}
            </div>
          </div>

          {/* Offline */}
          <div className="rounded-xl2 overflow-hidden border border-slate-100 shadow-card">
            <div className="bg-orange-500 text-white flex items-center justify-between px-5 py-3">
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Users size={16} /> OFFLINE VIRTUAL PRESENTATION
              </span>
              <span className="text-xs bg-white/15 px-3 py-1 rounded-full">
                On-site Participation
              </span>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 p-6 bg-orange-50/30">
              {OFFLINE.map((p) => (
                <PriceCard key={p.title} plan={p} accentBorder="border-orange-100" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle eyebrow="What's Included in Every Registration" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {INCLUDED.map((it, i) => (
              <FadeUp key={it.title} delay={i * 0.05}>
                <div className="text-center">
                  <span className="w-14 h-14 rounded-full bg-white shadow-card flex items-center justify-center mx-auto mb-3">
                    <it.icon size={22} className="text-brand-blue" />
                  </span>
                  <h5 className="font-semibold text-sm text-navy-900 mb-1">{it.title}</h5>
                  <p className="text-xs text-slate-500 leading-snug">{it.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* NOTES + QUESTIONS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-6">
          <FadeUp className="bg-surface-light rounded-xl2 p-6 flex gap-4">
            <Megaphone className="text-brand-blue shrink-0" size={26} />
            <div>
              <h4 className="font-semibold text-navy-900 mb-3">Important Notes</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Registration is mandatory for paper presentation.</li>
                <li>• Registration once made is non-transferable.</li>
                <li>• No refund will be provided for cancellations.</li>
                <li>• Group registration available for 5 or more participants.</li>
                <li>• Early bird discounts available till 31 August, 2026.</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="bg-surface-light rounded-xl2 p-6 flex gap-4">
            <MessageCircleQuestion className="text-brand-blue shrink-0" size={26} />
            <div>
              <h4 className="font-semibold text-navy-900 mb-3">Have a Question?</h4>
              <p className="text-sm text-slate-600 mb-3">
                Our team is here to help. Reach out to us for any registration related queries.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-brand-blue" /> registration@ideax-conference.org
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-brand-blue" /> +65 9123 4567
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <CalendarCheck2 size={20} />
            </span>
            <div>
              <h4 className="font-bold text-lg">Secure Your Spot Today!</h4>
              <p className="text-white/70 text-sm max-w-md">
                Don't miss this opportunity to showcase your research, learn from experts and
                expand your network.
              </p>
            </div>
          </div>
          <Button variant="gold" className="shrink-0">
            Register Now
          </Button>
        </div>
      </section>
    </div>
  );
}
