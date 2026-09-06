import React from 'react';
import { 
  FileText, 
  FileDown, 
  Eye, 
  CheckCircle2, 
  GraduationCap, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export const CVSection = ({ data, onOpenCVModal }) => {
  const { cv, personal } = data;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv.downloadUrl;
    link.download = 'Haylemikael_Gurba_Goshe_Europass_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <span>Standard Curriculum Vitae</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Want the full picture?
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Explore my complete academic and professional background in my Europass CV.
                </p>

                {/* Highlights List */}
                <div className="pt-2 space-y-2.5">
                  {cv.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Europass CV</span>
                  </button>

                  <button
                    onClick={onOpenCVModal}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
                  >
                    <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>View CV Online</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Visual CV Document Card */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 p-6 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4 text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>Europass Standard</span>
                    </span>
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded font-bold">
                      PDF
                    </span>
                  </div>

                  <div className="space-y-3 text-slate-600 dark:text-slate-400">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Applicant</span>
                      <span className="text-slate-900 dark:text-white font-medium">{personal.fullName}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Degree & Institution</span>
                      <span className="text-slate-900 dark:text-white font-medium">BSc Computer Science • Arba Minch Univ.</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Evaluation Metric</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">Cumulative GPA: 3.54 / 4.00</span>
                    </div>

                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
                      Designed to meet European academic guidelines for Master's admissions committees.
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
