import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  GraduationCap, 
  Code2, 
  BrainCircuit, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const Hero = ({ data, onOpenCVModal }) => {
  const { personal, education } = data;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState('opacity-100 translate-y-0');

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setFadeState('opacity-0 -translate-y-2');
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % personal.rotatingTitles.length);
        // Fade in
        setFadeState('opacity-100 translate-y-0');
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, [personal.rotatingTitles.length]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Discreet background ambient gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Academic Profile Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>BSc Computer Science</span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Arba Minch University</span>
          </div>

          {/* Full Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            {personal.fullName}
          </h1>

          {/* Dynamic Rotating Headline */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <p 
              className={`text-lg sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 font-mono transition-all duration-300 transform ${fadeState}`}
            >
              &gt; {personal.rotatingTitles[currentTitleIndex]}
            </p>
          </div>

          {/* Authentic CS Introduction */}
          <p className="max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 font-normal">
            {personal.summary}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Verified Links: GitHub, LinkedIn, Email */}
          <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
            <span className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 font-semibold">
              Profiles & Contact
            </span>
            
            <div className="flex items-center gap-4">
              <a
                href={personal.github !== '[Add GitHub URL]' ? personal.github : '#contact'}
                target={personal.github !== '[Add GitHub URL]' ? '_blank' : '_self'}
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={personal.github !== '[Add GitHub URL]' ? 'GitHub Profile' : 'GitHub (Configurable)'}
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href={personal.linkedin !== '[Add LinkedIn URL]' ? personal.linkedin : '#contact'}
                target={personal.linkedin !== '[Add LinkedIn URL]' ? '_blank' : '_self'}
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={personal.linkedin !== '[Add LinkedIn URL]' ? 'LinkedIn Profile' : 'LinkedIn (Configurable)'}
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Academic Focus Highlights */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-lg bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
              <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">Academic Degree</div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">BSc Computer Science</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">CGPA: 3.54 / 4.00</div>
            </div>

            <div className="p-3.5 rounded-lg bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
              <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">Core Focus</div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Software & AI</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Algorithms & Systems</div>
            </div>

            <div className="p-3.5 rounded-lg bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
              <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">Technical Practice</div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Practical Projects</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Java & Full-Stack Web</div>
            </div>

            <div className="p-3.5 rounded-lg bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
              <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">Next Objective</div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">European Master's</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">AI & Software Systems</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
