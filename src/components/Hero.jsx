import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const { scrollY } = useScroll();
  
  const opacityValue = useTransform(scrollY, [0, 150], [1, 0]);
  const yValue = useTransform(scrollY, [0, 150], [0, 20]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    // Technical particle generation
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        originX: Math.random() * canvas.width,
        originY: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        friction: 0.95,
        ease: 0.05
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 157, 0, 0.4)'; // Arka Industries Orange

      particles.forEach(p => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = (100 - distance) / 100; // Repulsion radius

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          p.speedX -= Math.cos(angle) * force;
          p.speedY -= Math.sin(angle) * force;
        }

        // Return to original flow
        p.speedX *= p.friction;
        p.speedY *= p.friction;
        p.x += p.speedX + (Math.random() * 0.2 - 0.1);
        p.y += p.speedY + (Math.random() * 0.2 - 0.1);

        // Screen wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" style={styles.hero}>
      <canvas ref={canvasRef} style={styles.canvas} />
      
      {/* Kept: Professional side gears and tech lines */}
      <div className="tech-accent-left">
        <div className="gear-icon">⚙️</div>
        <div className="data-bar-long"></div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={styles.content}>
        <span style={styles.tagline}>PRECISION MANUFACTURING UNIT</span>
        <h1 className="dual-scan-text" style={styles.title}>ARKA <br /> INDUSTRIES</h1>
        <p style={styles.subtitle}>Experts in Laser Cutting, CNC Fabrication, Welding & Industrial Manufacturing</p>
        <div style={styles.buttons}>
          <a href="#services" style={{ textDecoration: 'none' }}>
            <motion.button className="primary-btn-hover" style={styles.primaryBtn} whileHover={{ backgroundColor: "#e68a00", boxShadow: "0px 0px 25px rgba(255, 157, 0, 0.6)", scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              EXPLORE SERVICES
            </motion.button>
          </a>
        </div>
      </motion.div>

      <div className="tech-accent-right">
        <div className="data-bar-long"></div>
        <div className="gear-icon">⚙️</div>
      </div>

      {/* Kept: Scroll mouse indicator */}
      <motion.div style={{ ...styles.scrollIndicator, opacity: opacityValue, y: yValue }}>
        <div className="mouse"><div className="wheel"></div></div>
        <span className="scroll-text">SCROLL</span>
      </motion.div>
    </section>
  );
};

const styles = {
  hero: { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "#000" },
  canvas: { position: "absolute", top: 0, left: 0, zIndex: 1, pointerEvents: "none" },
  content: { zIndex: 10, textAlign: "center", width: "100%", maxWidth: "1200px", padding: "0 20px" },
  tagline: { color: "#FF9D00", fontSize: "14px", fontWeight: "bold", letterSpacing: "4px", marginBottom: "20px", display: "block" },
  title: { fontSize: "clamp(48px, 8vw, 95px)", fontWeight: "900", lineHeight: "0.85", textTransform: "uppercase", margin: "0" },
  subtitle: { color: "#AAA", fontSize: "18px", marginTop: "30px", marginBottom: "45px", maxWidth: "800px", margin: "30px auto 45px" },
  buttons: { display: "flex", justifyContent: "center" },
  primaryBtn: { background: "#FF9D00", border: "none", padding: "18px 45px", fontWeight: "900", borderRadius: "4px", cursor: "pointer", fontSize: "14px", color: "#000", transition: "all 0.3s ease" },
  scrollIndicator: { position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 10 }
};

export default Hero;