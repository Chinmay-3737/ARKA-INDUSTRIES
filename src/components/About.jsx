import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.textSide}
        >
          <span style={styles.tagline}>ESTABLISHED EXCELLENCE</span>
          <h2 style={styles.heading}>Arka Industries <span style={{color: '#FF9D00'}}>Industries</span></h2>
          <p style={styles.description}>
            With over 15 years of industry-leading experience, we specialize in high-end 
            industrial fabrication and CNC processing. Our commitment to micron-level accuracy 
            and structural integrity has made us a trusted partner for global infrastructure projects.
          </p>
          <div style={styles.points}>
            <div style={styles.point}>✔ ISO Certified Manufacturing</div>
            <div style={styles.point}>✔ Advanced CNC Machinery</div>
            <div style={styles.point}>✔ 24/7 Quality Inspection</div>
          </div>
          <button style={styles.btn}>LEARN MORE ABOUT US</button>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.imageSide}
        >
          <div style={styles.imageBorder}>
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
              alt="Industrial Workshop" 
              style={styles.image} 
            />
          </div>
        </motion.div>
      </div>
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
  point: { color: "#AAA", marginBottom: "10px", fontSize: "14px", fontWeight: "600" },
  btn: { 
    background: "transparent", border: "1px solid #FF9D00", color: "#FF9D00",
    padding: "15px 35px", borderRadius: "4px", fontWeight: "bold", cursor: "pointer"
  },
  imageSide: { flex: "1 1 450px" },
  imageBorder: { 
    borderRadius: "12px", overflow: "hidden", 
    border: "1px solid #1A1A1A", boxShadow: "0 0 40px rgba(255, 157, 0, 0.1)" 
  },
  image: { width: "100%", display: "block", filter: "grayscale(30%) contrast(1.1)" }
};

export default About;