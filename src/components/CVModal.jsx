import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

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

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full h-[95vh] max-w-6xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">

          <div>
            <h2 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
              Curriculum Vitae
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Haylemikael Gurba Goshe
            </p>
          </div>

          <div className="flex items-center gap-2">

            {/* Open Europass */}
            <a
              href="https://europa.eu/europass/eportfolio/screen/share/df5187da-6f07-4215-b1b8-50f30676278c?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Europass</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close CV viewer"
            >
              <X className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[calc(95vh-65px)] bg-slate-100 dark:bg-slate-800">

          <iframe
            src={data.cv.downloadUrl}
            title="Haylemikael Gurba Goshe CV"
            className="w-full h-full border-0"
          />

        </div>

      </div>
    </div>
  );
};