import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" style={{ ...styles.section, position: "relative", overflow: "hidden" }}>
      {/* Background Glowing Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={styles.glowOrb1}
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.05, 0.2, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={styles.glowOrb2}
      />
      <div style={{ ...styles.container, position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          style={styles.textSide}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={styles.tagline}
          >
            ESTABLISHED EXCELLENCE
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={styles.heading}
          >
            Arka Industries <span style={{ color: '#FF9D00' }}>Industries</span>
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={styles.description}
          >
            With over 15 years of industry-leading experience, we specialize in high-end
            industrial fabrication and CNC processing. Our commitment to micron-level accuracy
            and structural integrity has made us a trusted partner for global infrastructure projects.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            style={styles.points}
          >
            {["ISO Certified Manufacturing", "Advanced CNC Machinery", "24/7 Quality Inspection"].map((text, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ x: 10, color: "#FF9D00" }}
                style={styles.point}
              >
                <span style={{ color: "#FF9D00", marginRight: "10px" }}>✔</span> {text}
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={styles.btn}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#FF9D00",
              color: "#000",
              boxShadow: "0px 0px 20px rgba(255, 157, 0, 0.4)",
              border: "1px solid #FF9D00"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(true)}
          >
            LEARN MORE ABOUT US
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          style={styles.imageSide}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              style={styles.imageBorder}
              whileHover={{
                boxShadow: "0 0 50px rgba(255, 157, 0, 0.3)",
                borderColor: "#FF9D00",
                y: -10
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ height: "100%", width: "100%", backgroundColor: "#FF9D00", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                whileInView={{ height: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
                alt="Industrial Workshop"
                style={styles.image}
                whileHover={{ scale: 1.1, filter: "grayscale(0%) contrast(1.2)" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              style={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>About <span style={{ color: '#FF9D00' }}>Arka Industries</span></h3>
                <button onClick={() => setIsModalOpen(false)} style={styles.closeBtn}>&times;</button>
              </div>

              <div style={styles.modalBody}>
                <p style={styles.modalText}>
                  Established over a decade ago, Arka Industries has grown from a specialized local machine shop into a comprehensive industrial fabrication partner for multinational infrastructure and technology firms.
                </p>

                <h4 style={styles.modalSubtitle}>Our Capabilities</h4>
                <div style={styles.capabilityGrid}>
                  <div style={styles.capabilityCard}>
                    <div style={styles.capabilityIcon}>🏭</div>
                    <div><strong>Heavy Fabrication</strong><br />Capacity for large-scale structural components up to 50 tons.</div>
                  </div>
                  <div style={styles.capabilityCard}>
                    <div style={styles.capabilityIcon}>⚡</div>
                    <div><strong>Precision Laser</strong><br />Multi-axis fiber laser cutting for complex geometries.</div>
                  </div>
                  <div style={styles.capabilityCard}>
                    <div style={styles.capabilityIcon}>🔬</div>
                    <div><strong>Quality Assurance</strong><br />CMM inspection and strict ISO 9001:2015 compliance.</div>
                  </div>
                  <div style={styles.capabilityCard}>
                    <div style={styles.capabilityIcon}>🚀</div>
                    <div><strong>Rapid Prototyping</strong><br />Dedicated team for fast turnaround on R&D components.</div>
                  </div>
                </div>

                <p style={styles.modalText}>
                  Our 100,000 sq ft climate-controlled facility houses the latest in automated manufacturing technology, allowing us to maintain incredibly tight tolerances even on high-volume production runs.
                </p>
              </div>

              <div style={styles.modalFooter}>
                <button style={styles.primaryBtn} onClick={() => {
                  setIsModalOpen(false);
                  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                }}>
                  View Our Services
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const styles = {
  section: { padding: "100px 0", background: "#000" },
  container: {
    maxWidth: "1200px", margin: "0 auto", padding: "0 20px",
    display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap"
  },
  textSide: { flex: "1 1 450px" },
  tagline: { color: "#FF9D00", fontSize: "12px", fontWeight: "700", letterSpacing: "3px" },
  heading: { fontSize: "42px", fontWeight: "900", color: "#FFF", margin: "15px 0 25px" },
  description: { color: "#888", fontSize: "16px", lineHeight: "1.7", marginBottom: "30px" },
  points: { marginBottom: "40px" },
  point: { color: "#AAA", marginBottom: "12px", fontSize: "15px", fontWeight: "600", display: "flex", alignItems: "center", cursor: "default" },
  btn: {
    background: "transparent", border: "1px solid #FF9D00", color: "#FF9D00",
    padding: "15px 35px", borderRadius: "6px", fontWeight: "800", cursor: "pointer",
    letterSpacing: "1px", transition: "all 0.3s ease", outline: "none"
  },
  imageSide: { flex: "1 1 450px" },
  imageBorder: {
    borderRadius: "12px", overflow: "hidden",
    border: "1px solid #1A1A1A", boxShadow: "0 0 40px rgba(255, 157, 0, 0.1)",
    position: "relative"
  },
  image: { width: "100%", display: "block", filter: "grayscale(30%) contrast(1.1)", transformOrigin: "center" },

  glowOrb1: {
    position: "absolute", top: "-10%", left: "-5%", width: "500px", height: "500px",
    background: "radial-gradient(circle, rgba(255,157,0,0.1) 0%, rgba(0,0,0,0) 70%)",
    borderRadius: "50%", pointerEvents: "none", zIndex: 0
  },
  glowOrb2: {
    position: "absolute", bottom: "-20%", right: "-10%", width: "600px", height: "600px",
    background: "radial-gradient(circle, rgba(255,157,0,0.08) 0%, rgba(0,0,0,0) 70%)",
    borderRadius: "50%", pointerEvents: "none", zIndex: 0
  },

  // Modal Styles
  modalOverlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.85)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(8px)" },
  modalContent: { background: "#0D0D0D", padding: "40px", borderRadius: "16px", width: "95%", maxWidth: "800px", maxHeight: "90vh", overflowY: "auto", border: "1px solid #FF9D0040", position: "relative", boxShadow: "0px 20px 60px rgba(255,157,0,0.15)" },
  modalHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderBottom: "1px solid #222", paddingBottom: "20px" },
  modalTitle: { margin: 0, fontSize: "28px", fontWeight: "800", color: "#FFF", letterSpacing: "-0.5px" },
  closeBtn: { background: "transparent", border: "none", color: "#888", fontSize: "36px", cursor: "pointer", transition: "all 0.2s", lineHeight: "1" },
  modalBody: { display: "flex", flexDirection: "column", gap: "25px", color: "#CCC" },
  modalText: { fontSize: "16px", lineHeight: "1.8", color: "#AAA", margin: 0 },
  modalSubtitle: { fontSize: "20px", fontWeight: "700", color: "#FFF", margin: "10px 0 0 0" },
  capabilityGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" },
  capabilityCard: { background: "#151515", border: "1px solid #2A2A2A", borderRadius: "10px", padding: "20px", display: "flex", gap: "15px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.6" },
  capabilityIcon: { fontSize: "24px" },
  modalFooter: { marginTop: "35px", paddingTop: "25px", borderTop: "1px solid #222", display: "flex", justifyContent: "flex-end" },
  primaryBtn: { background: "#FF9D00", color: "#000", border: "none", padding: "14px 28px", fontSize: "16px", fontWeight: "800", borderRadius: "6px", cursor: "pointer", letterSpacing: "1px", transition: "all 0.3s ease" }
};

export default About;