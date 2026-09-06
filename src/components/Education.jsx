import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Brain, 
  Database, 
  Cpu, 
  Code, 
  Server, 
  Network,
  Sparkles
} from 'lucide-react';

export const Education = ({ data }) => {
  const { education } = data;

  const getInterestIcon = (interest) => {
    switch (interest.toLowerCase()) {
      case 'artificial intelligence':
      case 'machine learning':
        return <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'data processing':
      case 'database systems':
        return <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'software engineering':
        return <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'algorithms':
      case 'algorithms & complexity':
        return <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'computer systems':
      case 'computer systems & networks':
      case 'computer networks':
        return <Network className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-navy-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formal Education & Academic Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Undergraduate foundation in Computer Science, degree details, and focused fields of inquiry.
          </p>
        </div>

        {/* Grid: Primary Degree & Academic Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Degree Card (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs font-mono font-semibold mb-2">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 font-medium">
                    {education.institution}
                  </p>
                </div>

                <div className="text-right sm:text-right">
                  <div className="inline-flex flex-col items-end">
                    <span className="text-xs text-slate-400 font-mono">Cumulative GPA</span>
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400 font-mono">
                      {education.cgpa}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
                Location: {education.location} • Completed: {education.graduationYear}
              </div>

              {/* Core Coursework Overview */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Key Coursework Completed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
                  {education.keyCourses.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Standard 4-Year University Curriculum</span>
              <span className="font-mono text-blue-600 dark:text-blue-400">Arba Minch University</span>
            </div>
          </div>

          {/* Academic Interests (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Academic Interests
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Primary areas of scientific curiosity and postgraduate study objectives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {education.academicInterests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                  >
                    <div className="p-1.5 rounded bg-white dark:bg-slate-700 shadow-2xs">
                      {getInterestIcon(interest)}
                    </div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              Aligns with European Master's degree specializations in AI & Computing Systems.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
