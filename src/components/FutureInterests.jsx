import React from 'react';
import { 
  Compass, 
  Brain, 
  Database, 
  Layers, 
  MessageSquareCode, 
  ArrowRight, 
  Sparkles,
  Target,
  GraduationCap
} from 'lucide-react';

export const FutureInterests = ({ data }) => {
  const { futureInterests } = data;

  const getAreaIcon = (title) => {
    if (title.includes('Artificial Intelligence')) {
      return <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
    if (title.includes('Data Processing')) {
      return <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
    if (title.includes('Software Systems')) {
      return <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
    return <MessageSquareCode className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
  };

  return (
    <section id="future-interests" className="py-20 bg-white dark:bg-navy-950/40 border-t border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Master's Degree Aspirations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {futureInterests.sectionTitle}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            {futureInterests.subtitle}
          </p>
        </div>

        {/* Framing Statement Box */}
        <div className="mb-12 p-6 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 rounded-lg bg-blue-600 text-white flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Graduate Admissions Vision
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {futureInterests.statement}
            </p>
          </div>
        </div>

        {/* 4 Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futureInterests.areas.map((area, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs hover:border-blue-300 dark:hover:border-blue-800 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 shadow-2xs">
                    {getAreaIcon(area.title)}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    {area.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                  Academic & Practical Relevance
                </span>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium leading-normal">
                  {area.relevance}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
