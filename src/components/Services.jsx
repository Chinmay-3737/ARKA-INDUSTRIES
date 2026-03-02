import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import imgCncBending from '../assets/Cnc Bending.png';
import imgCncLaserCutting from '../assets/Cnc Leaser Cutting.png';
import imgLeaderWelding from '../assets/Leader Welding.png';
import imgLaserCuttingService from '../assets/Leaser Cutting Service.png';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [prefilledService, setPrefilledService] = useState("");

  const services = [
    { emoji: "☀️", title: "Laser Cutting Service", desc: "High-precision laser cutting for metals and alloys with tight tolerances.", image: imgLaserCuttingService, longDesc: "Our Laser Cutting Service provides unparalleled precision for a wide variety of metals and alloys. Using state-of-the-art technology, we ensure tight tolerances and smooth edges, making it ideal for both prototyping and full-scale production runs." },
    { emoji: "🤖", title: "CNC Laser Cutting", desc: "Computer-controlled laser cutting for complex shapes and mass production.", image: imgCncLaserCutting, longDesc: "CNC Laser Cutting utilizes advanced computer numerical control to guide high-powered lasers. This method allows for the creation of incredibly complex shapes with high repeatability, perfect for mass production requirements." },
    { emoji: "📐", title: "CNC Bending", desc: "Automated CNC bending for consistent, accurate sheet metal forming.", image: imgCncBending, longDesc: "Our CNC Bending services offer automated, precision forming of sheet metal. This ensures that every bend is consistent and accurate, meeting exact specifications for structural and aesthetic components." },
    { emoji: "🔧", title: "Laser Welding Machine", desc: "Advanced laser welding machines for strong, clean, and precise joints.", longDesc: "We utilize advanced laser welding machines that provide intense, focused heat to create strong, clean, and highly precise joints, minimizing distortion in the surrounding material." },
    { emoji: "⚡", title: "CNC Laser Welding", desc: "CNC-controlled laser welding for automated and repeatable weld quality.", longDesc: "CNC Laser Welding combines the precision of laser welding with automated computer control, guaranteeing repeatable, high-quality welds across large production batches." },
    { emoji: "🏗️", title: "Fabrication", desc: "Comprehensive metal fabrication services from raw material to finished product.", longDesc: "Our comprehensive fabrication services cover everything from cutting and bending to welding and assembly, transforming raw materials into complete, ready-to-use finished products." },
    { emoji: "🔩", title: "Pipe Bending Service", desc: "Precision pipe bending for industrial pipelines and structural components.", longDesc: "We provide precision pipe bending services tailored for industrial pipelines, handrails, and structural framing. Our techniques ensure uniform bends without compromising the integrity of the pipe." },
    { emoji: "🏭", title: "Industrial Fabrication", desc: "Heavy-duty industrial fabrication for large-scale manufacturing projects.", longDesc: "Designed for large-scale projects, our industrial fabrication handles heavy-duty materials and complex assemblies, delivering robust solutions for the manufacturing and construction sectors." },
    { emoji: "📱", title: "Leader Valves", desc: "Manufacture and supply of precision leader valves for industrial applications.", longDesc: "We manufacture and supply high-quality leader valves engineered for precision and reliability in demanding industrial flow-control applications." },
    { emoji: "🛠️", title: "Leader Welding", desc: "Expert leader welding services ensuring structural integrity and durability.", image: imgLeaderWelding, longDesc: "Our expert Leader Welding services focus on maximum structural integrity and long-lasting durability. We employ highly skilled technicians to handle critical welding tasks for heavy industrial applications." },
  ];

  // Individual card animation variant
  const cardReveal = {
    initial: { opacity: 0, y: 30, borderColor: "rgba(255, 255, 255, 0.05)", boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)" },
    animate: {
      opacity: 1,
      y: 0,
      borderColor: "rgba(255, 255, 255, 0.05)",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      borderColor: "#FF9D00",
      boxShadow: "0px 10px 40px rgba(255, 157, 0, 0.3)",
      y: -8,
      transition: { duration: 0.2, ease: "easeInOut" }
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

        {/* The Grid Container with Individual Card Reveals */}
        <div style={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={styles.card}
              variants={cardReveal}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
            >
              <motion.div
                style={styles.emojiIcon}
                variants={{
                  initial: { scale: 1, rotate: 0 },
                  hover: {
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }
                }}
              >
                {service.emoji}
              </motion.div>
              <h4 style={styles.cardTitle}>{service.title}</h4>
              <p style={styles.cardDesc}>{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={styles.quoteBar}>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.quoteBtn}
            onClick={() => {
              setPrefilledService("");
              setIsModalOpen(true);
            }}
          >
            REQUEST A CUSTOM QUOTE
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              style={{ ...styles.modalContent, maxWidth: "850px", padding: "40px" }}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>
                  <span style={{ marginRight: "10px" }}>{selectedService.emoji}</span>
                  {selectedService.title}
                </h3>
                <button onClick={() => setSelectedService(null)} style={styles.closeBtn}>&times;</button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "stretch" }}>
                {selectedService.image ? (
                  <div style={{ flex: "1 1 350px", borderRadius: "12px", overflow: "hidden", border: "2px solid #1F1F1F", display: "flex", alignItems: "center", justifyContent: "center", background: "#050505" }}>
                    <img src={selectedService.image} alt={selectedService.title} style={{ width: "100%", height: "100%", maxHeight: "350px", objectFit: "cover", display: "block" }} />
                  </div>
                ) : (
                  <div style={{ flex: "1 1 350px", borderRadius: "12px", overflow: "hidden", border: "2px dashed #1F1F1F", display: "flex", alignItems: "center", justifyContent: "center", background: "#080808", minHeight: "250px" }}>
                    <p style={{ color: "#444", fontStyle: "italic", fontSize: "14px" }}>Image unavailable</p>
                  </div>
                )}

                <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: "#FFF", fontSize: "20px", marginBottom: "15px", fontWeight: "600", borderBottom: "1px solid #1F1F1F", paddingBottom: "10px" }}>Service Overview</h4>
                    <p style={{ color: "#CCCCCC", lineHeight: "1.8", fontSize: "15px", textAlign: "left" }}>
                      {selectedService.longDesc || selectedService.desc}
                    </p>
                  </div>


                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                style={styles.modalHeader}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 style={styles.modalTitle}>Request a Quote</h3>
                <button onClick={() => setIsModalOpen(false)} style={styles.closeBtn}>&times;</button>
              </motion.div>
              <form
                style={styles.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsModalOpen(false);
                  alert("Quote request sent successfully!");
                }}
              >
                <motion.div
                  style={{ display: "flex", gap: "20px", width: "100%" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div style={{ ...styles.inputGroup, flex: 1 }}>
                    <label style={styles.label}>Name</label>
                    <motion.input
                      type="text"
                      placeholder="Your Name"
                      style={styles.input}
                      required
                      whileFocus={{ borderColor: "#2A2A2A", borderBottomColor: "#FF9D00", boxShadow: "0px 10px 15px -10px rgba(255,157,0,0.5)" }}
                      whileHover={{ borderColor: "rgba(255,157,0,0.5)" }}
                    />
                  </div>
                  <div style={{ ...styles.inputGroup, flex: 1 }}>
                    <label style={styles.label}>Phone Number</label>
                    <motion.input
                      type="tel"
                      placeholder="Your Phone"
                      style={styles.input}
                      required
                      whileFocus={{ borderColor: "#2A2A2A", borderBottomColor: "#FF9D00", boxShadow: "0px 10px 15px -10px rgba(255,157,0,0.5)" }}
                      whileHover={{ borderColor: "rgba(255,157,0,0.5)" }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  style={{ display: "flex", gap: "20px", width: "100%" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div style={{ ...styles.inputGroup, flex: 1 }}>
                    <label style={styles.label}>Email</label>
                    <motion.input
                      type="email"
                      placeholder="Your Email"
                      style={styles.input}
                      required
                      whileFocus={{ borderColor: "#2A2A2A", borderBottomColor: "#FF9D00", boxShadow: "0px 10px 15px -10px rgba(255,157,0,0.5)" }}
                      whileHover={{ borderColor: "rgba(255,157,0,0.5)" }}
                    />
                  </div>
                  <div style={{ ...styles.inputGroup, flex: 1 }}>
                    <label style={styles.label}>Company Name</label>
                    <motion.input
                      type="text"
                      placeholder="Your Company"
                      style={styles.input}
                      whileFocus={{ borderColor: "#2A2A2A", borderBottomColor: "#FF9D00", boxShadow: "0px 10px 15px -10px rgba(255,157,0,0.5)" }}
                      whileHover={{ borderColor: "rgba(255,157,0,0.5)" }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  style={styles.inputGroup}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label style={styles.label}>Service of Interest</label>
                  <motion.select
                    style={styles.select}
                    required
                    defaultValue={prefilledService || ""}
                    whileFocus={{ borderColor: "#2A2A2A", borderBottomColor: "#FF9D00", boxShadow: "0px 10px 15px -10px rgba(255,157,0,0.5)" }}
                    whileHover={{ borderColor: "rgba(255,157,0,0.5)" }}
                  >
                    <option value="" disabled>Select a Service</option>
                    {services.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                  </motion.select>
                </motion.div>

                <motion.div
                  style={styles.inputGroup}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label style={styles.label}>Inquiry Details</label>
                  <motion.textarea
                    placeholder="Tell us about your project requirements..."
                    rows="5"
                    style={styles.textarea}
                    required
                    whileFocus={{ borderColor: "#2A2A2A", borderBottomColor: "#FF9D00", boxShadow: "0px 10px 15px -10px rgba(255,157,0,0.5)", backgroundColor: "#0A0A0A" }}
                    whileHover={{ borderColor: "rgba(255,157,0,0.5)" }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  style={styles.submitBtn}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(255, 157, 0, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Inquiry
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const styles = {
  section: { padding: "70px 5%", background: "#000000", color: "#FFFFFF", fontFamily: "'Inter', sans-serif" },
  container: { textAlign: "center", maxWidth: "1400px", margin: "0 auto" },
  tagline: { color: "#FF9D00", fontSize: "12px", letterSpacing: "3px", fontWeight: "bold", display: "block", marginBottom: "10px" },
  heading: { fontSize: "40px", fontWeight: "800", marginBottom: "15px" },
  subtext: { color: "#888", fontSize: "15px", maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.6" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "15px", marginBottom: "40px" },
  card: {
    background: "rgba(20, 20, 20, 0.4)", padding: "25px 20px", borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderTop: "4px solid transparent",
    textAlign: "left", cursor: "pointer",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)"
  },
  emojiIcon: { fontSize: "32px", marginBottom: "15px", display: "inline-block" },
  cardTitle: { fontSize: "15px", fontWeight: "700", color: "#FF9D00", marginBottom: "10px" },
  cardDesc: { fontSize: "13px", color: "#666", lineHeight: "1.5" },
  quoteBar: { marginTop: "30px", display: "flex", justifyContent: "center" },
  quoteBtn: { background: "#FF9D00", color: "#000", border: "none", padding: "18px 45px", fontSize: "16px", fontWeight: "800", borderRadius: "6px", cursor: "pointer", letterSpacing: "1px", boxShadow: "0px 4px 15px rgba(255, 157, 0, 0.3)" },
  modalOverlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.85)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(8px)" },
  modalContent: { background: "#0D0D0D", padding: "50px", borderRadius: "16px", width: "95%", maxWidth: "700px", border: "1px solid #FF9D0040", position: "relative", boxShadow: "0px 20px 60px rgba(255,157,0,0.15)" },
  modalHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "35px" },
  modalTitle: { margin: 0, fontSize: "32px", fontWeight: "800", color: "#FF9D00", letterSpacing: "-0.5px" },
  closeBtn: { background: "transparent", border: "none", color: "#888", fontSize: "36px", cursor: "pointer", transition: "all 0.2s", lineHeight: "1" },
  form: { display: "flex", flexDirection: "column", gap: "25px" },
  inputGroup: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", width: "100%" },
  label: { fontSize: "15px", fontWeight: "600", color: "#E0E0E0", letterSpacing: "0.5px" },
  input: { width: "100%", padding: "16px 20px", borderRadius: "8px", border: "none", borderBottom: "2px solid #2A2A2A", background: "rgba(5, 5, 5, 0.8)", color: "#FFF", fontSize: "16px", outline: "none", boxSizing: "border-box", transition: "all 0.3s ease" },
  textarea: { width: "100%", padding: "16px 20px", borderRadius: "8px", border: "none", borderBottom: "2px solid #2A2A2A", background: "rgba(5, 5, 5, 0.8)", color: "#FFF", fontSize: "16px", outline: "none", resize: "vertical", boxSizing: "border-box", transition: "all 0.3s ease" },
  select: { width: "100%", padding: "16px 20px", borderRadius: "8px", border: "none", borderBottom: "2px solid #2A2A2A", background: "rgba(5, 5, 5, 0.8)", color: "#FFF", fontSize: "16px", outline: "none", boxSizing: "border-box", cursor: "pointer", appearance: "none", transition: "all 0.3s ease" },
  submitBtn: { background: "#FF9D00", color: "#000", border: "none", padding: "18px", fontSize: "18px", fontWeight: "800", borderRadius: "8px", cursor: "pointer", marginTop: "15px", transition: "all 0.3s ease", letterSpacing: "1px" }
};

export default Services;