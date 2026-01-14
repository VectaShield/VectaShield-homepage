import React, { useMemo } from 'react';

const ParticleBackground = () => {
  const particles = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    const N = isMobile ? 15 : 25;
    return Array.from({ length: N }).map((_, i) => {
      const size = Math.random() * 10 + 5;
      const dur = Math.random() * 8 + 8;
      const delay = i * 0.5 + Math.random();         // stagger + jitter
      const drift1 = Math.random() * 60 - 30;         // -30..30
      const drift2 = Math.random() * 80 - 40;         // -40..40
      const rotate = Math.random() * 20 - 10;         // -10..10
      const opacity = Math.random() * 0.4 + 0.4;      // 0.4–0.8
      return {
        id: i + Math.random(),
        left: `${Math.random() * 100}%`,
        size,
        dur,
        delay,
        drift1,
        drift2,
        rotate,
        opacity,
      };
    });
  }, []);

  return (
    <div className="particle-layer pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            // Soft ember without blur/shadow:
            background: 'radial-gradient(circle, var(--colorPalette2) 0%, rgba(255,255,255,0) 70%)',
            opacity: p.opacity,
            // Per-instance CSS vars read by keyframes:
            ['--dur']: `${p.dur}s`,
            ['--delay']: `${p.delay}s`,
            ['--drift1']: `${p.drift1}px`,
            ['--drift2']: `${p.drift2}px`,
            ['--rot']: `${p.rotate}deg`,
          }}
        />
      ))}
      <style>{`
        .particle-layer {
          position: fixed;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          transform: translateZ(0); /* force compositor */
          contain: layout paint;    /* isolate from page */
        }
        
        .particle {
          position: absolute;
          top: 0;
          border-radius: 9999px;
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translate3d(0, 105vh, 0) scale(0.7) rotate(0deg);
          animation: ember var(--dur) linear var(--delay) infinite;
        }

        @keyframes ember {
          0%   { transform: translate3d(0, 105vh, 0)   scale(0.7)  rotate(0);    opacity: 0; }
          33%  { transform: translate3d(var(--drift1), 60vh,  0)   scale(1.0)  rotate(var(--rot)); opacity: 1; }
          66%  { transform: translate3d(var(--drift2), 15vh,  0)   scale(0.95) rotate(calc(var(--rot) * -0.5)); opacity: 0.8; }
          100% { transform: translate3d(0, -10vh, 0)            scale(0.8)  rotate(0);    opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .particle { animation: none; opacity: 0.15; }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;
