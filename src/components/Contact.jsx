import React, { useState } from 'react';
import {
  Mail,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export const Contact = ({ data }) => {
  const { contact, personal } = data;

  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setStatusMessage({
      type: 'success',
      text: 'Opening your default email client to send your message. You can also contact directly via the email above!'
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isGithubValid =
    personal.github && !personal.github.includes('[Add');

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-navy-950/40 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Academic & Professional Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {contact.heading}
          </h2>

          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-6">

            {/* Primary Email Address */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                Primary Email Address
              </span>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 truncate">
                  {personal.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  type="button"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Professional Networks & Location */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">

              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Professional Networks & Location
              </span>

              {/* Gmail */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750">
                <div className="flex items-center gap-3">

                  <div className="p-2 rounded bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400">
                    <Mail className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                      Gmail
                    </span>

                    <span className="text-[11px] font-mono text-slate-500">
                      {personal.email}
                    </span>
                  </div>

                </div>

                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
                >
                  <span>Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750">
                <div className="flex items-center gap-3">

                  <div className="p-2 rounded bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400">
                    <MessageCircle className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                      WhatsApp
                    </span>

                    <span className="text-[11px] font-mono text-slate-500">
                      @haylemikael1
                    </span>
                  </div>

                </div>

                <a
                  href="https://wa.me/251974543871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

              </div>



              {/* GitHub */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750">
                <div className="flex items-center gap-3">

                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <Github className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                      GitHub
                    </span>

                    <span className="text-[11px] font-mono text-slate-500">
                      Code Repositories
                    </span>
                  </div>

                </div>

                {isGithubValid ? (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Repos</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400">
                    Configurable
                  </span>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750">

                <div className="p-2 rounded bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                    Current Location
                  </span>

                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {contact.location}
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Academic / Inquiry Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">

              {/* Form Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">

                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Send Direct Inquiry
                </h3>

                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Direct Mailto Integration
                </span>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                      Your Name / Institution *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Schmidt / Admissions Team"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                      Your Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="admissions@university.eu"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                    Subject / Program Name *
                  </label>

                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="MSc in Computer Science ..etc"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message or academic inquiry..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Area */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">

                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Transparent mailto client trigger (no third-party tracking).
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>

                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-300 mt-3">
                    {statusMessage.text}
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};