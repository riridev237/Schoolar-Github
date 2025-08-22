import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} SCHOOLAR. All right reserve.
      </p>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#229',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: 'auto',
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
  },
};

export default Footer;
