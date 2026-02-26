import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sub-component for the hacker typewriter effect
const TypewriterText = ({ text }) => {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.02 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -5,
    },
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Splash = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random()
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = `rgba(255, 157, 0, ${p.opacity})`; 
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={progress === 100 ? {
        opacity: [1, 0, 1, 0.2, 1],
        filter: ["contrast(1) brightness(1)", "contrast(2) brightness(2) blur(2px)", "contrast(1) brightness(1)"],
        transition: { duration: 0.6 }
      } : {}}
      style={styles.splashContainer}
    >
      <canvas ref={canvasRef} style={styles.canvas} />
      <div className="industrial-grid-overlay" />
      <div className="scanline" />

      <div style={styles.centerContent}>
        <motion.div 
          animate={{ boxShadow: ["0 0 20px #FF9D0000", "0 0 40px #FF9D0044", "0 0 20px #FF9D0000"] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={styles.logoRow}
        >
          <div style={styles.logoBoxContainer}>
            <div style={styles.logoBox}>A</div>
            <motion.div 
              style={styles.scanningBeam}
              animate={{ left: ['-10%', '110%'], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />
          </div>

          <div style={styles.textStack}>
            <h2 style={styles.brandName}>ARKA</h2>
            <h2 style={styles.brandIndustry}>INDUSTRIES</h2>
          </div>
        </motion.div>

        <div style={styles.progressSection}>
          <div style={styles.percentText}>{progress}%</div>
          <div style={styles.barBackground}>
            <motion.div 
              style={{ ...styles.barFill, width: `${progress}%` }} 
              transition={{ ease: "linear" }}
            />
          </div>
          
          {/* HACKER TERMINAL STATUS TEXT */}
          <div style={styles.statusText}>
            <AnimatePresence mode="wait">
              {progress < 40 && (
                <TypewriterText key="t1" text="> INITIALIZING PRECISION SYSTEMS..." />
              )}
              {progress >= 40 && progress < 80 && (
                <TypewriterText key="t2" text="> CALIBRATING OPTIC MOTORS..." />
              )}
              {progress >= 80 && (
                <TypewriterText key="t3" text="> CORE STABILIZED. READY." />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div style={styles.vignette} />
    </motion.div>
  );
};

const styles = {
  splashContainer: { position: 'fixed', inset: 0, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, overflow: 'hidden' },
  canvas: { position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' },
  vignette: { position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 40%, black 100%)', zIndex: 2, pointerEvents: 'none' },
  centerContent: { textAlign: 'center', position: 'relative', zIndex: 10 },
  logoRow: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px', padding: '10px' },
  logoBoxContainer: { position: 'relative', overflow: 'hidden', borderRadius: '8px' },
  logoBox: { background: '#FF9D00', color: '#000', padding: '12px 22px', fontSize: '42px', fontWeight: '900' },
  scanningBeam: { position: 'absolute', top: 0, width: '10px', height: '100%', background: 'linear-gradient(to right, transparent, #FFF, transparent)', boxShadow: '0 0 15px #FFF', zIndex: 2, pointerEvents: 'none' },
  textStack: { textAlign: 'left', lineHeight: '1.1' },
  brandName: { color: '#FFF', fontSize: '26px', fontWeight: '900', margin: 0 },
  brandIndustry: { color: '#FF9D00', fontSize: '26px', fontWeight: '900', margin: 0 },
  progressSection: { width: '320px', margin: '0 auto' },
  percentText: { color: '#FFF', fontSize: '14px', fontWeight: '800', marginBottom: '8px', fontFamily: 'monospace' },
  barBackground: { width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' },
  barFill: { height: '100%', background: '#FF9D00', boxShadow: '0 0 25px #FF9D00' },
  // Updated statusText container to handle horizontal flex for the typewriter
  statusText: { color: '#FF9D00', opacity: 0.8, fontSize: '9px', fontWeight: '700', letterSpacing: '2px', marginTop: '20px', fontFamily: 'monospace', display: 'flex', justifyContent: 'center' }
};

export default Splash;