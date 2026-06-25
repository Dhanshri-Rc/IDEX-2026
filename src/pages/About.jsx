// import React from "react";
// import {
//   Brain,
//   Eye,
//   Target,
//   Network,
//   Handshake,
//   Globe2,
//   BarChart3,
//   Cpu,
//   Settings,
//   Cloud,
//   Cross,
//   Users,
//   CalendarDays,
//   Trophy,
//   Send,
//   BookOpen,
//   FileText,
//   Award,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Presentation,
//   FileCheck,
//   Lightbulb,
// } from "lucide-react";

// import heroBg from "../assets/hero/AboutBg.png";
// import ctaBg from "../assets/hero/AboutCta.png";
// import whyBg from "../assets/hero/AboutPract.png";

// const tracks = [
//   {
//     icon: Brain,
//     title: "Artificial Intelligence & Machine Learning",
//     color: "#0B63FF",
//     items: [
//       "Deep Learning",
//       "Generative AI",
//       "Explainable AI",
//       "Neural Computing",
//     ],
//   },
//   {
//     icon: BarChart3,
//     title: "Data Science & Decision Analytics",
//     color: "#13BFD6",
//     items: [
//       "Predictive Analytics",
//       "Data Mining",
//       "Big Data Engineering",
//       "Business Intelligence",
//     ],
//   },
//   {
//     icon: Settings,
//     title: "Optimization & Decision Engineering",
//     color: "#7146FF",
//     items: [
//       "Operations Research",
//       "Decision Support Systems",
//       "Multi-criteria Decision Making",
//       "Simulation & Modeling",
//     ],
//   },
//   {
//     icon: Cloud,
//     title: "Emerging Computing Technologies",
//     color: "#FF9900",
//     items: [
//       "Cloud & Edge Computing",
//       "Internet of Things (IoT)",
//       "Blockchain",
//       "Cybersecurity",
//     ],
//   },
//   {
//     icon: Cross,
//     title: "Intelligent Systems Applications",
//     color: "#28B64B",
//     items: [
//       "Healthcare AI",
//       "Finance & FinTech",
//       "Smart Cities",
//       "Industry 4.0/5.0",
//     ],
//   },
//   {
//     icon: Users,
//     title: "Socio-Technical & Human-Centric AI",
//     color: "#236CFF",
//     items: [
//       "Human-AI Interaction",
//       "Ethics & Responsible AI",
//       "Policy & Governance",
//       "Education & Training",
//     ],
//   },
// ];

// const focusAreas = [
//   {
//     icon: Brain,
//     title: "Innovation",
//     desc: "Encouraging novel ideas and creative solutions",
//     color: "#0B63FF",
//   },
//   {
//     icon: Network,
//     title: "Decision Engineering",
//     desc: "Modeling and optimizing decision processes",
//     color: "#12AFC2",
//   },
//   {
//     icon: Cpu,
//     title: "Artificial Intelligence",
//     desc: "Intelligent algorithms and adaptive systems",
//     color: "#6F42FF",
//   },
//   {
//     icon: Handshake,
//     title: "Collaboration",
//     desc: "Connecting academia, industry and institutions",
//     color: "#FF9900",
//   },
//   {
//     icon: Globe2,
//     title: "Sustainability",
//     desc: "Technology-enabled sustainable and ethical solutions",
//     color: "#27B43E",
//   },
// ];

// const whyItems = [
//   {
//     text: "Present your research to a global audience",
//     icon: Presentation,
//     bg: "bg-[#0B63FF]",
//   },
//   {
//     text: "Learn from world renowned experts",
//     icon: BookOpen,
//     bg: "bg-[#8B5CF6]",
//   },
//   {
//     text: "Network with global research community",
//     icon: Users,
//     bg: "bg-[#14B8A6]",
//   },
//   {
//     text: "Explore collaborations and partnerships",
//     icon: Handshake,
//     bg: "bg-[#F43F5E]",
//   },
//   {
//     text: "Publish in reputed indexed proceedings",
//     icon: FileCheck,
//     bg: "bg-[#F59E0B]",
//   },
//   {
//     text: "Drive innovation for societal impact",
//     icon: Lightbulb,
//     bg: "bg-[#22C55E]",
//   },
// ];

// const dates = [
//   ["Paper Submission Deadline", "30 June, 2026"],
//   ["Notification of Acceptance", "31 August, 2026"],
//   ["Camera-Ready Submission", "30 September, 2026"],
//   ["Early Bird Registration", "15 October, 2026"],
//   ["Conference Dates", "10 – 12 December, 2026"],
// ];

// export default function AboutIdeax2026() {
//   return (
//     <div className="min-h-screen bg-white text-[#07113F] font-sans overflow-hidden">
//       {/* Hero */}
//       <section
//         className="relative min-h-[670px] bg-[#020b22] bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       >
//         <div className="absolute inset-0 bg-white/20 lg:bg-transparent" />
//         <div className="relative max-w-[1420px] mx-auto px-5 lg:px-16 pt-12 lg:pt-20">
//           <div className="max-w-[520px]">
//             <h2 className="font-[600] text-[#06134A] leading-none">
//               <span className="block text-[34px] sm:text-[42px] lg:text-[44px]">
//                 About the
//               </span>

//               <span className="block mt-2 text-[44px] sm:text-[52px] lg:text-[56px] font-[600] tracking-[-2px]">
//                 IDEAX 2026
//               </span>
//             </h2>

//             <h3 className="mt-5 text-[16px] lg:text-[18px] font-semibold leading-snug">
//               International Conference on{" "}
//               <span className="text-[#0B63FF]">
//                 Innovation, Decision Engineering
//               </span>{" "}
//               and{" "}
//               <span className="text-[#0B63FF]">Artificial Intelligence</span>
//             </h3>

//             <div className="mt-7 w-[90px] h-[5px] bg-gradient-to-r from-[#0B63FF] to-[#FFAA00] rounded-full" />

//             <p className="mt-8 w-[350px] text-[14px] lg:text-[15px] leading-6 font-semibold text-[#07113F]/90">
//               IDEAX 2026 is a premier international platform that brings
//               together researchers, academicians, industry leaders and
//               innovators to explore cutting-edge advancements in computing,
//               intelligent systems and decision-making methodologies.
//             </p>
//           </div>
//         </div>
//       </section>

//       <main className="max-w-[1420px] mx-auto px-4 lg:px-16">
//         {/* Mission Vision Focus */}
//         <section className="relative z-10 grid grid-cols-1 lg:grid-cols-[250px_250px_1fr] gap-4 -mt-4">
//           {[
//             {
//               title: "OUR MISSION",
//               icon: Target,
//               desc: "To advance innovation and intelligent decision-making by fostering interdisciplinary research, collaboration and knowledge exchange for global impact.",
//             },
//             {
//               title: "OUR VISION",
//               icon: Eye,
//               desc: "To become a leading global conference series that inspires innovation and shapes the future of intelligent decision systems.",
//             },
//           ].map((card) => (
//             <div
//               key={card.title}
//               className="bg-white rounded-2xl p-8 text-center shadow-[0_8px_25px_rgba(0,40,120,0.12)] hover:-translate-y-2 transition duration-500"
//             >
//               <h4 className="font-[600] text-[#07113F]">{card.title}</h4>
//               <card.icon className="mx-auto my-8 w-14 h-14 text-[#0B63FF]" />
//               <p className="text-[14px] leading-7 font-semibold text-[#07113F]/80">
//                 {card.desc}
//               </p>
//             </div>
//           ))}

//           <div className="bg-white rounded-2xl p-6 shadow-[0_8px_25px_rgba(0,40,120,0.14)]">
//             <h4 className="text-center font-[600] text-[#0637C8] mb-7">
//               CORE FOCUS AREAS
//             </h4>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
//               {focusAreas.map((f) => (
//                 <div key={f.title} className="text-center group">
//                   <div
//                     className="mx-auto w-20 h-20 flex items-center justify-center border-2 rounded-[28px] rotate-45 group-hover:scale-110 transition"
//                     style={{ borderColor: f.color }}
//                   >
//                     <f.icon
//                       className="-rotate-45 w-10 h-10"
//                       style={{ color: f.color }}
//                     />
//                   </div>
//                   <h5
//                     className="mt-6 font-semibold text-[14px]"
//                     style={{ color: f.color }}
//                   >
//                     {f.title}
//                   </h5>
//                   <p className="mt-2 text-[12px] leading-5 font-medium">
//                     {f.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Tracks */}
//         <section className="py-12">
//           <h3 className="text-center text-[22px] font-[600] text-[#0637C8]">
//             CONFERENCE TRACKS
//           </h3>
//           <p className="text-center mt-4 font-semibold text-[14px]">
//             IDEAX 2026 invites high-quality research papers across a wide range
//             of topics, including but not limited to:
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-9">
//             {tracks.map((t, i) => (
//               <div
//                 key={t.title}
//                 className="group relative text-center bg-white rounded-2xl p-4 min-h-[330px]
//   shadow-[0_8px_24px_rgba(0,40,120,0.12)]
//   hover:-translate-y-2
//   hover:shadow-[0_18px_35px_rgba(0,40,120,0.18)]
//   transition duration-500"
//               >
//                 <div className="flex justify-center mb-5">
//                   <t.icon
//                     className="w-12 h-12 transition-transform duration-500 group-hover:scale-110"
//                     style={{ color: t.color }}
//                   />
//                 </div>
//                 <h4 className="font-semibold text-[13px] leading-5">
//                   {t.title}
//                 </h4>
//                 <ul className="mt-5 text-start space-y-3 text-[13px] font-semibold text-[#07113F]/80">
//                   {t.items.map((it) => (
//                     <li key={it}>• {it}</li>
//                   ))}
//                 </ul>
//                 <div
//                   className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 font-black"
//                   style={{ borderColor: t.color, color: t.color }}
//                 >
//                   {String(i + 1).padStart(2, "0")}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Why + Stats */}
//         <section className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 py-8">
//           <div className="bg-white rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
//             <h3 className="font-[600] mb-4">WHY PARTICIPATE?</h3>
//             <div className="space-y-2">
//               {whyItems.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.text}
//                     className="flex items-center gap-4 group"
//                   >
//                     <div
//                       className={`w-9 h-9 rounded-full ${item.bg}
//           flex items-center justify-center
//           shadow-md group-hover:scale-110
//           transition-all duration-300`}
//                     >
//                       <Icon className="w-4 h-4 text-white" />
//                     </div>

//                     <p className="text-[14px] font-semibold text-[#07113F] leading-4">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div
//             className="rounded-2xl p-8 lg:p-12 bg-cover bg-center text-white shadow-xl overflow-hidden"
//             style={{ backgroundImage: `url(${whyBg})` }}
//           >
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 h-full items-center text-center">
//               {[
//                 ["500+", "Participants", Users],
//                 ["150+", "Research Papers", FileText],
//                 ["30+", "Countries", Globe2],
//                 ["50+", "Keynote Speakers", Award],
//                 ["20+", "Partner Institutions", Network],
//               ].map(([num, label, Icon], index) => (
//                 <div
//                   key={label}
//                   className="group relative px-4 py-5 rounded-xl transition-all duration-500 hover:bg-white/5 hover:backdrop-blur-sm hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,184,255,0.15)]"
//                 >
//                   {/* Separator */}
//                   {index !== 4 && (
//                     <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[90px] w-px bg-white/20" />
//                   )}

//                   {/* Icon */}
//                   <div className="flex justify-center mb-4">
//                     <div className="rounded-full p-3 transition-all duration-500 group-hover:bg-white/10 group-hover:shadow-[0_0_25px_rgba(0,184,255,0.45)]">
//                       <Icon className="w-14 h-14 text-[#00B8FF] transition-all duration-500 group-hover:scale-110 group-hover:text-[#38D8FF]" />
//                     </div>
//                   </div>

//                   {/* Number */}
//                   <h4 className="text-[24px] lg:text-[28px] font-semibold transition-all duration-500 group-hover:text-[#38D8FF]">
//                     {num}
//                   </h4>

//                   {/* Label */}
//                   <p className="mt-2 text-[13px] lg:text-[14px] text-white/90 transition-all duration-500 group-hover:text-white">
//                     {label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Attend + Dates */}
//         <section className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 py-8">
//           <div>
//             <h3 className="text-center text-[22px] font-[600] text-[#0637C8] mb-8">
//               WHO SHOULD ATTEND?
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//               {[
//                 "Researchers & Academicians",
//                 "Industry Professionals",
//                 "Students & Scholars",
//                 "Policy Makers & Government",
//                 "Startups & Innovators",
//               ].map((x, i) => (
//                 <div
//                   key={x}
//                   className="text-center bg-white rounded-2xl p-4 shadow-md hover:-translate-y-2 transition"
//                 >
//                   <div className="w-24 h-24 mx-auto rounded-full bg-[#EAF3FF] flex items-center justify-center">
//                     {i === 0 ? (
//                       <BookOpen />
//                     ) : i === 1 ? (
//                       <Users />
//                     ) : i === 2 ? (
//                       <Award />
//                     ) : i === 3 ? (
//                       <Globe2 />
//                     ) : (
//                       <Trophy />
//                     )}
//                   </div>
//                   <p className="mt-4 text-[13px] font-[600]">{x}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-5 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
//             <h3 className="text-center text-[22px] font-[600] text-[#0637C8] mb-6">
//               IMPORTANT DATES
//             </h3>
//             <div className="space-y-3">
//               {dates.map(([name, date]) => (
//                 <div
//                   key={name}
//                   className="flex items-center justify-between gap-4 font-semibold text-[13px]"
//                 >
//                   <div className="flex items-center gap-3">
//                     <CalendarDays className="w-5 h-5 text-[#0B63FF]" />
//                     <span>{name}</span>
//                   </div>
//                   <span className="text-[#0637C8]">{date}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Publication */}
//         <section className="py-8">
//           <h3 className="text-center text-[22px] font-[600] text-[#0637C8] mb-7">
//             PUBLICATION & INDEXING
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-5 bg-white rounded-2xl p-7 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
//             {[
//               [
//                 "Peer Reviewed",
//                 "All accepted papers are peer reviewed",
//                 FileText,
//               ],
//               [
//                 "Conference Proceedings",
//                 "Published with ISBN and DOI",
//                 BookOpen,
//               ],
//               [
//                 "Indexed & Abstracted",
//                 "Scopus, Google Scholar and other databases",
//                 Globe2,
//               ],
//               [
//                 "Selected Papers",
//                 "Opportunity for extended journal publication",
//                 Award,
//               ],
//             ].map(([title, desc, Icon]) => (
//               <div key={title} className="flex items-center gap-4">
//                 <Icon className="w-12 h-12 text-[#0B63FF]" />
//                 <div>
//                   <h4 className="font-semibold text-[14px]">{title}</h4>
//                   <p className="text-[13px] font-medium mt-1">{desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section
//           className="my-8 rounded-2xl overflow-hidden bg-cover bg-center text-white p-6 lg:p-6 shadow-xl"
//           style={{ backgroundImage: `url(${ctaBg})` }}
//         >
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <Trophy className="w-24 h-24 text-[#FFB000]" />
//               <div className="w-[480px] ml-[50px]">
//                 <h2 className="text-[16px] lg:text-[24px] font-semibold">
//                   Be Part of IDEAX 2026
//                 </h2>
//                 <p className="mt-3 text-[14px] max-w-[650px] text-white/90">
//                   Join us in shaping the future of intelligent systems and
//                   data-driven decisions that create a better and smarter world.
//                 </p>
//               </div>
//             </div>

//             <button className="bg-[#FFB000] mr-14 text-[13px] text-[#07113F] px-4 py-3 rounded-xl font-[600] flex items-center gap-4 hover:scale-105 transition">
//               REGISTER NOW <ArrowRight />
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


import React from "react";
import {
  Brain,
  Eye,
  Target,
  Network,
  Handshake,
  Globe2,
  BarChart3,
  Cpu,
  Settings,
  Cloud,
  Cross,
  Users,
  CalendarDays,
  Trophy,
  BookOpen,
  FileText,
  Award,
  ArrowRight,
  Presentation,
  FileCheck,
  Lightbulb,
} from "lucide-react";

import heroBg from "../assets/hero/AboutBg.png";
import ctaBg from "../assets/hero/AboutCta.png";
import whyBg from "../assets/hero/AboutPract.png";

const tracks = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    color: "#0B63FF",
    items: ["Deep Learning", "Generative AI", "Explainable AI", "Neural Computing"],
  },
  {
    icon: BarChart3,
    title: "Data Science & Decision Analytics",
    color: "#13BFD6",
    items: ["Predictive Analytics", "Data Mining", "Big Data Engineering", "Business Intelligence"],
  },
  {
    icon: Settings,
    title: "Optimization & Decision Engineering",
    color: "#7146FF",
    items: ["Operations Research", "Decision Support Systems", "Multi-criteria Decision Making", "Simulation & Modeling"],
  },
  {
    icon: Cloud,
    title: "Emerging Computing Technologies",
    color: "#FF9900",
    items: ["Cloud & Edge Computing", "Internet of Things (IoT)", "Blockchain", "Cybersecurity"],
  },
  {
    icon: Cross,
    title: "Intelligent Systems Applications",
    color: "#28B64B",
    items: ["Healthcare AI", "Finance & FinTech", "Smart Cities", "Industry 4.0/5.0"],
  },
  {
    icon: Users,
    title: "Socio-Technical & Human-Centric AI",
    color: "#236CFF",
    items: ["Human-AI Interaction", "Ethics & Responsible AI", "Policy & Governance", "Education & Training"],
  },
];

const focusAreas = [
  { icon: Brain, title: "Innovation", desc: "Encouraging novel ideas and creative solutions", color: "#0B63FF" },
  { icon: Network, title: "Decision Engineering", desc: "Modeling and optimizing decision processes", color: "#12AFC2" },
  { icon: Cpu, title: "Artificial Intelligence", desc: "Intelligent algorithms and adaptive systems", color: "#6F42FF" },
  { icon: Handshake, title: "Collaboration", desc: "Connecting academia, industry and institutions", color: "#FF9900" },
  { icon: Globe2, title: "Sustainability", desc: "Technology-enabled sustainable and ethical solutions", color: "#27B43E" },
];

const whyItems = [
  { text: "Present your research to a global audience", icon: Presentation, bg: "bg-[#0B63FF]" },
  { text: "Learn from world renowned experts", icon: BookOpen, bg: "bg-[#8B5CF6]" },
  { text: "Network with global research community", icon: Users, bg: "bg-[#14B8A6]" },
  { text: "Explore collaborations and partnerships", icon: Handshake, bg: "bg-[#F43F5E]" },
  { text: "Publish in reputed indexed proceedings", icon: FileCheck, bg: "bg-[#F59E0B]" },
  { text: "Drive innovation for societal impact", icon: Lightbulb, bg: "bg-[#22C55E]" },
];

const dates = [
  ["Paper Submission Deadline", "30 June, 2026"],
  ["Notification of Acceptance", "31 August, 2026"],
  ["Camera-Ready Submission", "30 September, 2026"],
  ["Early Bird Registration", "15 October, 2026"],
  ["Conference Dates", "10 – 12 December, 2026"],
];

export default function AboutIdeax2026() {
  return (
    <div className="min-h-screen bg-white text-[#07113F] font-sans overflow-hidden">
      {/* Hero */}
      <section
        className="relative min-h-[500px] sm:min-h-[570px] lg:min-h-[670px] bg-[#020b22] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-white/45 sm:bg-white/25 lg:bg-transparent" />

        <div className="relative max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pt-10 sm:pt-14 lg:pt-20">
          <div className="max-w-[520px]">
            <h2 className="font-semibold text-[#06134A] leading-none">
              <span className="block text-[30px] sm:text-[42px] lg:text-[44px]">
                About the
              </span>
              <span className="block mt-2 text-[38px] sm:text-[52px] lg:text-[56px] tracking-[-1px] sm:tracking-[-2px]">
                IDEAX 2026
              </span>
            </h2>

            <h3 className="mt-5 text-[15px] sm:text-[16px] lg:text-[18px] font-semibold leading-snug">
              International Conference on{" "}
              <span className="text-[#0B63FF]">Innovation, Decision Engineering</span>{" "}
              and <span className="text-[#0B63FF]">Artificial Intelligence</span>
            </h3>

            <div className="mt-6 sm:mt-7 w-[90px] h-[5px] bg-gradient-to-r from-[#0B63FF] to-[#FFAA00] rounded-full" />

            <p className="mt-6 sm:mt-8 max-w-[360px] text-[13px] sm:text-[14px] lg:text-[15px] leading-6 font-semibold text-[#07113F]/90">
              IDEAX 2026 is a premier international platform that brings together researchers,
              academicians, industry leaders and innovators to explore cutting-edge advancements in
              computing, intelligent systems and decision-making methodologies.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Mission Vision Focus */}
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[250px_250px_1fr] gap-4 -mt-4">
          {[
            {
              title: "OUR MISSION",
              icon: Target,
              desc: "To advance innovation and intelligent decision-making by fostering interdisciplinary research, collaboration and knowledge exchange for global impact.",
            },
            {
              title: "OUR VISION",
              icon: Eye,
              desc: "To become a leading global conference series that inspires innovation and shapes the future of intelligent decision systems.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-[0_8px_25px_rgba(0,40,120,0.12)] hover:-translate-y-2 transition duration-500"
            >
              <h4 className="font-semibold text-[#07113F]">{card.title}</h4>
              <card.icon className="mx-auto my-6 sm:my-8 w-12 h-12 sm:w-14 sm:h-14 text-[#0B63FF]" />
              <p className="text-[13px] sm:text-[14px] leading-6 sm:leading-7 font-semibold text-[#07113F]/80">
                {card.desc}
              </p>
            </div>
          ))}

          <div className="md:col-span-2 xl:col-span-1 bg-white rounded-2xl p-5 sm:p-6 shadow-[0_8px_25px_rgba(0,40,120,0.14)]">
            <h4 className="text-center font-semibold text-[#0637C8] mb-7">
              CORE FOCUS AREAS
            </h4>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {focusAreas.map((f) => (
                <div key={f.title} className="text-center group">
                  <div
                    className="mx-auto w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border-2 rounded-[22px] sm:rounded-[28px] rotate-45 group-hover:scale-110 transition"
                    style={{ borderColor: f.color }}
                  >
                    <f.icon
                      className="-rotate-45 w-8 h-8 sm:w-10 sm:h-10"
                      style={{ color: f.color }}
                    />
                  </div>

                  <h5 className="mt-5 sm:mt-6 font-semibold text-[13px] sm:text-[14px]" style={{ color: f.color }}>
                    {f.title}
                  </h5>

                  <p className="mt-2 text-[12px] leading-5 font-medium">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracks */}
        <section className="py-10 sm:py-12">
          <h3 className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0637C8]">
            CONFERENCE TRACKS
          </h3>

          <p className="text-center mt-4 font-semibold text-[13px] sm:text-[14px] max-w-[850px] mx-auto">
            IDEAX 2026 invites high-quality research papers across a wide range of topics, including but not limited to:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-4 mt-9">
            {tracks.map((t, i) => (
              <div
                key={t.title}
                className="group relative text-center bg-white rounded-2xl p-5 min-h-[300px] xl:min-h-[330px] shadow-[0_8px_24px_rgba(0,40,120,0.12)] hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(0,40,120,0.18)] transition duration-500"
              >
                <div className="flex justify-center mb-5">
                  <t.icon
                    className="w-12 h-12 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: t.color }}
                  />
                </div>

                <h4 className="font-semibold text-[13px] leading-5">
                  {t.title}
                </h4>

                <ul className="mt-5 text-left space-y-3 text-[13px] font-semibold text-[#07113F]/80">
                  {t.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>

                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 font-black"
                  style={{ borderColor: t.color, color: t.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why + Stats */}
        <section className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
            <h3 className="font-semibold mb-5">WHY PARTICIPATE?</h3>

            <div className="space-y-4">
              {whyItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-center gap-4 group">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <p className="text-[13px] sm:text-[14px] font-semibold text-[#07113F] leading-5">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="rounded-2xl p-5 sm:p-8 lg:p-10 xl:p-12 bg-cover bg-center text-white shadow-xl overflow-hidden"
            style={{ backgroundImage: `url(${whyBg})` }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 h-full items-center text-center">
              {[
                ["500+", "Participants", Users],
                ["150+", "Research Papers", FileText],
                ["30+", "Countries", Globe2],
                ["50+", "Keynote Speakers", Award],
                ["20+", "Partner Institutions", Network],
              ].map(([num, label, Icon], index) => (
                <div
                  key={label}
                  className="group relative px-4 py-5 rounded-xl transition-all duration-500 hover:bg-white/5 hover:backdrop-blur-sm hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,184,255,0.15)]"
                >
                  {index !== 4 && (
                    <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[90px] w-px bg-white/20" />
                  )}

                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="rounded-full p-3 transition-all duration-500 group-hover:bg-white/10 group-hover:shadow-[0_0_25px_rgba(0,184,255,0.45)]">
                      <Icon className="w-11 h-11 sm:w-14 sm:h-14 text-[#00B8FF] transition-all duration-500 group-hover:scale-110 group-hover:text-[#38D8FF]" />
                    </div>
                  </div>

                  <h4 className="text-[24px] lg:text-[28px] font-semibold transition-all duration-500 group-hover:text-[#38D8FF]">
                    {num}
                  </h4>

                  <p className="mt-2 text-[13px] lg:text-[14px] text-white/90 transition-all duration-500 group-hover:text-white">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attend + Dates */}
        <section className="grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-8 py-8">
          <div>
            <h3 className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0637C8] mb-8">
              WHO SHOULD ATTEND?
            </h3>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Researchers & Academicians",
                "Industry Professionals",
                "Students & Scholars",
                "Policy Makers & Government",
                "Startups & Innovators",
              ].map((x, i) => (
                <div
                  key={x}
                  className="text-center bg-white rounded-2xl p-4 shadow-md hover:-translate-y-2 transition"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#EAF3FF] flex items-center justify-center">
                    {i === 0 ? <BookOpen /> : i === 1 ? <Users /> : i === 2 ? <Award /> : i === 3 ? <Globe2 /> : <Trophy />}
                  </div>

                  <p className="mt-4 text-[13px] font-semibold">
                    {x}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
            <h3 className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0637C8] mb-6">
              IMPORTANT DATES
            </h3>

            <div className="space-y-4">
              {dates.map(([name, date]) => (
                <div
                  key={name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 font-semibold text-[13px]"
                >
                  <div className="flex items-center gap-3">
                    <CalendarDays className="shrink-0 w-5 h-5 text-[#0B63FF]" />
                    <span>{name}</span>
                  </div>

                  <span className="text-[#0637C8] sm:text-right">
                    {date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publication */}
        <section className="py-8">
          <h3 className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0637C8] mb-7">
            PUBLICATION & INDEXING
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 bg-white rounded-2xl p-5 sm:p-7 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
            {[
              ["Peer Reviewed", "All accepted papers are peer reviewed", FileText],
              ["Conference Proceedings", "Published with ISBN and DOI", BookOpen],
              ["Indexed & Abstracted", "Scopus, Google Scholar and other databases", Globe2],
              ["Selected Papers", "Opportunity for extended journal publication", Award],
            ].map(([title, desc, Icon]) => (
              <div key={title} className="flex items-center gap-4">
                <Icon className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 text-[#0B63FF]" />
                <div>
                  <h4 className="font-semibold text-[14px]">{title}</h4>
                  <p className="text-[13px] font-medium mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="my-8 rounded-2xl overflow-hidden bg-cover bg-center text-white p-5 sm:p-6 lg:p-8 shadow-xl"
          style={{ backgroundImage: `url(${ctaBg})` }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-5 lg:gap-6">
              <Trophy className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#FFB000]" />

              <div className="max-w-[560px]">
                <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
                  Be Part of IDEAX 2026
                </h2>

                <p className="mt-3 text-[13px] sm:text-[14px] text-white/90 leading-6">
                  Join us in shaping the future of intelligent systems and data-driven decisions that create a better and smarter world.
                </p>
              </div>
            </div>

            <button className="shrink-0 bg-[#FFB000] text-[13px] text-[#07113F] px-5 py-3 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition">
              REGISTER NOW <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}