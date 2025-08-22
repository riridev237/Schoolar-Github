import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from 'react-router-dom';
import api from '../ApiServices';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {

  const [formData, setFormData] = useState({
      username: "",
      password: "",
  });    
  
  const navigate = useNavigate();

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
    try {
      const response = await api.post(
        "/api/auth/login",
        JSON.stringify(formData), 
        {
          headers: {
            "Content-Type": "application/json", 
          },
        } 
      );

      const user = response.data;
      localStorage.setItem('user', JSON.stringify(user));

      if (user.role === 'ADMIN') navigate('/admin');
      else if (user.role === 'ENCADRANT') navigate('/encadrant');
      else if (user.role === 'STAGIAIRE') navigate('/stagiaire');
      else navigate('/dashboard');
    } catch (err) {
      alert('Login failed.');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="logo">Schoolar</h1>
        <Link className='navlink' to="/register">Don't have an Account ?</Link>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter User name *"
            required
            
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="🔒 Enter Password *"
            required 
          />
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="login-button">Log in</button>
        </form>

      </div>

      <div className="login-right">
        <h2>Start managing now</h2>
        <p>
          Stop struggling with common tasks and focus on the real choke points. Discover a full featured & 100% Free Intern management platform.
        </p>
        <button className="get-started">Get started <link rel="stylesheet" href="./Home.tsx" /></button>
        <div className="illustration" ></div>
      </div>
    </div>
  );
};

export default Login;


// interface styles {
//   container: CSSProperties;
//   title: CSSProperties;
//   form: CSSProperties;
//   input: CSSProperties;
//   // button: CSSProperties;
//   imageContainer: CSSProperties;
//   checkboxLabel: CSSProperties;
//   footer: CSSProperties;
//   psw: CSSProperties;
//   image:CSSProperties;
//   p:CSSProperties;

  
// }

// const Login:  React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [remember, setRemember] = useState(true);
//   const navigate = useNavigate();

//   const handleLogin = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/auth/login', { email, password, });
//       const role = res.data.role;

//       if (role === 'ETUDIANT') {
//         navigate('/student');
//       } else if (role === 'ENSEIGNANT') {
//         navigate('/teacher');
//       } else {
//         navigate('/admin');
//       }
//     } catch (error) {
//       alert('Error Connecting');
//       console.error(error);
//     }
//   };
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Log In</h2>
//       <p style={styles.p}></p>
//       <form onSubmit={handleLogin} style={styles.form}>
//        <div style={styles.imageContainer}>
//               <img src={imageAccueil} alt="illustration accueil" style={styles.image} />
//           </div>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           className="form-control mb-3"
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           className="form-control mb-3"
//           style={styles.input}
//         />

//         <button type="submit" className="loginBtn">
//           Login
//         </button>
//         <label style={styles.checkboxLabel}>
//           <input
//             type="checkbox"
//             checked={remember}
//             onChange={() => setRemember(!remember)}
//           />{' '}
//           Remember me
//         </label>
      

//       <div style={styles.footer}>
//         <button type="button" className='cancelBtn'>Cancel</button>
//         {/* <span style={styles.psw}>Forgot <a href="#">password?</a></span> */}
//       </div>
//     </form>

//     </div>
//   )
// }

// const styles: styles = {
//   form: {
//     fontFamily: 'Arial, sans-serif',
//     border: '1px solid #ccc',
//     width: '350px',
//     margin: '80px auto',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//   },
//   imageContainer: {
//     textAlign: 'center' as const,
//     padding: '20px 0',
//     backgroundColor: '#f2f2f2',
//   },
//   image: {
//     width: '80%',
//     borderRadius: '40%',
//   },
//   title: {
//     fontSize: '2rem',
//     marginBottom: '30px',
//     color: '#007bff',
//     textAlign: 'center',
//     marginTop: '-50px',
//   },
//   p:{
//     color: 'black',
//     textAlign:'center',
//     fontSize: '1.5rem',
//     marginLeft: '300px',
//     marginRight:'300px',

//   },
//   container: {
//     textAlign: 'center',
//     padding: '90px 30px',
//     backgroundColor: '#f7f9fc',
//     minHeight: '100vh',
//     fontFamily: 'Segoe UI, sans-serif',
//     marginLeft: '30px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//   },
//   input: {
//     width: '70%',
//     outline: 'none',
//     fontSize: '1rem',
//     transition: 'border 0.9s',
//     padding: '12px',
//     margin: '2px 0',
//     marginTop:'10px',
//     border: `1.8px solid  '#04AA6D' : '#cccc'}`,
//     borderRadius: '6px',
//     boxSizing: 'border-box' as const,
//   },
  
//   checkboxLabel: {
//     display: 'block',
//     marginTop: '-10px',
//     marginLeft: '150px',
//     padding: '10px',
//     fontWeight: '500',
//     transition: 'color 0.3s ease',

//   },
//   footer: {
//     backgroundColor: '#f1f1f1',
//     padding: '12px 20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
  
//   psw: {
//     fontSize: '0.9rem',
//   }
// };


// export default Login