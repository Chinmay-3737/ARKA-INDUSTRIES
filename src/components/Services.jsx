import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { emoji: "☀️", title: "Laser Cutting Service", desc: "High-precision laser cutting for metals and alloys with tight tolerances." },
    { emoji: "🤖", title: "CNC Laser Cutting", desc: "Computer-controlled laser cutting for complex shapes and mass production." },
    { emoji: "📐", title: "CNC Bending", desc: "Automated CNC bending for consistent, accurate sheet metal forming." },
    { emoji: "🔧", title: "Laser Welding Machine", desc: "Advanced laser welding machines for strong, clean, and precise joints." },
    { emoji: "⚡", title: "CNC Laser Welding", desc: "CNC-controlled laser welding for automated and repeatable weld quality." },
    { emoji: "🏗️", title: "Fabrication", desc: "Comprehensive metal fabrication services from raw material to finished product." },
    { emoji: "🔩", title: "Pipe Bending Service", desc: "Precision pipe bending for industrial pipelines and structural components." },
    { emoji: "🏭", title: "Industrial Fabrication", desc: "Heavy-duty industrial fabrication for large-scale manufacturing projects." },
    { emoji: "📱", title: "Leader Valves", desc: "Manufacture and supply of precision leader valves for industrial applications." },
    { emoji: "🛠️", title: "Leader Welding", desc: "Expert leader welding services ensuring structural integrity and durability." },
  ];

  // Container variant to trigger staggered children
  const containerReveal = {
    animate: {
      transition: {
        staggerChildren: 0.1, // Delay between each card popping up
      }
    }
  };

  // Individual card animation variant
  const cardReveal = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <motion.span 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          style={styles.tagline}
        >
          WHAT WE OFFER
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={styles.heading}
        >
          Our <span style={{ color: "#FF9D00" }}>Services</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={styles.subtext}
        >
          From precision laser cutting to heavy industrial fabrication — we deliver 
          complete manufacturing solutions under one roof.
        </motion.p>

        {/* The Grid Container with Staggered Reveal */}
        <motion.div 
          style={styles.grid}
          variants={containerReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={styles.card}
              variants={cardReveal} // Inherits from parent
              whileHover={{ 
                borderColor: "#FF9D00",
                boxShadow: "0px 0px 30px rgba(255, 157, 0, 0.2)",
                borderTop: "4px solid #FF9D00",
                y: -5
              }}
            >
              <div style={styles.emojiIcon}>{service.emoji}</div>
              <h4 style={styles.cardTitle}>{service.title}</h4>
              <p style={styles.cardDesc}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div style={styles.quoteBar}>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.quoteBtn}
          >
            REQUEST A CUSTOM QUOTE
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "100px 10%", background: "#000000", color: "#FFFFFF", fontFamily: "'Inter', sans-serif" },
  container: { textAlign: "center" },
  tagline: { color: "#FF9D00", fontSize: "12px", letterSpacing: "3px", fontWeight: "bold", display: "block", marginBottom: "15px" },
  heading: { fontSize: "48px", fontWeight: "800", marginBottom: "20px" },
  subtext: { color: "#888", fontSize: "16px", maxWidth: "600px", margin: "0 auto 60px", lineHeight: "1.6" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "60px" },
  card: { background: "#080808", padding: "35px 25px", borderRadius: "12px", border: "1px solid #1A1A1A", borderTop: "4px solid transparent", textAlign: "left", transition: "all 0.3s ease", cursor: "pointer" },
  emojiIcon: { fontSize: "32px", marginBottom: "20px" },
  cardTitle: { fontSize: "16px", fontWeight: "700", color: "#FF9D00", marginBottom: "15px" },
  cardDesc: { fontSize: "14px", color: "#666", lineHeight: "1.6" },
  quoteBar: { marginTop: "40px", display: "flex", justifyContent: "center" },
  quoteBtn: { background: "#FF9D00", color: "#000", border: "none", padding: "18px 45px", fontSize: "16px", fontWeight: "800", borderRadius: "6px", cursor: "pointer", letterSpacing: "1px", boxShadow: "0px 4px 15px rgba(255, 157, 0, 0.3)" }
};

export default Services;