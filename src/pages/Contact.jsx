import { useState } from "react";
import {
  Calendar,
  MapPin,
  Laptop,
  Mail,
  Phone,
  Globe2,
  Share2,
  ChevronDown,
  Send,
  Navigation,
} from "lucide-react";
import { Linkedin, Twitter, Facebook, Youtube } from "../components/SocialIcons";
import Button from "../components/Button";
import FadeUp from "../components/FadeUp";
import PageHero from "../components/PageHero";
import contactHero from "../assets/hero/contact-hero.png";

const META = [
  { icon: Calendar, title: "10 – 12", subtitle: "December, 2026" },
  { icon: MapPin, title: "Singapore,", subtitle: "Asia" },
  { icon: Laptop, title: "Hybrid", subtitle: "(In-person & Online)" },
];

const CONTACT_CARDS = [
  {
    icon: MapPin,
    color: "bg-blue-100 text-blue-600",
    title: "Conference Secretariat",
    lines: ["IDEAX 2026 Conference Office", "123 Innovation Drive, #05-01", "Singapore 138602"],
  },
  {
    icon: Mail,
    color: "bg-orange-100 text-orange-600",
    title: "Email Us",
    lines: ["General Inquiries", "info@ideax-conference.org", "Registration Support", "registration@ideax-conference.org"],
  },
  {
    icon: Phone,
    color: "bg-green-100 text-green-600",
    title: "Call Us",
    lines: ["+65 9123 4567", "(Mon – Fri, 9:00 AM – 6:00 PM SGT)"],
  },
  {
    icon: Globe2,
    color: "bg-purple-100 text-purple-600",
    title: "Website",
    lines: ["www.ideax-conference.org"],
  },
];

const FAQS = [
  "How can I register for IDEAX 2026?",
  "What is the mode of the conference?",
  "Will the sessions be recorded?",
  "Can I present my paper virtually?",
  "What is included in the registration?",
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <PageHero
        variant="dark"
        breadcrumb="Contact Us"
        title="We're Here"
        titleAccent="to Help You"
        image={contactHero}
        description="Have a question or need assistance? Reach out to our team and we'll get back to you as soon as possible."
        meta={META}
      />

      {/* CONTACT INFO + FORM */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <FadeUp className="lg:col-span-2">
            <span className="text-brand-blue text-xs font-bold tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-2xl font-bold text-navy-900 mt-2 mb-1">Contact Information</h2>
            <div className="h-1 w-12 rounded bg-gradient-to-r from-brand-blue to-gold-500 mb-3" />
            <p className="text-sm text-slate-500 mb-6">
              Our team is ready to assist you with any inquiries related to IDEAX 2026.
            </p>

            <div className="space-y-4">
              {CONTACT_CARDS.map((c) => (
                <div
                  key={c.title}
                  className="card-lift flex items-start gap-4 border border-slate-100 rounded-xl2 shadow-card p-4"
                >
                  <span className={`w-11 h-11 rounded-full ${c.color} flex items-center justify-center shrink-0`}>
                    <c.icon size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">{c.title}</h4>
                    {c.lines.map((l, i) => (
                      <p key={i} className="text-xs text-slate-500 leading-relaxed">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4 border border-slate-100 rounded-xl2 shadow-card p-4">
                <span className="w-11 h-11 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Share2 size={18} />
                </span>
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm mb-2">Follow Us</h4>
                  <div className="flex items-center gap-2">
                    {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-8 h-8 rounded-full bg-surface-muted flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors hover:scale-110"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.1} className="lg:col-span-3 bg-surface-light rounded-xl2 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-1">Send Us a Message</h3>
            <p className="text-sm text-slate-500 mb-6">
              Fill in the form below and we will get back to you shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="input-glow w-full px-4 py-3 border border-slate-200 rounded-lg text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className="input-glow w-full px-4 py-3 border border-slate-200 rounded-lg text-sm bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="input-glow w-full px-4 py-3 border border-slate-200 rounded-lg text-sm bg-white text-slate-500"
                >
                  <option value="">Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Registration Support</option>
                  <option>Paper Submission</option>
                  <option>Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Type your message here..."
                  className="input-glow w-full px-4 py-3 border border-slate-200 rounded-lg text-sm bg-white resize-none"
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-slate-500">
                <input type="checkbox" required className="mt-0.5" />I agree to the{" "}
                <a href="#" className="text-brand-blue underline">
                  privacy policy
                </a>{" "}
                and consent to the processing of my data.
              </label>

              <Button type="submit" variant="blue" className="w-full justify-center sm:w-auto">
                Send Message
              </Button>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* MAP + FAQ */}
      <section className="bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8">
          <FadeUp className="bg-white rounded-xl2 shadow-card p-6">
            <h3 className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
              Find Us
            </h3>
            <div className="rounded-xl overflow-hidden h-56 relative bg-blue-50 flex items-center justify-center">
              <iframe
                title="Singapore Map"
                className="w-full h-full"
                loading="lazy"
                src="https://maps.google.com/maps?q=Singapore&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <h4 className="font-semibold text-navy-900 text-sm">Singapore, Asia</h4>
              </div>
              <button className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:underline">
                <Navigation size={13} /> Get Directions
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="bg-white rounded-xl2 shadow-card p-6">
            <h3 className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              {FAQS.map((f, i) => (
                <button
                  key={f}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left py-3 px-1 border-b border-slate-100 text-sm font-medium text-navy-900 hover:text-brand-blue transition-colors"
                >
                  {f}
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
            <button className="text-sm font-semibold text-brand-blue mt-4 hover:underline">
              View All FAQs →
            </button>
          </FadeUp>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gradient-to-r from-brand-indigo to-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-white">
            <span className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <Send size={18} />
            </span>
            <div>
              <h4 className="font-bold text-lg">Stay Connected. Stay Informed.</h4>
              <p className="text-white/80 text-sm">
                Subscribe to our newsletter and never miss an update about IDEAX 2026.
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full sm:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-glow flex-1 sm:w-56 px-4 py-3 rounded-lg text-sm border-0"
            />
            <Button variant="gold" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
