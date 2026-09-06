import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { portfolioData } from './data/portfolioData';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { FutureInterests } from './components/FutureInterests';
import { CVSection } from './components/CVSection';
import { CVModal } from './components/CVModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 selection:bg-blue-600 selection:text-white">
        
        {/* Sticky Academic Navigation */}
        <Navbar 
          data={portfolioData} 
          onOpenCVModal={() => setIsCVModalOpen(true)} 
        />

        <main>
          {/* Hero Section */}
          <Hero 
            data={portfolioData} 
            onOpenCVModal={() => setIsCVModalOpen(true)} 
          />

          {/* About Me Section */}
          <About data={portfolioData} />

          {/* Education & Academic Interests */}
          <Education data={portfolioData} />

          {/* Practical Work & Internship Experience */}
          <Experience data={portfolioData} />

          {/* 3 Verified Progression Projects */}
          <Projects data={portfolioData} />

          {/* Categorized Skills (No fake percentages) */}
          <Skills data={portfolioData} />

          {/* Certifications & Training */}
          <Certifications data={portfolioData} />

          {/* Where I Want to Go Next (Master's Aspirations) */}
          <FutureInterests data={portfolioData} />

          {/* Europass CV Highlights & Download CTA */}
          <CVSection 
            data={portfolioData} 
            onOpenCVModal={() => setIsCVModalOpen(true)} 
          />

          {/* Contact Section */}
          <Contact data={portfolioData} />
        </main>

        {/* Professional Footer */}
        <Footer data={portfolioData} />

        {/* Global CV Preview Modal */}
        {isCVModalOpen && (
          <CVModal 
            data={portfolioData} 
            onClose={() => setIsCVModalOpen(false)} 
          />
        )}

      </div>
    </ThemeProvider>
  );
}

export default App;
