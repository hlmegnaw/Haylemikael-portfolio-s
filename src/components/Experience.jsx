import React from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Wrench, 
  Cpu, 
  Monitor, 
  Printer, 
  ShieldCheck 
} from 'lucide-react';

export const Experience = ({ data }) => {
  const { experience } = data;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-navy-950/40 border-t border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical IT & Banking Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Internship & Work Experience
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Hands-on technical contributions, hardware and software maintenance, and IT support in professional enterprise settings.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm"
            >
              {/* Top Banner */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Enterprise Banking IT
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {item.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      {item.organization}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 self-start">
                  <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Key Technical Responsibilities */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 font-semibold mb-4 flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5" />
                  Key Responsibilities & Practical Contributions
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Environment */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-2">
                  Environment & Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
