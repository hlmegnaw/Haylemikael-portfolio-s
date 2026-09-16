import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Terminal,
  ArrowUpRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Projects = ({ data }) => {
  const { projects } = data;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    'All',
    'Full-Stack',
    'Computer Graphics'
  ];

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'All') return true;

    if (activeFilter === 'Full-Stack') {
      return (
        proj.category === 'Full-Stack' ||
        proj.subCategory.includes('Full-Stack')
      );
    }

    if (activeFilter === 'Computer Graphics') {
      return (
        proj.category === 'Computer Graphics' ||
        proj.subCategory.includes('Graphics') ||
        proj.technologies.some((t) =>
          t.toLowerCase().includes('opengl')
        )
      );
    }

    return true;
  });

  const getStatusBadge = (project) => {
    const isLive =
      project.isLive ||
      (project.liveDemo &&
        !project.liveDemo.includes('[Add'));

    if (isLive) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          LIVE
        </span>
      );
    }

    if (project.status === 'Completed') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
          <CheckCircle2 className="w-3 h-3" />
          COMPLETED
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
        <Clock className="w-3 h-3" />
        {project.status.toUpperCase()}
      </span>
    );
  };

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 dark:bg-navy-900/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Academic & Practical Progression</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>

            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Demonstrating progressive development across full-stack
              web development, database-driven systems, and interactive
              computer graphics.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs self-start md:self-auto">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Progression Indicator Banner */}
        <div className="mb-8 p-3.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 flex items-center justify-between text-xs font-mono text-blue-800 dark:text-blue-300">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>

            <span>
              Progression Track: 01 React & Node.js Full-Stack
              → 02 PHP & MySQL Web Development
              → 03 C++ & OpenGL Computer Graphics
            </span>
          </span>

          <span className="hidden sm:inline-block text-slate-500 dark:text-slate-400">
            {filteredProjects.length} of {projects.length} Projects Shown
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isLiveDemoValid =
              project.liveDemo &&
              !project.liveDemo.includes('[Add');

            const isGithubValid =
              project.github &&
              !project.github.includes('[Add');

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >

                {/* Card Content */}
                <div>

                  {/* Top Header with Number and Status */}
                  <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center gap-2">

                      <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/70 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                        {project.number} / {project.total}
                      </span>

                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {project.category}
                      </span>

                    </div>

                    {getStatusBadge(project)}
                  </div>

                  {/* Visual Preview */}
                  <div className="p-5 pb-3">
                    <div className="relative rounded-lg bg-slate-900 dark:bg-black/50 border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-hidden group-hover:border-blue-500/50 transition-colors">

                      {/* Preview Header */}
                      <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-800 pb-2 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-blue-400" />

                          <span>
                            {project.id === 1
                              ? 'ECMS.jsx'
                              : project.id === 2
                              ? 'vital_event.php'
                              : 'AMU_Campus.cpp'}
                          </span>
                        </span>

                        <span className="text-slate-400">
                          {project.subCategory}
                        </span>
                      </div>

                      {/* Project Preview */}
                      <div className="space-y-1 text-slate-400 text-[11px]">

                        {/* Project 01 — ECMS */}
                        {project.id === 1 && (
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img
                              src="/ecms-project.png"
                              alt="Election Control & Management System"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Project 02 — Vital Event Registration System */}
                        {project.id === 2 && (
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img
                              src="/vital.png"
                              alt="Vital Event Registration System"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Project 03 — AMU Campus Visualization */}
                        {project.id === 3 && (
                          <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                            <video
                              src="/Amu_Demo.mp4"
                              controls
                              playsInline
                              className="w-full h-full object-cover"
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}

                      </div>

                      {/* Netlify Deployment Badge */}
                      {project.deployedWithNetlify && (
                        <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-cyan-400 tracking-wider">
                            DEPLOYED WITH NETLIFY
                          </span>

                          <span className="text-[10px] text-slate-500">
                            Continuous Integration
                          </span>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="px-5 pt-2 pb-4">

                    {/* Clickable Project Title */}
                    {isLiveDemoValid ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      >
                        {project.title}
                        <ExternalLink className="w-4 h-4 opacity-70" />
                      </a>
                    ) : (
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    )}

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}

                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-slate-50 dark:bg-slate-800">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                  </div>

                </div>

                {/* Card Actions */}
                <div className="p-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1 text-slate-500">

                    {/* GitHub */}
                    {isGithubValid ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        title="GitHub repository not yet available"
                        className="p-1.5 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-help"
                      >
                        <Github className="w-4 h-4" />
                      </span>
                    )}

                    {/* Live Demo */}
                    {isLiveDemoValid && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
};