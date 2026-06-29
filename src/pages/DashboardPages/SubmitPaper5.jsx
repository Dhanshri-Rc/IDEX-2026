import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  FileText,
  Users,
  FileUp,
  Monitor,
  ClipboardList,
  ShieldCheck,
  Headphones,
  Edit3,
  Send,
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
  { no: 3, title: "Upload Files", done: true },
  { no: 4, title: "Confirm & Submit", active: true },
];

export default function SubmitPaperConfirm() {
  return (
    <main className="bg-[#F8FAFF] text-[#07113F] px-4 sm:px-6 lg:px-10 overflow-hidden">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <h1 className="text-[20px] font-semibold">Submit Paper</h1>
        <p className="mt-2 text-[14px] font-medium">
          Review your details before final submission.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[900px]">
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
                  : step.active
                  ? "bg-[#0B63FF] text-white shadow-[0_8px_20px_rgba(11,99,255,0.25)]"
                  : "bg-white border border-[#B9C1D6] text-[#07113F]"
              }`}
            >
              {step.done ? <Check size={18} /> : step.no}
            </span>

            <span
              className={`ml-4 text-[14px] font-semibold whitespace-nowrap ${
                step.active ? "text-[#0B63FF]" : "text-[#4B5579]"
              }`}
            >
              {step.title}
            </span>

            {index !== steps.length - 1 && (
              <span className="hidden xl:block flex-1 h-[1px] bg-[#18A957] ml-6" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        {/* Review Card */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-[10px] border border-[#DCE8FA] p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
        >
          <h2 className="text-[22px] font-semibold">Review & Confirm</h2>
          <p className="mt-2 text-[14px] text-[#4B5579]">
            Please review all the information below. You can go back to make
            changes if needed.
          </p>

          <div className="mt-4 border-t border-[#DCE8FA]">
            <ReviewItem
              icon={FileText}
              color="#0B63FF"
              title="Paper Details"
              lines={[
                "Title: A Hybrid Deep Learning Approach for Intelligent Decision Support Systems",
                "Track: Artificial Intelligence & Machine Learning",
                "Sub Theme: Deep Learning",
              ]}
            />

            <ReviewItem
              icon={Users}
              color="#10B981"
              title="Authors (2)"
              lines={[
                "Author 1: Rahul Arora (Corresponding Author)",
                "Author 2: Priya Sharma",
              ]}
            />

            <ReviewItem
              icon={FileUp}
              color="#FF9900"
              title="Files"
              lines={[
                "Author File: paper_submission.pdf (1.2 MB)",
                "Additional Files: None",
              ]}
            />

            <ReviewItem
              icon={Monitor}
              color="#8B5CF6"
              title="Presentation Mode"
              lines={["Online / Virtual Presentation"]}
              last
            />
          </div>

          <motion.label
            whileHover={{ y: -3 }}
            className="mt-4 flex items-start gap-4 rounded-[8px] border border-[#CFEEDD] bg-[#F7FFFB] px-5 py-4 text-[14px] leading-7"
          >
            <span className="mt-1 w-5 h-5 rounded-[4px] bg-[#0B63FF] text-white flex items-center justify-center shrink-0">
              <Check size={14} />
            </span>
            <span>
              I confirm that all the information provided is accurate and my
              paper complies with the{" "}
              <span className="text-[#0B63FF] font-semibold">
                conference guidelines.
              </span>
            </span>
          </motion.label>

          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
            <button className="h-[46px] px-8 rounded-[6px] border border-[#C9D4EA] text-[14px] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#F4F8FF] transition">
              <ArrowLeft size={17} />
              Back
            </button>

            <button className="h-[46px] px-8 rounded-[6px] bg-[#0B63FF] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#004FEA] hover:scale-[1.02] transition">
              Confirm & Submit
              <Send size={17} />
            </button>
          </div>
        </motion.section>

        {/* Right Cards */}
        <aside className="space-y-5">
          <InfoCard title="Submission Summary" icon={ClipboardList}>
            <SummaryRow label="Track" value="Artificial Intelligence & Machine Learning" />
            <SummaryRow label="Sub Theme" value="Deep Learning" />
            <SummaryRow label="Authors" value="2" />
            <SummaryRow label="File Uploaded" value="paper_submission.pdf" />
            <SummaryRow label="Presentation Mode" value="Online / Virtual" />
          </InfoCard>

          <InfoCard title="Important" icon={ShieldCheck} orange>
            {[
              "Once submitted, you will not be able to make changes.",
              "You will receive a confirmation email after successful submission.",
              "Keep your Submission ID for future reference.",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-[14px] leading-7">
                <CheckCircle
                  size={17}
                  className="text-[#FF9900] shrink-0 mt-[4px]"
                />
                {item}
              </p>
            ))}
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

function ReviewItem({ icon: Icon, color, title, lines, last }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`flex flex-col sm:flex-row gap-5 py-6 ${
        !last ? "border-b border-[#DCE8FA]" : ""
      }`}
    >
      <span
        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${color}14`, color }}
      >
        <Icon size={27} />
      </span>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[16px] font-semibold">{title}</h3>

          <button className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0B63FF] hover:scale-105 transition">
            Edit <Edit3 size={15} />
          </button>
        </div>

        <div className="mt-3 space-y-2 text-[14px] leading-6 text-[#07113F]">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function InfoCard({ title, icon: Icon, children, orange }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-[10px] border border-[#DCE8FA] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
    >
      <h3 className="flex items-center gap-4 text-[17px] font-semibold mb-6">
        <span
          className={`w-11 h-11 rounded-full flex items-center justify-center ${
            orange
              ? "bg-[#FFF3E4] text-[#FF9900]"
              : "bg-[#EEF4FF] text-[#0B63FF]"
          }`}
        >
          <Icon size={20} />
        </span>
        {title}
      </h3>

      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] leading-6">
      <span className="font-semibold">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}