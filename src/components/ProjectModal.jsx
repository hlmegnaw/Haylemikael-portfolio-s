import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Linkedin, 
  CheckCircle, 
  Layers, 
  AlertCircle, 
  Lightbulb, 
  Code2, 
  Terminal,
  FileCode,
  Globe,
  Database
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const isLiveDemoValid = project.liveDemo && !project.liveDemo.includes('[Add');
  const isGithubValid = project.github && !project.github.includes('[Add');
  const isLinkedinValid = project.linkedin && !project.linkedin.includes('[Add');

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-900">
              Project Case Study {project.number} / {project.total}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title and Top Actions */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                {project.subCategory}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-2.5">
              {isGithubValid ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-900 text-white dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <span 
                  title="Source code available on GitHub (URL configurable in portfolioData.js)"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 cursor-help"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub (Public Code)</span>
                </span>
              )}

              {isLiveDemoValid ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Application</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Status: {project.status}</span>
                </span>
              )}

              {isLinkedinValid && (
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Post</span>
                </a>
              )}
            </div>
          </div>

          {/* Academic Code / Architectural Illustration Banner */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200 p-5 font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-slate-400">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Architecture & Implementation Spec // {project.number}</span>
              </span>
              <span className="text-emerald-400 font-semibold">{project.status.toUpperCase()}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
              <div>
                <span className="text-slate-500 block mb-1">Primary Technologies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="bg-slate-800 px-2 py-0.5 rounded text-blue-300 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">Deployment / Distribution:</span>
                <span className="text-slate-300">
                  {project.id === 1 ? 'Public Desktop Software (Java)' : project.id === 2 ? 'Netlify Production Pipeline' : 'Hosted Web Application'}
                </span>
              </div>
            </div>
          </div>

          {/* 1. Overview */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              1. Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* 2 & 3. Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                2. Problem & Context
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                3. Applied Solution
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 4. Technical Focus */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              4. Technical Focus & Engineering Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.technicalFocus.map((focus, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              5. Confirmed Key Features
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Technical Challenges */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              6. Technical Challenges & Architectural Decisions
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.technicalChallenges}
            </p>
          </div>

          {/* 7. What I Learned */}
          <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-mono text-blue-700 dark:text-blue-300 font-semibold flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              7. Learning Outcomes & Engineering Growth
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.whatILearned}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {project.status === 'Completed' ? '✓ Fully Implemented & Tested' : '⚙ In Progress / Preparing Deployment'}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
