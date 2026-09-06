import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer = ({ data }) => {
  const { personal } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLinkedinValid = personal.linkedin && !personal.linkedin.includes('[Add');
  const isGithubValid = personal.github && !personal.github.includes('[Add');

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {personal.fullName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Computer Science Graduate | Aspiring AI & Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            {isGithubValid ? (
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            ) : (
              <span className="text-slate-500 text-xs font-mono">GitHub</span>
            )}

            <span className="text-slate-700">•</span>

            {isLinkedinValid ? (
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            ) : (
              <span className="text-slate-500 text-xs font-mono">LinkedIn</span>
            )}

            <span className="text-slate-700">•</span>

            <a 
              href={`mailto:${personal.email}`} 
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

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
