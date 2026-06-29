import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  Save,
} from "lucide-react";

export default function EditProfileModal({ open, onClose }) {
  const [form, setForm] = useState({
    fullName: "Rahul Arora",
    email: "rahul@example.com",
    phone: "",
    institution: "",
    country: "India",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));

    alert("Profile Updated Successfully");

    onClose();
  };

 
    return (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/50"
        />

        {/* Dialog Box */}
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.25 }}
          className="relative z-[1000] w-full max-w-3xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b px-5 sm:px-7 py-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Edit Profile
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Update your participant details
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Input
              icon={User}
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
            />

            <Input
              icon={Mail}
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <Input
              icon={Phone}
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <Input
              icon={Building2}
              label="Institution"
              name="institution"
              value={form.institution}
              onChange={handleChange}
            />

            <div>
              <label className="font-semibold mb-2 block">
                Country
              </label>

              <div className="relative">
                <Globe
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full h-12 border rounded-lg pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-[#0B63FF] text-white px-7 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#0053e6]"
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

  );
}

function Input({
  icon: Icon,
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="font-semibold mb-2 block">
        {label}
      </label>

      <div className="relative">
        <Icon
          size={18}
          className="absolute left-3 top-4 text-gray-400"
        />

        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-12 border rounded-lg pl-10"
        />
      </div>
    </div>
  );
}