import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <div className="industrial-lines" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.content}
      >
        <span style={styles.tagline}>ARKA MANUFACTURING UNIT</span>
        
        <h1 className="dual-scan-text" style={styles.title}>
          ARKA <br /> 
          INDUSTRIES
        </h1>
        
        <p style={styles.subtitle}>
          Experts in Laser Cutting, CNC Fabrication, Welding & Industrial Manufacturing
        </p>

        <div style={styles.buttons}>
          {/* Only the Explore Services button remains here */}
          <a href="#services" style={{ textDecoration: 'none' }}>
            <button style={styles.primaryBtn}>EXPLORE SERVICES</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  hero: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', position: 'relative', overflow: 'hidden' },
  content: { zIndex: 2, textAlign: 'center', width: '100%', maxWidth: '1200px', padding: '0 20px' },
  tagline: { color: '#FF9D00', fontSize: '14px', fontWeight: 'bold', letterSpacing: '4px', marginBottom: '20px', display: 'block' },
  title: { fontSize: 'clamp(48px, 8vw, 95px)', fontWeight: '900', lineHeight: '0.85', textTransform: 'uppercase', margin: '0' },
  subtitle: { color: '#AAA', fontSize: '18px', marginTop: '30px', marginBottom: '45px' },
  buttons: { display: 'flex', justifyContent: 'center' },
  primaryBtn: { background: '#FF9D00', border: 'none', padding: '18px 45px', fontWeight: '900', borderRadius: '4px', cursor: 'pointer', color: '#000' },
};

export default Hero;