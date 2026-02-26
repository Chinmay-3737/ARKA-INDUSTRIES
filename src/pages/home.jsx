import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const stats = [
    { number: "15+", label: "YEARS OF EXPERIENCE" },
    { number: "2500+", label: "PROJECTS COMPLETED" },
    { number: "800+", label: "SATISFIED CLIENTS" },
    { number: "99%", label: "QUALITY RATE" },
  ];

  // Animation variants for the staggered reveal
  const revealContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const revealItem = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />
      <Hero />
      
      {/* Precision Stats Section with Reveal Effect */}
      <motion.section 
        style={styles.statsSection}
        variants={revealContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div style={styles.statsContainer}>
          <div style={styles.statsHeader}>
            <motion.span variants={revealItem} style={styles.tagline}>WHO WE ARE</motion.span>
            <motion.h2 variants={revealItem} style={styles.heading}>
              Precision. Power. <span className="dual-scan-text">Performance.</span>
            </motion.h2>
            <motion.p variants={revealItem} style={styles.subtext}>
              We are a state-of-the-art manufacturing unit delivering high-precision laser cutting, CNC fabrication, and industrial solutions.
            </motion.p>
          </div>

          <motion.hr variants={revealItem} className="divider" />
          
          <div style={styles.statsRow}>
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                style={styles.statItem} 
                variants={revealItem}
              >
                <h3 className="dual-scan-text" style={styles.statNumber}>{stat.number}</h3>
                <p style={styles.statLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.hr variants={revealItem} className="divider" />
        </div>
      </motion.section>

      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

const styles = {
  statsSection: { padding: "80px 0", background: "#000", display: "flex", justifyContent: "center" },
  statsContainer: { width: "100%", maxWidth: "1200px", padding: "0 20px" },
  statsHeader: { marginBottom: "40px", textAlign: "left" },
  tagline: { color: "#FF9D00", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", display: "block" },
  heading: { fontSize: "42px", fontWeight: "900", color: "#FFF", margin: "10px 0" },
  subtext: { color: "#888", fontSize: "16px", maxWidth: "700px", lineHeight: "1.6" },
  statsRow: { display: "flex", justifyContent: "space-between", padding: "40px 0", flexWrap: "wrap", gap: "20px" },
  statItem: { flex: "1 1 200px" },
  statNumber: { fontSize: "48px", fontWeight: "800", margin: "0" },
  statLabel: { fontSize: "11px", color: "#555", fontWeight: "700", textTransform: "uppercase", marginTop: "5px" },
};

export default Home;