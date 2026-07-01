import { useMemo, useState } from "react";
import {
  FileText,
  Search,
  RotateCcw,
  Download,
  Eye,
  CheckCircle2,
  XCircle,
  Clock,
  Trash2,
  Pencil,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const initialSubmissions = [
  {
    id: "IDEAX26-000123",
    title: "A Hybrid Deep Learning Approach for Intelligent Decision Support Systems",
    author: "Rahul Arora",
    email: "rahul@example.com",
    track: "AI & ML",
    type: "Research Paper",
    date: "15 May, 2026",
    status: "Under Review",
    copyright: "Received",
  },
  {
    id: "IDEAX26-000122",
    title: "Blockchain-Based Secure Data Sharing in Healthcare Systems",
    author: "Priya Sharma",
    email: "priya@example.com",
    track: "Data Science",
    type: "Review Paper",
    date: "15 May, 2026",
    status: "Accepted",
    copyright: "Received",
  },
  {
    id: "IDEAX26-000121",
    title: "Explainable AI for Predictive Maintenance in Industry 4.0",
    author: "Amit Verma",
    email: "amit@example.com",
    track: "AI & IoT",
    type: "Research Paper",
    date: "14 May, 2026",
    status: "Revision",
    copyright: "Pending",
  },
];

const statusOptions = [
  "All",
  "Under Review",
  "Accepted",
  "Rejected",
  "Revision",
];

const tracks = ["All", "AI & ML", "Data Science", "AI & IoT"];
const types = ["All", "Research Paper", "Review Paper"];

function StatusBadge({ status }) {
  const styles = {
    "Under Review": "bg-orange-50 text-orange-600 border-orange-200",
    Accepted: "bg-green-50 text-green-700 border-green-200",
    Rejected: "bg-red-50 text-red-600 border-red-200",
    Revision: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <span className={`rounded-md border px-3 py-1 text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}

export default function AdminSubmissions() {
  const [rows, setRows] = useState(initialSubmissions);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [track, setTrack] = useState("All");
  const [type, setType] = useState("All");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  const filteredRows = useMemo(() => {
    return rows.filter((item) => {
      const keyword = search.toLowerCase();

      const matchSearch =
        item.id.toLowerCase().includes(keyword) ||
        item.title.toLowerCase().includes(keyword) ||
        item.author.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword);

      const matchStatus = status === "All" || item.status === status;
      const matchTrack = track === "All" || item.track === track;
      const matchType = type === "All" || item.type === type;

      return matchSearch && matchStatus && matchTrack && matchType;
    });
  }, [rows, search, status, track, type]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));
  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const updateStatus = (id, newStatus) => {
    setRows((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );

    setSelected((prev) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );
  };

  const deleteSubmission = (id) => {
    setRows((prev) => prev.filter((item) => item.id !== id));
    setSelected(null);
  };

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setTrack("All");
    setType("All");
    setPage(1);
  };

  const stats = [
    { title: "Total Papers", value: rows.length, icon: FileText },
    {
      title: "Under Review",
      value: rows.filter((r) => r.status === "Under Review").length,
      icon: Clock,
    },
    {
      title: "Accepted",
      value: rows.filter((r) => r.status === "Accepted").length,
      icon: CheckCircle2,
    },
    {
      title: "Rejected",
      value: rows.filter((r) => r.status === "Rejected").length,
      icon: XCircle,
    },
    {
      title: "Revision",
      value: rows.filter((r) => r.status === "Revision").length,
      icon: Pencil,
    },
    {
      title: "Copyright Due",
      value: rows.filter((r) => r.copyright === "Pending").length,
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[22px] font-semibold text-[#07113F]">
          Submissions
        </h1>
        <p className="mt-1 text-[14px] text-[#4B5579]">
          Manage all paper submissions received for IDEAX 2026.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold text-[#4B5579]">
                  {item.title}
                </p>
                <Icon size={18} className="text-[#005BFF]" />
              </div>
              <h2 className="mt-3 text-[20px] font-bold text-[#07113F]">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr_auto]">
        <div className="flex h-11 items-center rounded-lg border border-[#D9E3F3] px-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search paper..."
            className="flex-1 bg-transparent text-sm outline-none"
          />
          <Search size={18} className="text-[#4B5579]" />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-11 rounded-lg border border-[#D9E3F3] bg-white px-4 text-sm outline-none"
        >
          {statusOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select
          value={track}
          onChange={(e) => setTrack(e.target.value)}
          className="h-11 rounded-lg border border-[#D9E3F3] bg-white px-4 text-sm outline-none"
        >
          {tracks.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="h-11 rounded-lg border border-[#D9E3F3] bg-white px-4 text-sm outline-none"
        >
          {types.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <button
          onClick={resetFilters}
          className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#D9E3F3] px-4 text-sm font-semibold hover:bg-[#EEF4FF]"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#DDE6F5] bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#E7EDF8] px-4 py-3">
          <p className="text-sm font-semibold text-[#07113F]">
            Paper Submissions
          </p>

          <button className="flex items-center gap-2 rounded-lg bg-[#005BFF] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0047c7]">
            <Download size={15} />
            Export CSV
          </button>
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[1150px] text-left text-[12px]">
            <thead className="bg-[#FBFCFF]">
              <tr className="border-b border-[#E2E8F5] text-[11px] uppercase text-[#4B5579]">
                <th className="px-2 py-4">Paper ID</th>
                <th className="px-2 py-4">Paper Title</th>
                <th className="px-2 py-4">Author</th>
                <th className="px-2 py-4">Email</th>
                <th className="px-2 py-4">Track</th>
                <th className="px-2 py-4">Submitted</th>
                <th className="px-2 py-4">Status</th>
                <th className="px-2 py-4">Copyright</th>
                <th className="px-2 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedRows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#E7EDF8] hover:bg-[#F6F9FF]"
                >
                  <td className="px-2 py-4 text-xs font-semibold text-[#005BFF]">
                    {row.id}
                  </td>
                  <td className="max-w-[280px] px-2 py-4 text-xs font-semibold">
                    {row.title}
                  </td>
                  <td className="px-2 py-4 text-[12px]">{row.author}</td>
                  <td className="px-2 py-4 text-[12px]">{row.email}</td>
                  <td className="px-2 py-4 text-[12px]">{row.track}</td>
                  <td className="px-2 py-4 text-[12px]">{row.date}</td>
                  <td className="px-2 py-2 ">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-2 py-4 text-[12px]">{row.copyright}</td>
                  <td className="px-2 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelected(row)}
                        className="rounded border border-blue-200 p-2 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        onClick={() => updateStatus(row.id, "Accepted")}
                        className="rounded border border-green-200 p-2 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        <CheckCircle2 size={15} />
                      </button>
                      <button
                        onClick={() => updateStatus(row.id, "Rejected")}
                        className="rounded border border-red-200 p-2 text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        <XCircle size={15} />
                      </button>
                      <button
                        onClick={() => updateStatus(row.id, "Revision")}
                        className="rounded border border-purple-200 p-2 text-purple-600 hover:bg-purple-600 hover:text-white"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => deleteSubmission(row.id)}
                        className="rounded border border-gray-200 p-2 text-gray-600 hover:bg-gray-700 hover:text-white"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {paginatedRows.length === 0 && (
                <tr>
                  <td
                    colSpan="9"
                    className="px-4 py-10 text-center text-sm text-gray-500"
                  >
                    No submissions available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="grid gap-3 p-3 md:hidden">
          {paginatedRows.map((row) => (
            <div
              key={row.id}
              className="rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-semibold text-[#005BFF]">{row.id}</p>
              <h3 className="mt-2 text-sm font-semibold">{row.title}</h3>

              <div className="mt-3 space-y-1 text-xs text-[#4B5579]">
                <p><b>Author:</b> {row.author}</p>
                <p><b>Email:</b> {row.email}</p>
                <p><b>Track:</b> {row.track}</p>
                <p><b>Date:</b> {row.date}</p>
                <p><b>Copyright:</b> {row.copyright}</p>
              </div>

              <div className="mt-3">
                <StatusBadge status={row.status} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={() => setSelected(row)} className="rounded border p-2 text-blue-600">
                  <Eye size={15} />
                </button>
                <button onClick={() => updateStatus(row.id, "Accepted")} className="rounded border p-2 text-green-600">
                  <CheckCircle2 size={15} />
                </button>
                <button onClick={() => updateStatus(row.id, "Rejected")} className="rounded border p-2 text-red-600">
                  <XCircle size={15} />
                </button>
                <button onClick={() => updateStatus(row.id, "Revision")} className="rounded border p-2 text-purple-600">
                  <Pencil size={15} />
                </button>
                <button onClick={() => deleteSubmission(row.id)} className="rounded border p-2 text-gray-600">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-[#E7EDF8] px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing {filteredRows.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}
            {" "}to {Math.min(page * rowsPerPage, filteredRows.length)} of{" "}
            {filteredRows.length} entries
          </p>

          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded border px-3 py-2 disabled:opacity-40"
            >
              <ChevronLeft size={15} />
            </button>

            <button className="rounded border bg-[#005BFF] px-3 py-2 text-white">
              {page}
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded border px-3 py-2 disabled:opacity-40"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div>
                <h2 className="text-lg font-bold">Submission Details</h2>
                <p className="text-xs text-gray-500">{selected.id}</p>
              </div>

              <button onClick={() => setSelected(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-4 px-5 py-5 text-sm sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold text-[#005BFF]">
                  Paper Title
                </p>
                <p className="mt-1 font-semibold">{selected.title}</p>
              </div>

              <p><b>Author:</b> {selected.author}</p>
              <p><b>Email:</b> {selected.email}</p>
              <p><b>Track:</b> {selected.track}</p>
              <p><b>Type:</b> {selected.type}</p>
              <p><b>Submitted:</b> {selected.date}</p>
              <p><b>Copyright:</b> {selected.copyright}</p>

              <div>
                <p className="mb-2 font-semibold">Status</p>
                <StatusBadge status={selected.status} />
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t px-5 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() => updateStatus(selected.id, "Accepted")}
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Accept
              </button>

              <button
                onClick={() => updateStatus(selected.id, "Rejected")}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Reject
              </button>

              <button
                onClick={() => updateStatus(selected.id, "Revision")}
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Revision
              </button>

              <button
                onClick={() => setSelected(null)}
                className="rounded-lg border px-4 py-2 text-sm font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}