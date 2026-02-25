import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Splash = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.splashContainer}
    >
      {/* ADDED: Industrial Animated Grid Background */}
      <div className="industrial-grid-overlay" />

      <div style={styles.centerContent}>
        {/* ADDED: Pulsing Logo Container */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.logoRow}
        >
          <motion.div 
            animate={{ boxShadow: ["0 0 0px #FF9D00", "0 0 20px #FF9D00", "0 0 0px #FF9D00"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={styles.logoBox}
          >
            A
          </motion.div>
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
          {/* ADDED: Floating Shimmer Subtext */}
          <div className="shimmer-subtext" style={styles.statusText}>
            INITIALIZING PRECISION SYSTEMS...
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const styles = {
  splashContainer: {
    position: 'fixed', inset: 0, background: '#000',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 9999, overflow: 'hidden'
  },
  centerContent: { textAlign: 'center', position: 'relative', zIndex: 10 },
  logoRow: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' },
  logoBox: { 
    background: '#FF9D00', color: '#000', padding: '12px 22px', 
    borderRadius: '8px', fontSize: '42px', fontWeight: '900' 
  },
  textStack: { textAlign: 'left', lineHeight: '1.1' },
  brandName: { color: '#FFF', fontSize: '26px', fontWeight: '900', margin: 0, letterSpacing: '2px' },
  brandIndustry: { color: '#FF9D00', fontSize: '26px', fontWeight: '900', margin: 0, letterSpacing: '2px' },
  progressSection: { width: '300px', margin: '0 auto' },
  percentText: { color: '#FFF', fontSize: '14px', fontWeight: '800', marginBottom: '8px' },
  barBackground: { width: '100%', height: '3px', background: '#1A1A1A', borderRadius: '10px' },
  barFill: { height: '100%', background: '#FF9D00', boxShadow: '0 0 20px #FF9D00' },
  statusText: { color: '#555', fontSize: '10px', fontWeight: '700', letterSpacing: '3px', marginTop: '15px' }
};

export default Splash;