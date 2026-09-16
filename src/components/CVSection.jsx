import React from 'react';
import {
  FileText,
  FileDown,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const CVSection = ({ data }) => {
  const { cv } = data;

  return (
    <section id="cv-section" className="py-20 bg-slate-50 dark:bg-navy-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm relative overflow-hidden">

          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>

          <div className="relative z-10">

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <div className="max-w-3xl space-y-4">

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Want the full picture?
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Explore my complete academic and professional background through my Curriculum Vitae.
              </p>

              {/* Highlights */}
              <div className="pt-2 space-y-2.5">
                {cv.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-3">

                {/* Download PDF */}
                <a
                  href={cv.downloadUrl}
                  download="Haylemikael_Gurba_Goshe_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download My CV</span>
                </a>

                {/* View Real Europass CV */}
                <a
                  href="https://europa.eu/europass/eportfolio/screen/share/df5187da-6f07-4215-b1b8-50f30676278c?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>View My Europass CV</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};