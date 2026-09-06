import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * HMGLogo — circular monogram where G wraps around H & M
 * G forms the outer arc/ring, H and M sit inside its open space.
 * Colors match the portfolio's blue/slate palette.
 */
export const HMGLogo = ({ size = 36, className = '' }) => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  // Portfolio-matched palette
  const colors = dark
    ? { g: '#e2e8f0', h: '#6ea4ef', m: '#9ec4f5' }   // slate-200, blue-400, blue-300
    : { g: '#1d4fb3', h: '#2b65d6', m: '#4381e6' };   // academic-700, academic-600, academic-500

  const bg = dark ? '#0b132b' : '#ffffff';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HMG Logo"
      className={className}
    >
      {/* Circular background */}
      <circle cx="50" cy="50" r="48" fill={bg} stroke={colors.g} strokeWidth="2" />

      {/* ── G arc ──
          G is drawn as a large open circle arc (the outer ring of the mark)
          with the classic G inner bar/shelf on the right.
          Arc: starts at ~60° and sweeps ~280° (leaving gap top-right)
      */}
      <g>
        {/* Outer G arc — thick stroke arc forming the letter G */}
        <path
          d={`
            M 50 10
            A 40 40 0 1 0 88 62
            L 68 62
            L 68 50
          `}
          fill="none"
          stroke={colors.g}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* ── H — left of center inside G's open area ── */}
      <g fill={colors.h}>
        {/* Left vertical stroke */}
        <rect x="24" y="33" width="7" height="34" rx="3.5" />
        {/* Right vertical stroke */}
        <rect x="41" y="33" width="7" height="34" rx="3.5" />
        {/* Crossbar */}
        <rect x="24" y="47" width="24" height="6" rx="3" />
      </g>

      {/* ── M — right of center inside G's open area ── */}
      <g fill={colors.m}>
        {/* Left vertical */}
        <rect x="53" y="33" width="7" height="34" rx="3.5" />
        {/* Right vertical */}
        <rect x="72" y="33" width="7" height="34" rx="3.5" />
        {/* Left diagonal (down from top-left to center) */}
        <polygon points="53,33 60,33 66,52 59,52" />
        {/* Right diagonal (down from center to top-right) */}
        <polygon points="66,52 73,52 79,33 72,33" />
      </g>
    </svg>
  );
};
