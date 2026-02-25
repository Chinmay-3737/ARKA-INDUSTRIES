import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navContainer}>
      {/* Logo: Remains unchanged with its static style */}
      <div style={styles.logo}>
        <span style={styles.logoBox}>A</span> ARKA<span style={{color: '#FF9D00'}}> INDUSTRIES</span>
      </div>
      
      {/* Menu Links: These now feature the yellow hover and line */}
      <ul style={styles.navLinks}>
        <li><a href="#home" className="nav-link">HOME</a></li>
        <li><a href="#about" className="nav-link">ABOUT</a></li>
        <li><a href="#services" className="nav-link">SERVICES</a></li>
        <li><a href="#contact" className="nav-link">CONTACT</a></li>
      </ul>

      {/* Button: Stays solid orange as per your request */}
      <div>
        <a href="#contact" style={{ textDecoration: 'none' }}>
          <button style={styles.navQuoteBtn}>
            GET QUOTE
          </button>
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
    background: 'rgba(0,0,0,0.9)', 
    backdropFilter: 'blur(10px)',
    zIndex: 1000, 
    borderBottom: '1px solid #1A1A1A'
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
    fontSize: '13px'
  }
};

export default Navbar;