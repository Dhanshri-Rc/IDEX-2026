import React from "react";
import { motion } from "framer-motion";
import {
  Info,
  CheckCircle,
  Headphones,
  ChevronDown,
  ArrowRight,
  FileText,
  Monitor,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const steps = [
  { no: 1, title: "Paper Details", active: true },
  { no: 2, title: "Authors" },
  { no: 3, title: "Upload Files" },
  { no: 4, title: "Confirm & Submit" },
];

export default function SubmitPaper1() {
  return (
    <main className="bg-[#F8FAFF] text-[#07113F] px-4 sm:px-6 lg:px-10  overflow-hidden">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <h1 className="text-[20px] font-[600]">Submit Paper</h1>
        <p className="mt-2 text-[14px] font-medium">
          Fill in the details below to submit your paper for review.
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 mb-8 max-w-[850px]"
      >
        {steps.map((step, index) => (
          <motion.div key={step.no} variants={fadeUp} className="relative">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] bg-white border border-[#B9C1D6] text-[#07113F] font-semibold hover:bg-[#0B63FF] hover:text-white shadow-[0_8px_20px_rgba(11,99,255,0.25)] shrink-0 "
                
              >
                {step.no}
              </div>

              <h3
                className="ml-4 text-[14px] text-[#4B5579] font-semibold hover:text-[#0B63FF] whitespace-nowrap"
                 
              >
                {step.title}
              </h3>

              {index !== steps.length - 1 && (
                <div className="hidden xl:block flex-1 h-[1px] bg-[#D7DDEA] ml-6" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
        {/* Form */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-[10px] border border-[#DCE8FA] p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
        >
          <h2 className="text-[18px] font-semibold mb-6">Paper Details</h2>

          <div className="space-y-6">
            <Field label="Paper Title" required>
              <input className="input-style text-[13px]" placeholder="Enter the full title of your paper" />
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[13px]">
              <Field label="Track / Theme" required>
                <SelectBox text="Select Track / Theme"/>
              </Field>

              <Field label="Sub Theme (Optional)">
                <SelectBox text="Select Sub Theme" className="text-[13px]" />
              </Field>
            </div>

            <Field label="Abstract" required>
              <div className="relative">
                <textarea
                  className="input-style min-h-[125px] resize-none pt-4 text-[13px]"
                  placeholder="Write a brief abstract of your paper (max 300 words)"
                />
                <span className="absolute bottom-3 right-4 text-[13px] text-[#4B5579]">
                  0 / 300
                </span>
              </div>
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[13px]">
              <Field label="Keywords" required>
                <input
                  className="input-style text-[13px]"
                  placeholder="Enter keywords (comma separated)"
                />
                <p className="mt-3 text-[12px] text-[#4B5579]">
                  Example: AI, Machine Learning, Decision Support
                </p>
              </Field>

              <Field label="Paper Type" equired>
                <SelectBox text="Select Paper Type" />
              </Field>
            </div>

            <Field label="Preferred Presentation Mode" required>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ModeCard active icon={FileText} text="Online / Virtual Presentation" />
                <ModeCard icon={Monitor} text="Offline Presentation" />
              </div>
            </Field>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row justify-between gap-4">
            <button className="h-[46px] px-8 rounded-[6px] border border-[#C9D4EA] text-[14px] font-semibold hover:bg-[#F4F8FF] transition">
              Cancel
            </button>

            <button className="h-[46px] px-8 rounded-[6px] bg-[#0B63FF] text-white text-[13px] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#004FEA] hover:scale-[1.02] transition">
              Save & Next <ArrowRight size={17} />
            </button>
          </div>
        </motion.section>

        {/* Right Cards */}
        <aside className="space-y-5">
          <InfoCard title="Guidelines" icon={Info}>
            {[
              "All papers must be original and unpublished.",
              "Follow the author guidelines and template provided on the website.",
              "Maximum paper length: 6 pages.",
              "Accepted papers will be published in Scopus indexed proceedings.",
              "Ensure all authors approve the final submission.",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-[13px] leading-7">
                <CheckCircle size={17} className="text-[#0B63FF] shrink-0 mt-[5px]" />
                {item}
              </p>
            ))}
          </InfoCard>

          <InfoCard title="Need Help?" icon={Headphones}>
            <p className="text-[13px] leading-7">
              For any queries, contact us at
              <br />
              <span className="text-[#0B63FF] font-semibold">
                support@ideax-conference.org
              </span>
            </p>
          </InfoCard>
        </aside>
      </div>
    </main>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block mb-3 text-[14px] font-semibold">
        {label} {required && <span className="text-[#FF3B30]">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectBox({ text }) {
  return (
    <button className="input-style flex items-center justify-between text-left text-[#64708E] hover:border-[#0B63FF] transition">
      {text}
      <ChevronDown size={18} className="text-[#0B63FF]" />
    </button>
  );
}

function ModeCard({ active, icon: Icon, text }) {
  return (
    <button
      className={`h-[58px] rounded-[6px] border px-4 flex items-center gap-4 text-[14px] font-semibold transition hover:border-[#0B63FF] ${
        active ? "border-[#0B63FF]" : "border-[#D7E2F4]"
      }`}
    >
      <span
        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
          active ? "border-[#0B63FF]" : "border-[#AEB8CF]"
        }`}
      >
        {active && <span className="w-3 h-3 rounded-full bg-[#0B63FF]" />}
      </span>

      <span className="w-8 h-8 rounded-full bg-[#F1F4FA] flex items-center justify-center">
        <Icon size={17} className="text-[#4B5579]" />
      </span>

      {text}
    </button>
  );
}

function InfoCard({ title, icon: Icon, children }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-[10px] border border-[#DCE8FA] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
    >
      <h3 className="flex items-center gap-4 text-[17px] font-semibold mb-6">
        <span className="w-11 h-11 rounded-full bg-[#EEF4FF] text-[#0B63FF] flex items-center justify-center">
          <Icon size={20} />
        </span>
        {title}
      </h3>

      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}