import React from 'react';
import { 
  BookOpen, 
  Code, 
  Cpu, 
  Database, 
  GraduationCap, 
  CheckCircle2, 
  Compass,
  FileCode2,
  Binary
} from 'lucide-react';

export const About = ({ data }) => {
  const { personal, education } = data;

  return (
    <section id="about" className="py-20 bg-white dark:bg-navy-950/40 border-t border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
           A solid computational foundation oriented toward practical problem solving and future graduate research.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {personal.aboutNarrative.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Pillars */}
            <div className="pt-4">
              <h3 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 font-semibold mb-3">
                Core Academic & Engineering Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personal.aboutNarrative.coreStrengths.map((strength, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-navy-900/80 p-6 shadow-sm">
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    Academic Profile
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Undergraduate Credential
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div className="py-5 space-y-4">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Degree Awarded</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{education.degree}</span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">University</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{education.institution}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Graduation Year</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{education.graduationYear}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Cumulative GPA</span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 font-mono">{education.cgpa}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Admissions Objective</span>
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    European Master's Degree (Information Technology, AI, Data Processing, Software Systems)
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Verified Academic Data
                </span>
                <span>Arba Minch, Ethiopia</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
