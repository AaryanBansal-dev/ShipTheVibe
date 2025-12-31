'use client';

import React, { useMemo } from 'react';

// Pre-computed star positions for consistent rendering
const STAR_POSITIONS = [
  { left: 5, top: 8, delay: 0.3, opacity: 0.5 },
  { left: 12, top: 22, delay: 1.2, opacity: 0.7 },
  { left: 18, top: 5, delay: 0.8, opacity: 0.4 },
  { left: 25, top: 35, delay: 1.5, opacity: 0.6 },
  { left: 32, top: 12, delay: 0.1, opacity: 0.8 },
  { left: 38, top: 28, delay: 1.8, opacity: 0.5 },
  { left: 45, top: 6, delay: 0.5, opacity: 0.7 },
  { left: 52, top: 42, delay: 1.1, opacity: 0.4 },
  { left: 58, top: 18, delay: 0.7, opacity: 0.6 },
  { left: 65, top: 32, delay: 1.4, opacity: 0.8 },
  { left: 72, top: 9, delay: 0.2, opacity: 0.5 },
  { left: 78, top: 25, delay: 1.6, opacity: 0.7 },
  { left: 85, top: 14, delay: 0.9, opacity: 0.4 },
  { left: 92, top: 38, delay: 1.3, opacity: 0.6 },
  { left: 8, top: 45, delay: 0.4, opacity: 0.8 },
  { left: 15, top: 52, delay: 1.0, opacity: 0.5 },
  { left: 22, top: 48, delay: 0.6, opacity: 0.7 },
  { left: 35, top: 55, delay: 1.7, opacity: 0.4 },
  { left: 42, top: 50, delay: 0.3, opacity: 0.6 },
  { left: 55, top: 58, delay: 1.9, opacity: 0.8 },
  { left: 62, top: 45, delay: 0.8, opacity: 0.5 },
  { left: 75, top: 52, delay: 1.2, opacity: 0.7 },
  { left: 82, top: 48, delay: 0.1, opacity: 0.4 },
  { left: 95, top: 55, delay: 1.5, opacity: 0.6 },
  { left: 3, top: 30, delay: 0.9, opacity: 0.8 },
  { left: 28, top: 20, delay: 1.4, opacity: 0.5 },
  { left: 48, top: 15, delay: 0.2, opacity: 0.7 },
  { left: 68, top: 40, delay: 1.8, opacity: 0.4 },
  { left: 88, top: 22, delay: 0.7, opacity: 0.6 },
  { left: 10, top: 58, delay: 1.1, opacity: 0.8 },
];

export default function ShipAnimation() {
  const stars = useMemo(() => STAR_POSITIONS, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-2xl border border-border bg-surface-elevated/30">
      {/* Stars background */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity * 0.6,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute top-8 right-16 w-16 h-16 bg-gradient-to-br from-accent/40 to-accent-muted/30 rounded-full shadow-lg" style={{ boxShadow: '0 0 40px rgba(212, 165, 116, 0.2)' }} />

      {/* SVG Scene */}
      <svg
        viewBox="0 0 800 300"
        className="absolute bottom-0 w-full h-auto"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Water gradient - warm tones */}
        <defs>
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1714" />
            <stop offset="100%" stopColor="#0f0d0b" />
          </linearGradient>
          <linearGradient id="shipHull" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b7355" />
            <stop offset="100%" stopColor="#5c4a38" />
          </linearGradient>
          <linearGradient id="sailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5f0e8" />
            <stop offset="100%" stopColor="#d4cfc5" />
          </linearGradient>
        </defs>

        {/* Water background */}
        <rect x="0" y="180" width="800" height="120" fill="url(#waterGradient)" />

        {/* Animated waves - back layer */}
        <g className="animate-wave-slow">
          <path
            d="M-100,200 Q0,180 100,200 T300,200 T500,200 T700,200 T900,200 L900,300 L-100,300 Z"
            fill="#252119"
            opacity="0.5"
          />
        </g>

        {/* Ship group with floating animation */}
        <g className="ship-float" transform="translate(300, 0)">
          {/* Ship hull */}
          <path
            d="M100,220 L130,180 L270,180 L300,220 L280,240 L120,240 Z"
            fill="url(#shipHull)"
            stroke="#4a3f32"
            strokeWidth="2"
          />
          
          {/* Hull detail line */}
          <path
            d="M135,200 L265,200"
            stroke="#4a3f32"
            strokeWidth="2"
            fill="none"
          />

          {/* Mast */}
          <rect x="195" y="80" width="8" height="100" fill="#5c4a38" />
          
          {/* Cross beam */}
          <rect x="150" y="100" width="100" height="6" fill="#5c4a38" />
          
          {/* Main sail */}
          <path
            d="M155,105 L195,105 L195,170 Q175,175 155,170 Z"
            fill="url(#sailGradient)"
            stroke="#a89f94"
            strokeWidth="1"
          />
          
          {/* Secondary sail */}
          <path
            d="M205,105 L245,105 L245,170 Q225,175 205,170 Z"
            fill="url(#sailGradient)"
            stroke="#a89f94"
            strokeWidth="1"
          />

          {/* Flag - copper accent */}
          <polygon
            points="199,80 230,90 199,100"
            fill="#d4a574"
            className="animate-flag"
          />

          {/* Cabin */}
          <rect x="230" y="190" width="35" height="25" fill="#5c4a38" stroke="#4a3f32" strokeWidth="1" />
          <rect x="238" y="195" width="8" height="8" fill="#d4a574" opacity="0.6" />
          <rect x="252" y="195" width="8" height="8" fill="#d4a574" opacity="0.6" />
        </g>

        {/* Animated waves - front layer */}
        <g className="animate-wave">
          <path
            d="M-100,220 Q0,200 100,220 T300,220 T500,220 T700,220 T900,220 L900,300 L-100,300 Z"
            fill="#1a1714"
            opacity="0.7"
          />
        </g>

        {/* More front waves */}
        <g className="animate-wave-fast">
          <path
            d="M-100,240 Q50,225 150,240 T350,240 T550,240 T750,240 T950,240 L950,300 L-100,300 Z"
            fill="#0f0d0b"
            opacity="0.9"
          />
        </g>

        {/* Sparkles on water - copper tones */}
        <circle cx="200" cy="250" r="2" fill="#d4a574" opacity="0.4" className="animate-sparkle" />
        <circle cx="450" cy="235" r="1.5" fill="#d4a574" opacity="0.3" className="animate-sparkle-delayed" />
        <circle cx="650" cy="255" r="2" fill="#d4a574" opacity="0.25" className="animate-sparkle" />
        <circle cx="350" cy="260" r="1" fill="#d4a574" opacity="0.35" className="animate-sparkle-delayed" />
      </svg>

      <style jsx>{`
        .ship-float {
          animation: shipFloat 4s ease-in-out infinite;
        }
        
        @keyframes shipFloat {
          0%, 100% {
            transform: translate(300px, 0) rotate(-1deg);
          }
          50% {
            transform: translate(300px, -8px) rotate(1deg);
          }
        }

        .animate-wave {
          animation: waveMove 6s ease-in-out infinite;
        }
        
        .animate-wave-slow {
          animation: waveMove 8s ease-in-out infinite reverse;
        }
        
        .animate-wave-fast {
          animation: waveMove 4s ease-in-out infinite;
        }

        @keyframes waveMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
        }

        .animate-flag {
          animation: flagWave 0.5s ease-in-out infinite alternate;
          transform-origin: 199px 90px;
        }

        @keyframes flagWave {
          0% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(0.9);
          }
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-sparkle-delayed {
          animation: sparkle 2s ease-in-out infinite 1s;
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
