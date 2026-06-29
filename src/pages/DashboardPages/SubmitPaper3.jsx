import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Info,
  Lightbulb,
  Headphones,
  FileUp,
  Plus,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  { no: 1, title: "Paper Details", done: true },
  { no: 2, title: "Authors", done: true },
  { no: 3, title: "Upload Files", active: true },
  { no: 4, title: "Confirm & Submit" },
];

export default function SubmitPaperUploadFiles() {
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
              className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0 transition-all duration-300 ${
                step.done
                  ? "border border-[#18A957] text-[#18A957] bg-white"
                 
                  : "bg-white border border-[#B9C1D6] text-[#07113F] hover:bg-[#0B63FF] hover:border-[#0B63FF] hover:text-white hover:shadow-[0_8px_20px_rgba(11,99,255,0.25)]"
              }`}
            >
              {step.done ? <Check size={18} /> : step.no}
            </span>

            <span
              className={`ml-4 text-[14px] font-semibold whitespace-nowrap ${
                step.active ? "hover:text-[#0B63FF]" : "text-[#4B5579]"
              }`}
            >
              {step.title}
            </span>

            {index !== steps.length - 1 && (
              <span
                className={`hidden xl:block flex-1 h-[1px] ml-6 ${
                  step.done ? "bg-[#18A957]" : step.active ? "bg-[#0B63FF]" : "bg-[#C8CFDD]"
                }`}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        {/* Upload Card */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-[10px] border border-[#DCE8FA] p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
        >
          <h2 className="text-[18px] font-semibold">Upload Files</h2>
          <p className="mt-2 text-[14px] text-[#4B5579]">
            Please upload your paper and any additional files.
          </p>

          <div className="mt-8">
            <label className="block mb-3 text-[16px] font-semibold">
              Paper File <span className="text-[#FF3B30]">*</span>
            </label>

            <motion.div
              whileHover={{ y: -4, borderColor: "#0B63FF" }}
              className="min-h-[260px] rounded-[8px] border border-dashed border-[#0B63FF] bg-white flex flex-col items-center justify-center text-center px-4 transition-all duration-300"
            >
              <FileUp size={48} className="text-[#0B63FF]" />

              <p className="mt-5 text-[15px] font-medium">
                Drag & drop your file here
              </p>

              <p className="mt-4 text-[14px]">or</p>

              <button className="mt-4 h-[42px] px-8 rounded-[6px] border border-[#0B63FF] text-[#0B63FF] text-[14px] font-semibold hover:bg-[#0B63FF] hover:text-white hover:scale-105 transition">
                Browse File
              </button>

              <p className="mt-6 text-[13px] text-[#4B5579]">
                Accepted formats: PDF only <span className="mx-4">|</span> Max file size: 10 MB
              </p>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="mt-8 rounded-[8px] border border-[#DCE8FA] p-5"
          >
            <h3 className="text-[16px] font-semibold">
              Additional Files (Optional)
            </h3>

            <p className="mt-2 text-[14px] text-[#4B5579]">
              You may upload supplementary material, dataset, figures, etc.
            </p>

            <button className="mt-5 h-[42px] px-6 rounded-[6px] border border-[#0B63FF] text-[#0B63FF] text-[14px] font-semibold inline-flex items-center gap-3 hover:bg-[#0B63FF] hover:text-white hover:scale-[1.02] transition">
              <Plus size={18} />
              Add File
            </button>
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
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
          <InfoCard title="File Guidelines" icon={Info}>
            {[
              "Upload your paper in PDF format only.",
              "Maximum file size is 10 MB.",
              "Ensure the file is not password protected.",
              "Paper should be anonymized (no author names in the main document).",
              "Use standard templates provided on the conference website.",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-[14px] leading-7">
                <CheckCircle
                  size={17}
                  className="text-[#0B63FF] shrink-0 mt-[5px]"
                />
                {item}
              </p>
            ))}
          </InfoCard>

          <InfoCard title="Tips" icon={Lightbulb}>
            <p className="text-[14px] leading-7">
              Ensure your paper follows the formatting guidelines to avoid desk
              rejection.
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