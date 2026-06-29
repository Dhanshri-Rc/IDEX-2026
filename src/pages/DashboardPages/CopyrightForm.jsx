import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  FileSearch,
  FileText,
  Copyright,
  User,
  Mail,
  LogOut,
  CalendarDays,
  Bell,
  ChevronDown,
  Download,
  Eye,
  Info,
  PenLine,
  Printer,
  UploadCloud,
  CheckCircle,
  Headphones,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  {
    no: 1,
    title: "Download Form",
    desc: "Download the copyright form template",
    active: true,
  },
  {
    no: 2,
    title: "Fill Form",
    desc: "Fill in article and author details in the form",
  },
  {
    no: 3,
    title: "Scan Form",
    desc: "Scan the completed and signed form",
  },
  {
    no: 4,
    title: "Upload Form",
    desc: "Upload the scanned form in PDF format",
  },
];

export default function CopyrightFormPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-[#07113F] overflow-x-hidden">
      <div className="flex">
      
        {open && (
          <button className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setOpen(false)} />
        )}

        {/* Main */}
        <div className="flex-1 min-w-0">
          <main className="px-4 sm:px-6 lg:px-10 ">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <h1 className="text-[20px] font-semibold">Copyright Form</h1>
              <p className="mt-2 text-[14px] font-medium">
                Please complete the steps below to submit the copyright form.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
              {steps.map((step, index) => (
  <motion.div
    key={step.no}
    variants={fadeUp}
    className="relative"
  >
    {/* Circle */}
    <div className="flex items-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          step.active
            ? "bg-[#2155FF] text-white"
            : "border border-[#CCD4E5] text-[#07113F]"
        }`}
      >
        {step.no}
      </div>

      {index !== steps.length - 1 && (
        <div className="hidden lg:block flex-1 h-[1px] bg-[#D7DCEA] ml-4 mr-2" />
      )}
    </div>

    <div className="mt-4">
      <h3 className="text-[14px] font-semibold">{step.title}</h3>
      <p className="text-[13px]">{step.desc}</p>
    </div>
  </motion.div>
))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-8 mt-8">
              {/* Left */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#F4F8FF] border border-[#DCE8FA] rounded-[8px] px-6 py-4 text-[14px]">
                  <Info className="text-[#0B63FF]" />
                  Please read the instructions carefully before downloading the form.
                </div>

                <ActionCard
                  icon={Download}
                  color="#0B63FF"
                  title="1. Download Copyright Form"
                  desc="Download the copyright form template, fill in the required details including article information and all author details."
                  buttons={[
                    ["Download Copyright Form (PDF)", Download],
                    ["Preview Form", Eye],
                  ]}
                  footer="File size: 245 KB"
                />

                <ActionCard
                  icon={PenLine}
                  color="#10B981"
                  title="2. Fill in the Form"
                  desc="Fill in the article details and author information. All authors must sign the form."
                  list={[
                    "Article Title, Submission ID and Track",
                    "All author names, affiliations and signatures",
                    "Date and corresponding author details",
                  ]}
                />

                <ActionCard
                  icon={Printer}
                  color="#F5A400"
                  title="3. Scan the Completed Form"
                  desc="Scan the completed and signed form clearly."
                  list={[
                    "Ensure all signatures are visible",
                    "Scan in color or grayscale",
                    "Save the file in PDF format",
                  ]}
                />

                <ActionCard
                  icon={UploadCloud}
                  color="#8B5CF6"
                  title="4. Upload the Scanned Form"
                  desc="Upload the scanned copyright form in PDF format."
                  buttons={[["Upload Scanned Form", UploadCloud]]}
                  footer="Max file size: 5 MB"
                />

                <div className="flex justify-between gap-4">
                  <button className="inline-flex items-center gap-3 rounded-[6px] border border-[#D7E2F4] px-7 py-2 text-[13px] font-semibold hover:bg-[#F4F8FF] transition">
                    <ArrowLeft size={15} /> Back
                  </button>

                  <button className="inline-flex items-center gap-3 rounded-[6px] bg-[#0B63FF] px-8 py-3 text-[13px] font-semibold text-white hover:bg-[#004EEB] transition">
                    Next: Upload Form <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-4">
                <InfoBox title="Submission Details" icon={FileText}>
                  <Detail label="Submission ID" value="IDEAX26-000123" />
                  <Detail label="Paper Title" value="A Hybrid Deep Learning Approach for Intelligent Decision Support Systems" />
                  <Detail label="Track" value="Artificial Intelligence & Machine Learning" />
                  <Detail label="Submitted On" value="15 May, 2026" />
                </InfoBox>

                <InfoBox title="Instructions" icon={Info}>
                  {[
                    "Download the copyright form using the button.",
                    "Fill all the required details and get signatures from all authors.",
                    "Scan the completed form in clear quality.",
                    "Upload the scanned form in PDF format.",
                    "Maximum file size: 5 MB.",
                  ].map((t) => (
                    <p key={t} className="flex gap-3 text-[14px] leading-6">
                      <CheckCircle className="text-[#0B63FF] shrink-0 mt-1" size={16} /> {t}
                    </p>
                  ))}
                </InfoBox>

                <InfoBox title="Need Help?" icon={Headphones}>
                  <p className="text-[14px] leading-7">
                    For any queries, contact us at <br />
                    <span className="text-[#0B63FF] font-semibold">support@ideax-conference.org</span>
                  </p>
                </InfoBox>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function SideItem({ icon: Icon, text, active }) {
  return (
    <button
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-[8px] mb-2 transition ${
        active ? "bg-[#0B63FF] text-white" : "hover:bg-white/10 text-white/90"
      }`}
    >
      <Icon size={22} />
      {text}
    </button>
  );
}

function ActionCard({ icon: Icon, color, title, desc, list, buttons, footer }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white border border-[#DCE8FA] rounded-[10px] p-5 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
    >
      <div className="flex gap-5">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${color}14`, color }}
        >
          <Icon size={28} />
        </div>

        <div className="flex-1">
          <h3 className="text-[16px] font-semibold">{title}</h3>
          <p className="mt-2 text-[14px] leading-6">{desc}</p>

          {list && (
            <ul className="mt-3 list-disc pl-5 text-[14px] leading-7">
              {list.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          )}

          {buttons && (
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              {buttons.map(([text, BtnIcon]) => (
                <button
                  key={text}
                  className="inline-flex items-center justify-center gap-3 border border-[#0B63FF] text-[#0B63FF] rounded-[6px] px-5 py-2 text-[14px] font-semibold hover:bg-[#0B63FF] hover:text-white transition"
                >
                  <BtnIcon size={16} /> {text}
                </button>
              ))}
            </div>
          )}

          {footer && <p className="mt-3 text-[14px]">{footer}</p>}
        </div>
      </div>
    </motion.div>
  );
}

function InfoBox({ title, icon: Icon, children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white border border-[#DCE8FA] rounded-[10px] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
    >
      <h3 className="flex items-center gap-3 text-[17px] font-semibold mb-5">
        <span className="w-9 h-9 rounded-full bg-[#EEF4FF] text-[#0B63FF] flex items-center justify-center">
          <Icon size={19} />
        </span>
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="grid grid-cols-[130px_1fr] gap-4 text-[14px]">
      <span>{label}</span>
      <span className="text-right font-medium">{value}</span>
    </div>
  );
}