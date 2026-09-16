import React from 'react';
import { Github, Mail, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer = ({ data }) => {
  const { personal } = data;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const isGithubValid =
    personal.github && !personal.github.includes('[Add');

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">

          {/* Identity */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {personal.fullName}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Computer Science Graduate | Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-sm">

            {/* GitHub */}
            {isGithubValid ? (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            ) : (
              <span className="text-slate-500 text-xs font-mono flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </span>
            )}

            <span className="text-slate-700">•</span>

            {/* WhatsApp */}
            <a
              href="https://wa.me/251974543871"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <span className="text-slate-700">•</span>

            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=haylemikaelgurba2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            type="button"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono text-center sm:text-left">

          <div>
            © 2026 Haylemikael Gurba Goshe. All rights reserved.
          </div>

          <div>
            Academic & Technical Portfolio • Arba Minch University Graduate
          </div>

        </div>

      </div>
    </footer>
  );
};