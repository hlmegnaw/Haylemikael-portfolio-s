import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Globe, 
  Database, 
  GitBranch, 
  Cpu, 
  Network, 
  Shield, 
  Check, 
  Sparkles 
} from 'lucide-react';

export const Skills = ({ data }) => {
  const { skills } = data;
  const [activeTab, setActiveTab] = useState('All');

  const categories = skills.categories;

  const getCategoryIcon = (categoryName) => {
    switch (categoryName.toLowerCase()) {
      case 'programming languages':
        return <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'web development':
        return <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'databases & data management':
        return <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'software engineering':
        return <GitBranch className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'systems & networking':
        return <Network className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  const filteredCategories = activeTab === 'All' 
    ? categories 
    : categories.filter(c => c.name.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-navy-950/40 border-t border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Academic & Practical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Skills & Tooling
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Categorized technical proficiencies derived from university coursework, hands-on programming projects, and IT systems experience.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('All')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'All'
                  ? 'bg-blue-600 text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Domains
            </button>
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveTab(c.name.split(' ')[0])}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === c.name.split(' ')[0]
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {c.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-800 transition-colors shadow-2xs"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-2xs">
                    {getCategoryIcon(cat.name)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill List with Contextual Notes */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750/80"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                {cat.skills.length} verified competencies
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
