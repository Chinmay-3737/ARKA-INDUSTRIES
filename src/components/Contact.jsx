import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <span style={styles.tagline}>GET IN TOUCH</span>
          <h2 style={styles.heading}>
            Contact <span style={{ color: "#FF9D00" }}>Us</span>
          </h2>
          <p style={styles.subtext}>
            Have a project in mind? Fill out the form and our team will get back to you 
            within 24 hours.
          </p>
        </div>

        <div style={styles.contentWrapper}>
          {/* Map Section */}
          <div style={styles.mapSide}>
            <div style={styles.mapContainer}>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120937.1350811956!2d73.7441584343118!3d18.52461642878701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43100c34f33!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form Section */}
          <div style={styles.formSide}>
            <form style={styles.form}>
              <input type="text" placeholder="Full Name" style={styles.input} />
              <input type="email" placeholder="Email Address" style={styles.input} />
              <input type="tel" placeholder="Phone Number" style={styles.input} />
              
              <select style={styles.input}>
                <option value="" disabled selected>Select Service of Interest</option>
                <option value="laser">Laser Cutting</option>
                <option value="cnc">CNC Fabrication</option>
                <option value="welding">Industrial Welding</option>
              </select>

              <textarea placeholder="Your Message" style={styles.textarea}></textarea>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={styles.submitBtn}
              >
                SEND ENQUIRY
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "100px 10%",
    background: "#000000",
    color: "#FFFFFF",
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  tagline: {
    color: "#FF9D00",
    fontSize: "12px",
    letterSpacing: "3px",
    fontWeight: "bold",
    display: "block",
    marginBottom: "15px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "20px",
  },
  subtext: {
    color: "#888",
    fontSize: "16px",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  contentWrapper: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  mapSide: {
    flex: "1 1 500px",
  },
  mapContainer: {
    height: "450px",
    background: "#080808",
    borderRadius: "12px",
    border: "1px solid #1A1A1A",
    overflow: "hidden",
    boxShadow: "0px 0px 30px rgba(255, 157, 0, 0.1)", // Subtle industrial glow
  },
  formSide: {
    flex: "1 1 400px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    background: "#080808",
    border: "1px solid #1A1A1A",
    borderRadius: "6px",
    padding: "15px 20px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  textarea: {
    background: "#080808",
    border: "1px solid #1A1A1A",
    borderRadius: "6px",
    padding: "15px 20px",
    color: "#fff",
    fontSize: "14px",
    height: "150px",
    outline: "none",
    resize: "none",
  },
  submitBtn: {
    background: "#FF9D00",
    color: "#000",
    border: "none",
    padding: "18px",
    fontSize: "16px",
    fontWeight: "800",
    borderRadius: "6px",
    cursor: "pointer",
    letterSpacing: "1px",
    marginTop: "10px",
    boxShadow: "0px 4px 15px rgba(255, 157, 0, 0.3)", // Glow effect on button
  }
};

export default Contact;