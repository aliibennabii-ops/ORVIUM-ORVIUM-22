import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particles system in strict Ivory (#E6E5E4) tones
    let particles: Particle[] = [];
    const numParticles = Math.min(Math.floor((width * height) / 32000), 45);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.6 + 0.8,
          baseAlpha: Math.random() * 0.25 + 0.1,
        });
      }
    };

    initParticles();

    let waveOffset = 0;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Deep Primary Blue base background gradient (#1F2B36 to #2B3B4A to #516B84)
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#1E2B37');
      bgGrad.addColorStop(0.5, '#283847');
      bgGrad.addColorStop(1, '#516B84');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle organic undulating wave layers (sculpted curves inspired by ORVIUM emblem)
      if (!prefersReducedMotion) {
        waveOffset += 0.005;
      }

      const drawWave = (
        yBase: number,
        amplitude: number,
        freq: number,
        alpha: number,
        speedMultiplier: number
      ) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 15) {
          const y =
            yBase +
            Math.sin(x * freq + waveOffset * speedMultiplier) * amplitude +
            Math.cos(x * freq * 0.6 - waveOffset * speedMultiplier * 0.7) * (amplitude * 0.5);
          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Subtle ivory glow or blue depth
        ctx.fillStyle = `rgba(230, 229, 228, ${alpha})`;
        ctx.fill();
        ctx.restore();
      };

      // Layer 1: Ambient deep curve
      drawWave(height * 0.65, 45, 0.0018, 0.03, 0.8);
      // Layer 2: Mid architectural curve
      drawWave(height * 0.78, 35, 0.0025, 0.04, 1.1);
      // Layer 3: Bottom edge contour
      drawWave(height * 0.9, 25, 0.003, 0.05, 0.6);

      // Technical connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          if (p1.x < 0) p1.x = width;
          if (p1.x > width) p1.x = 0;
          if (p1.y < 0) p1.y = height;
          if (p1.y > height) p1.y = 0;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 229, 228, ${p1.baseAlpha})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(230, 229, 228, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};
