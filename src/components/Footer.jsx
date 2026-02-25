import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brandSide}>
          <div style={styles.logoBox}>
            <div style={styles.logoIcon}>A</div>
            <h2 style={styles.logoText}>Arka Industries</h2>
          </div>
          <p style={styles.brandDesc}>
            Leading manufacturer of precision laser-cut, CNC-fabricated, and welded components for industrial applications.
          </p>
          <div style={styles.socials}>
            <div style={styles.socialIcon}><FaFacebookF /></div>
            <div style={styles.socialIcon}><FaInstagram /></div>
            <div style={styles.socialIcon}><FaLinkedinIn /></div>
            <div style={styles.socialIcon}><FaYoutube /></div>
          </div>
        </div>

        {/* Links Sections */}
        <div style={styles.linkGroup}>
          <h4 style={styles.groupTitle}>QUICK LINKS</h4>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.linkGroup}>
          <h4 style={styles.groupTitle}>SERVICES</h4>
          <span style={styles.link}>Laser Cutting Service</span>
          <span style={styles.link}>CNC Laser Cutting</span>
          <span style={styles.link}>CNC Bending</span>
          <span style={styles.link}>Laser Welding Machine</span>
          <span style={styles.link}>CNC Laser Welding</span>
          <span style={styles.link}>Industrial Fabrication</span>
        </div>

        {/* Contact Info Section */}
        <div style={styles.linkGroup}>
          <h4 style={styles.groupTitle}>CONTACT</h4>
          <p style={styles.contactItem}>📍 HOUSE NO 382,CHAKAN,BALAJI NAGAR,Chakan 1ST, HOUSE NO 382, CHAKAN, BALAJI NAGAR, Medankarwadi, Chakan, Pune, Maharashtra, 410501,410501, Pune-410501, Maharashtra, India</p>
          <p style={styles.contactItem}>📞 +91 1234567898</p>
          <p style={styles.contactItem}>✉️ info@arkaindustries.com</p>
          <p style={styles.contactItem}>🕒 Mon–Sat: 9:00 AM – 6:00 PM</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p>© 2026 Arka Industries. All rights reserved.</p>
        <p>Built with 🧡 By <span style={{color: '#FF9D00'}}>Chinmay Chaudhari</span></p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#000",
    padding: "80px 10% 20px",
    borderTop: "1px solid #111",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
    marginBottom: "60px",
  },
  brandSide: { flex: "1 1 300px" },
  logoBox: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" },
  logoIcon: { background: '#FF9D00', color: '#000', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' },
  logoText: { color: "#FF9D00", fontSize: "20px", fontWeight: "bold", margin: 0 },
  brandDesc: { color: "#666", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" },
  socials: { display: "flex", gap: "10px" },
  socialIcon: {
    width: "35px", height: "35px", borderRadius: "4px", background: "#080808",
    border: "1px solid #1A1A1A", display: "flex", alignItems: "center",
    justifyContent: "center", color: "#666", cursor: "pointer", transition: "0.3s"
  },
  linkGroup: { flex: "1 1 150px" },
  groupTitle: { color: "#FF9D00", fontSize: "14px", fontWeight: "bold", marginBottom: "25px", letterSpacing: "1px" },
  link: { color: "#666", textDecoration: "none", display: "block", marginBottom: "12px", fontSize: "14px", cursor: "pointer" },
  contactItem: { color: "#666", fontSize: "14px", marginBottom: "12px", lineHeight: "1.5" },
  bottomBar: {
    paddingTop: "25px", borderTop: "1px solid #111", display: "flex",
    justifyContent: "space-between", color: "#333", fontSize: "12px"
  }
};

export default Footer;