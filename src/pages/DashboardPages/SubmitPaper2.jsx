import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Info,
  Lightbulb,
  Headphones,
  ChevronDown,
  Trash2,
  Plus,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  { no: 1, title: "Paper Details", done: true },
  { no: 2, title: "Authors", active: true },
  { no: 3, title: "Upload Files" },
  { no: 4, title: "Confirm & Submit" },
];

export default function SubmitPaperAuthors() {
  return (
    <main className="bg-[#F8FAFF] text-[#07113F] px-4 sm:px-6 lg:px-10 overflow-hidden">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <h1 className="text-[20px] font-semibold">Submit Paper</h1>
        <p className="mt-2 text-[14px] font-medium">
          Fill in the details below to submit your paper for review.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="mt-9 mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[900px]">
        {steps.map((step, index) => (
          <motion.div
            key={step.no}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <span
              className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all duration-300
    ${
      step.done
        ? "border border-[#18A957] text-[#18A957] bg-white"
        : "bg-white border border-[#B9C1D6] text-[#07113F] hover:bg-[#0B63FF] hover:border-[#0B63FF] hover:text-white hover:shadow-[0_8px_20px_rgba(11,99,255,0.25)]"
    }
  `}
            >
              {step.done ? <Check size={18} /> : step.no}
            </span>

            <span className="ml-4 text-[14px] font-semibold whitespace-nowrap">
              {step.title}
            </span>

            {index !== steps.length - 1 && (
              <span className="hidden xl:block flex-1 h-[1px] bg-[#C8CFDD] ml-6" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        {/* Main Form */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-[10px] border border-[#DCE8FA] p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
        >
          <h2 className="text-[18px] font-semibold">Authors</h2>
          <p className="mt-2 text-[13px] text-[#4B5579]">
            Enter details of all authors. The first author will be considered as
            the corresponding author.
          </p>

          {/* Author 1 */}
          <div className="mt-8">
            <h3 className="text-[14px] font-[600]">
              Author 1 (Corresponding Author)
            </h3>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 text-[13px]">
              <Field label="Full Name" required>
                <input className="input-style" placeholder="Enter full name" />
              </Field>

              <Field label="Email Address" required>
                <input
                  className="input-style"
                  placeholder="Enter email address"
                />
              </Field>

              <Field label="Affiliation / Organization" required>
                <input
                  className="input-style"
                  placeholder="Enter affiliation / organization"
                />
              </Field>

              <Field label="Country" required>
                <SelectBox text="Select country" />
              </Field>
            </div>

            <label className="mt-5 flex items-center gap-3 text-[14px] font-medium">
              <span className="w-5 h-5 rounded-[4px] bg-[#0B63FF] text-white flex items-center justify-center">
                <Check size={14} />
              </span>
              This is the corresponding author
            </label>
          </div>

          <div className="my-8 border-t border-[#DCE8FA]" />

          {/* Author 2 */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-[14px] font-[600]">Author 2</h3>

              <button className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#FF2D2D] hover:scale-105 transition">
                <Trash2 size={13} />
                Remove
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 text-[13px]">
              <Field label="Full Name" required>
                <input className="input-style" placeholder="Enter full name" />
              </Field>

              <Field label="Email Address" required>
                <input
                  className="input-style"
                  placeholder="Enter email address"
                />
              </Field>

              <Field label="Affiliation / Organization" required>
                <input
                  className="input-style"
                  placeholder="Enter affiliation / organization"
                />
              </Field>

              <Field label="Country" required>
                <SelectBox text="Select country" />
              </Field>
            </div>
          </div>

          <button className="mt-5 h-[40px] px-6 rounded-[6px] border border-dashed border-[#0B63FF] text-[#0B63FF] text-[13px] font-semibold inline-flex items-center gap-3 hover:bg-[#EEF4FF] hover:scale-[1.01] transition">
            <Plus size={18} />
            Add Another Author
          </button>

          <div className="mt-6 border-t border-[#DCE8FA] pt-6 flex flex-col sm:flex-row justify-between gap-4">
            <button className="h-[46px] px-8 rounded-[6px] border border-[#C9D4EA] text-[14px] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#F4F8FF] transition">
              <ArrowLeft size={17} />
              Back
            </button>

            <button className="h-[46px] px-8 rounded-[6px] bg-[#0B63FF] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#004FEA] hover:scale-[1.02] transition">
              Save & Next
              <ArrowRight size={17} />
            </button>
          </div>
        </motion.section>

        {/* Right Cards */}
        <aside className="space-y-5">
          <InfoCard title="Instructions" icon={Info}>
            <ul className="list-disc pl-5 space-y-4 text-[14px] leading-7">
              <li>
                Add all authors in the order they should appear on the paper.
              </li>
              <li>
                The first author will be the corresponding author by default.
              </li>
              <li>Please ensure all email addresses are valid.</li>
              <li>You can add as many authors as required.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Tips" icon={Lightbulb}>
            <p className="text-[14px] leading-7">
              Make sure all authors approve the final submission before
              proceeding to the next step.
            </p>
          </InfoCard>

          <InfoCard title="Need Help?" icon={Headphones}>
            <p className="text-[14px] leading-7">
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

      <div>{children}</div>
    </motion.div>
  );
}
