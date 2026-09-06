import React, { useEffect } from 'react';
import { 
  X, 
  FileDown, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Code2, 
  CheckCircle2, 
  ExternalLink,
  Award
} from 'lucide-react';

export const CVModal = ({ data, onClose }) => {
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = data.cv.downloadUrl;
    link.download = 'Haylemikael_Gurba_Goshe_Europass_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="font-semibold text-sm text-slate-900 dark:text-white">
              Europass Curriculum Vitae Overview
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Europass Summary */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8 font-sans text-sm text-slate-700 dark:text-slate-300">
          
          {/* Header Profile */}
          <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {data.personal.fullName}
            </h2>
            <p className="text-blue-600 dark:text-blue-400 font-medium font-mono text-xs sm:text-sm mt-1">
              {data.personal.headline}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>Location: {data.personal.location}</span>
              <span>•</span>
              <span>Target: European Master's Programs</span>
            </div>
          </div>

          {/* Education Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>1. Formal Education</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {data.education.degree}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    {data.education.institution} ({data.education.graduationYear})
                  </p>
                </div>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                  CGPA: {data.education.cgpa}
                </span>
              </div>
              <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Coursework: </span>
                {data.education.keyCourses.join(', ')}
              </div>
            </div>
          </div>

          {/* Work / Internship Experience */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>2. Technical Experience</span>
            </div>
            {data.experience.map((exp) => (
              <div key={exp.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      {exp.organization} — {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {exp.responsibilities.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              <FolderGit2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>3. Verified Technical Projects</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {data.projects.map((p) => (
                <div key={p.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                  <div className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold mb-1">
                    {p.number} // {p.category}
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {p.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Standard Europass Layout (PDF Format)
          </span>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Europass CV (.pdf)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
