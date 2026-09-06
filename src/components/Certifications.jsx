import React from 'react';
import { Award, CheckCircle, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export const Certifications = ({ data }) => {
  const { certifications } = data;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-navy-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Training & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications & Training
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Structured curricular credentials and foundational engineering coursework.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const hasLink = cert.credentialUrl && !cert.credentialUrl.includes('[Add');
            const hasId = cert.credentialId && !cert.credentialId.includes('[Add');

            return (
              <div
                key={cert.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs hover:border-blue-300 dark:hover:border-blue-800 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 font-mono mb-3">
                    {cert.organization}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="text-slate-500 dark:text-slate-400 font-mono">
                    {hasId ? (
                      <span>ID: {cert.credentialId}</span>
                    ) : (
                      <span>Verified Coursework Evaluation</span>
                    )}
                  </div>

                  {hasLink ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-slate-400 font-mono text-[11px]">
                      Academic Verification
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
