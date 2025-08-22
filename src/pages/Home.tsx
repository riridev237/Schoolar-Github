import React from 'react'
import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import imageAccueil from '../assets/Jibusms_What-is-a-School-Management-System.jpg'; 

interface styles {
  container: CSSProperties;
  title: CSSProperties;
  subtitle: CSSProperties;
  buttons: CSSProperties;
  button: CSSProperties;
  imageContainer: CSSProperties;
  image: CSSProperties;
  
  
}

const Home: React.FC  = () => {
  return (
        <div style={styles.container}>
          <h1 style={styles.title}>Welcome to our environment,SCHOOLAR an Intern Management System  </h1>
          <p style={styles.subtitle}>
            Log in or sign up to access the features according to your role: Intern, Supervisor, or Administrator.
          </p>

          <div style={styles.buttons}>
            <Link to="/login" style={styles.button}>Log In</Link>
            <Link to="/register" style={{ ...styles.button, backgroundColor: "#4CAF50" }}>
              Register
            </Link>
          </div>
        
          <div style={styles.imageContainer}>
              <img src={imageAccueil} alt="illustration accueil" style={styles.image} />
          </div>
        </div>  
    
  )
}
const styles: styles = {
  container: {
    textAlign: 'center',
    padding: '80px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#666',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '12px 24px',
    textDecoration: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '6px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    },
  imageContainer: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px 20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },  
};


export default Home