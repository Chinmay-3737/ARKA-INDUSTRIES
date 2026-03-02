import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Staggered animation variants for columns
  const containerVars = {
    animate: {
      transition: {
        staggerChildren: 0.1, // Delay between each section appearing
      }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Container now triggers staggered reveal on scroll */}
      <motion.div
        style={styles.container}
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Brand Section */}
        <motion.div variants={itemVars} style={styles.brandSide}>
          <div style={styles.logoBox}>
            <div style={styles.logoIcon}>A</div>
            <h2 style={styles.logoText}>ARKA <span style={{ color: '#FF9D00' }}>INDUSTRIES</span></h2>
          </div>
          <p style={styles.brandDesc}>
            Leading manufacturer of precision laser-cut, CNC-fabricated, and welded components for industrial applications.
          </p>
          <div style={styles.socials}>
            {/* Added hover glow logic to icons */}
            {[<FaFacebookF />, <FaInstagram />, <FaWhatsapp />].map((icon, index) => (
              <motion.div
                key={index}
                style={styles.socialIcon}
                whileHover={{
                  color: "#FF9D00",
                  borderColor: "#FF9D00",
                  boxShadow: "0px 0px 15px rgba(255, 157, 0, 0.4)",
                  backgroundColor: "rgba(255, 157, 0, 0.05)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Links Sections */}
        <motion.div variants={itemVars} style={styles.linkGroup}>
          <h4 style={styles.groupTitle}>QUICK LINKS</h4>
          <motion.a href="#home" style={styles.link} whileHover={styles.linkHover}>Home</motion.a>
          <motion.a href="#about" style={styles.link} whileHover={styles.linkHover}>About</motion.a>
          <motion.a href="#services" style={styles.link} whileHover={styles.linkHover}>Services</motion.a>
          <motion.a href="#contact" style={styles.link} whileHover={styles.linkHover}>Contact</motion.a>
        </motion.div>

        <motion.div variants={itemVars} style={styles.linkGroup}>
          <h4 style={styles.groupTitle}>SERVICES</h4>
          <motion.span style={styles.link} whileHover={styles.linkHover}>Laser Cutting Service</motion.span>
          <motion.span style={styles.link} whileHover={styles.linkHover}>CNC Laser Cutting</motion.span>
          <motion.span style={styles.link} whileHover={styles.linkHover}>CNC Bending</motion.span>
          <motion.span style={styles.link} whileHover={styles.linkHover}>Laser Welding Machine</motion.span>
          <motion.span style={styles.link} whileHover={styles.linkHover}>CNC Laser Welding</motion.span>
          <motion.span style={styles.link} whileHover={styles.linkHover}>Industrial Fabrication</motion.span>
        </motion.div>

        <motion.div variants={itemVars} style={{ ...styles.linkGroup, flex: "1 1 250px" }}>
          <h4 style={styles.groupTitle}>CONTACT</h4>
          <motion.p style={styles.contactItem} whileHover={styles.linkHover}>📍 HOUSE NO 382, CHAKAN, BALAJI NAGAR, Medankarwadi, Pune, Maharashtra 410501, India</motion.p>
          <motion.p style={styles.contactItem} whileHover={styles.linkHover}>📞 +91 1234567898</motion.p>
          <motion.p style={styles.contactItem} whileHover={styles.linkHover}>✉️ info@arkaindustries.com</motion.p>
          <motion.p style={styles.contactItem} whileHover={styles.linkHover}>🕒 Mon–Sat: 9:00 AM – 6:00 PM</motion.p>
        </motion.div>
      </motion.div>

      <div style={styles.bottomBar}>
        <p>© 2026 Arka Industries. All rights reserved.</p>
        <p>Built with 🧡 By <span style={{ color: '#FF9D00' }}>Arka Industries</span></p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#000",
    padding: "80px 10% 20px",
    borderTop: "1px solid #222",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    overflow: "hidden" // Prevents horizontal scroll during reveal
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "50px",
  },
  brandSide: { flex: "2 1 300px" },
  logoBox: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" },
  logoIcon: { background: '#FF9D00', color: '#000', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' },
  logoText: { color: "#FFF", fontSize: "20px", fontWeight: "bold", margin: 0 },
  brandDesc: { color: "#666", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" },
  socials: { display: "flex", gap: "10px" },
  socialIcon: {
    width: "35px", height: "35px", borderRadius: "4px", background: "#080808",
    border: "1px solid #1A1A1A", display: "flex", alignItems: "center",
    justifyContent: "center", color: "#666", cursor: "pointer", transition: "0.3s"
  },
  linkGroup: { flex: "1 1 150px" },
  groupTitle: { color: "#FF9D00", fontSize: "14px", fontWeight: "bold", marginBottom: "25px", letterSpacing: "1px" },
  link: { color: "#666", textDecoration: "none", display: "block", marginBottom: "12px", fontSize: "14px", cursor: "pointer", transition: "color 0.3s ease", width: "max-content" },
  linkHover: { color: "#FF9D00", x: 6, textShadow: "0px 0px 8px rgba(255, 157, 0, 0.4)", transition: { duration: 0.2 } },
  contactItem: { color: "#666", fontSize: "14px", marginBottom: "12px", lineHeight: "1.5", cursor: "pointer", transition: "color 0.3s ease", display: "block", width: "max-content", maxWidth: "100%" },
  bottomBar: {
    paddingTop: "25px", borderTop: "1px solid #333", display: "flex",
    justifyContent: "space-between", color: "#AAA", fontSize: "14px"
  }
};

export default Footer;