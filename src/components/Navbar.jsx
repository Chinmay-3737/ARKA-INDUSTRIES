import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav style={styles.navContainer} className="navbar-container">
      {/* Logo: Remains unchanged with its static style */}
      <div style={styles.logo}>
        <span style={styles.logoBox}>A</span> ARKA<span style={{color: '#FF9D00'}}> INDUSTRIES</span>
      </div>
      
      {/* Menu Links: These feature the yellow hover and line from index.css */}
      <ul style={styles.navLinks}>
        <li><a href="#home" className="nav-link">HOME</a></li>
        <li><a href="#about" className="nav-link">ABOUT</a></li>
        <li><a href="#services" className="nav-link">SERVICES</a></li>
        <li><a href="#contact" className="nav-link">CONTACT</a></li>
      </ul>

      {/* Button: Now includes motion for the orange glow effect */}
      <div>
        <a href="#contact" style={{ textDecoration: 'none' }}>
          <motion.button 
            style={styles.navQuoteBtn}
            className="primary-btn-hover"
            whileHover={{ 
              backgroundColor: "#e68a00", 
              boxShadow: "0px 0px 20px rgba(255, 157, 0, 0.6)",
              scale: 1.05 
            }}
            whileTap={{ scale: 0.95 }}
          >
            GET QUOTE
          </motion.button>
        </a>
      </div>
    </nav>
  );
};

const styles = {
  navContainer: {
    position: 'fixed', 
    top: 0, 
    width: '100%', 
    height: '80px',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: '0 5%', 
    /* Updated to transparent glassmorphism style */
    background: 'rgba(0,0,0,0.4)', 
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    zIndex: 1000, 
    borderBottom: '1px solid rgba(255, 157, 0, 0.1)'
  },
  logo: { color: '#FFF', fontWeight: '900', fontSize: '20px', letterSpacing: '1px' },
  logoBox: { background: '#FF9D00', color: '#000', padding: '2px 8px', borderRadius: '4px', marginRight: '5px' },
  navLinks: { display: 'flex', gap: '35px', listStyle: 'none' },
  navQuoteBtn: {
    background: '#FF9D00', 
    color: '#000', 
    border: 'none', 
    padding: '12px 24px',
    fontWeight: '800', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    fontSize: '13px',
    transition: 'all 0.3s ease'
  }
};

export default Navbar;