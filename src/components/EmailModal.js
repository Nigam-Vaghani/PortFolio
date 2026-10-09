"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  X,
  Send,
  User,
  Linkedin,
  Github,
  Globe,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Coffee
} from "lucide-react";

export default function EmailModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    github: "",
    portfolio: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill out all mandatory fields (Name, Email, and Message).");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const targetEndpoint = process.env.NEXT_PUBLIC_LAMBDA_API_URL || "/api/send-email";

    try {
      const response = await fetch(targetEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          linkedin: formData.linkedin.trim(),
          github: formData.github.trim(),
          portfolio: formData.portfolio.trim(),
          message: formData.message.trim(),
          to: "hello@nigamvaghani.dev",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error(data.message || `Server responded with status ${response.status}`);
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setErrorMessage(err.message || "Failed to send message. Please try again.");
      setStatus("error");
    }
  };

  const handleResetAndClose = () => {
    setStatus("idle");
    setErrorMessage("");
    setFormData({
      name: "",
      email: "",
      linkedin: "",
      github: "",
      portfolio: "",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Warm Espresso Overlay with Backdrop Blur matching portfolio palette */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1a120b]/65 backdrop-blur-md"
          />

          {/* Modal Card matching cream, espresso, caramel design system */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-xl rounded-2xl bg-[var(--cream)] border border-[var(--latte)] text-[var(--ink)] shadow-[0_20px_50px_rgba(60,30,10,0.25)] overflow-hidden my-auto z-10"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--caramel)] via-[var(--gold)] to-[var(--caramel)]" />

            {/* Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[var(--border)] bg-[var(--cream-dark)]/60">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--espresso)] text-[var(--gold)] shadow-sm">
                  <Coffee size={18} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--espresso)] flex items-center gap-2">
                    Send Email <Sparkles size={16} className="text-[var(--caramel)]" />
                  </h3>
                  <p className="text-xs text-[var(--muted)]">
                    Delivers to <span className="text-[var(--espresso)] font-mono font-semibold">hello@nigamvaghani.dev</span>
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--espresso)] hover:bg-[var(--latte)]/50 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {status === "success" ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--espresso)]">Message Sent Successfully!</h4>
                  <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been routed to{" "}
                    <span className="text-[var(--espresso)] font-mono font-semibold">hello@nigamvaghani.dev</span>. I'll get back to you as soon as possible.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleResetAndClose}
                      className="px-6 py-2.5 rounded-xl bg-[var(--espresso)] hover:bg-[var(--mocha)] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && errorMessage && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm">
                      <AlertCircle size={18} className="shrink-0 mt-0.5 text-rose-500" />
                      <div>{errorMessage}</div>
                    </div>
                  )}

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[var(--espresso)] mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-3 text-[var(--muted)]" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[var(--latte)] text-sm text-[var(--espresso)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[var(--caramel)] focus:ring-1 focus:ring-[var(--caramel)] transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[var(--espresso)] mb-1.5">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-3 text-[var(--muted)]" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[var(--latte)] text-sm text-[var(--espresso)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[var(--caramel)] focus:ring-1 focus:ring-[var(--caramel)] transition-all shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Optional Links Section */}
                  <div className="pt-1 space-y-3">
                    <p className="text-[11px] font-bold tracking-wider text-[var(--mocha)] uppercase">
                      Optional Links
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* LinkedIn */}
                      <div>
                        <label className="block text-[11px] font-medium text-[var(--muted)] mb-1">
                          LinkedIn Link
                        </label>
                        <div className="relative">
                          <Linkedin size={14} className="absolute left-2.5 top-2.5 text-[var(--muted)]" />
                          <input
                            type="url"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            placeholder="linkedin.com/in/..."
                            className="w-full pl-8 pr-2.5 py-2 rounded-xl bg-white border border-[var(--latte)] text-xs text-[var(--espresso)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[var(--caramel)] transition-all shadow-2xs"
                          />
                        </div>
                      </div>

                      {/* GitHub */}
                      <div>
                        <label className="block text-[11px] font-medium text-[var(--muted)] mb-1">
                          GitHub Link
                        </label>
                        <div className="relative">
                          <Github size={14} className="absolute left-2.5 top-2.5 text-[var(--muted)]" />
                          <input
                            type="url"
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            placeholder="github.com/..."
                            className="w-full pl-8 pr-2.5 py-2 rounded-xl bg-white border border-[var(--latte)] text-xs text-[var(--espresso)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[var(--caramel)] transition-all shadow-2xs"
                          />
                        </div>
                      </div>

                      {/* Portfolio */}
                      <div>
                        <label className="block text-[11px] font-medium text-[var(--muted)] mb-1">
                          Portfolio Link
                        </label>
                        <div className="relative">
                          <Globe size={14} className="absolute left-2.5 top-2.5 text-[var(--muted)]" />
                          <input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            placeholder="yourwebsite.com"
                            className="w-full pl-8 pr-2.5 py-2 rounded-xl bg-white border border-[var(--latte)] text-xs text-[var(--espresso)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[var(--caramel)] transition-all shadow-2xs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Field (Mandatory) */}
                  <div className="pt-1">
                    <label className="block text-xs font-semibold text-[var(--espresso)] mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Nigam, I'd like to discuss..."
                      className="w-full p-3 rounded-xl bg-white border border-[var(--latte)] text-sm text-[var(--espresso)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[var(--caramel)] focus:ring-1 focus:ring-[var(--caramel)] transition-all resize-none shadow-2xs"
                    />
                  </div>

                  {/* Submit & Cancel Buttons */}
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2.5 rounded-xl border border-[var(--latte)] bg-white hover:bg-[var(--cream-dark)] text-xs font-semibold text-[var(--espresso)] transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--espresso)] hover:bg-[var(--mocha)] text-white font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={16} className="animate-spin text-[var(--gold)]" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} className="text-[var(--gold)]" />
                          Send Email
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
