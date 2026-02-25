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

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />
      <Hero />
      
      {/* Precision Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div style={styles.statsHeader}>
            <span style={styles.tagline}>WHO WE ARE</span>
            <h2 style={styles.heading}>
              Precision. Power. <span className="dual-scan-text">Performance.</span>
            </h2>
            <p style={styles.subtext}>
              We are a state-of-the-art manufacturing unit delivering high-precision laser cutting, CNC fabrication, and industrial solutions.
            </p>
          </div>

          <hr className="divider" />
          <div style={styles.statsRow}>
            {stats.map((stat, i) => (
              <motion.div key={i} style={styles.statItem} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <h3 className="dual-scan-text" style={styles.statNumber}>{stat.number}</h3>
                <p style={styles.statLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <hr className="divider" />
        </div>
      </section>

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