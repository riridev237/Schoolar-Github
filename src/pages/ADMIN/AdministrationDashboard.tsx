// import React, { useEffect, useState } from 'react';
// import './Styles/AdminDashboard.css';


// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend
// } from 'recharts';
// import api from './ApiServices';

// interface StatEntry {
//   name: string;
//   value: number;
// }

// const COLORS = ['#4CAF50', '#2196F3', '#FF5722', '#FFC107', '#9C27B0'];

// const AdministrationDashboard: React.FC = () => {
//      const [stagiairesData, setStagiairesData] = useState<StatEntry[]>([]);
//     const [absencesData, setAbsencesData] = useState<StatEntry[]>([]);
//     const [totaux, setTotaux] = useState<{ stagiaires: number; encadrants: number; stages: number }>({
//       stagiaires: 0,
//       encadrants: 0,
//       stages: 0
//     });
  
  
//   useEffect(() => {
//       api.get('/api/statistiques/stagiaires-par-service')
//         .then(res => {
//           const data = Object.entries(res.data).map(([key, value]) => ({ name: key, value: value as number }));
//           setStagiairesData(data);
//         });
  
//       api.get('/api/statistiques/absences-par-stagiaire')
//         .then(res => {
//           const data = Object.entries(res.data).map(([key, value]) => ({ name: key, value: value as number }));
//           setAbsencesData(data);
//         });
  
//       api.get('/api/statistiques/totaux')
//         .then(res => setTotaux(res.data));
//     }, []);
  
//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">General Statistiques</h2>
//       <div className="totals-cards">
//         <div className="card blue">
//           <h3>Total Interns</h3>
//           <p>{totaux.stagiaires}</p>
//         </div>
//         <div className="card green">
//           <h3>Total Supervisor</h3>
//           <p>{totaux.encadrants}</p>
//         </div>
//         <div className="card orange">
//           <h3>Total Internships</h3>
//           <p>{totaux.stages}</p>
//         </div>
//       </div>

//       <div className="chart-section">
//         <h3>Intern per Service</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={stagiairesData} layout="vertical">
//             <XAxis type="number" />
//             <YAxis dataKey="name" type="category" />
//             <Tooltip />
//             <Bar dataKey="value" fill="#4CAF50" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       <div className="chart-section">
//         <h3>Absences per Interns</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie data={absencesData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
//               {absencesData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AdministrationDashboard;


// // const DashboardAdmin: React.FC = () => {
// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.title}>Administration Panel</h2>
// //       <p style={styles.subtitle}>Manage accounts, classes, courses, teachers, and students.</p>

// //       <div style={styles.grid}>
// //         <div style={styles.card}>
// //           <h3 style={styles.cardTitle}>👤 Accounts</h3>
// //           <p>Create, view, and delete user accounts.</p>
// //         </div>
// //         <div style={styles.card}>
// //           <h3 style={styles.cardTitle}>🏫 Classes</h3>
// //           <p>Manage class levels, filières, and enrollment.</p>
// //         </div>
// //         <div style={styles.card}>
// //           <h3 style={styles.cardTitle}>📘 Courses</h3>
// //           <p>Assign courses to classes and teachers.</p>
// //         </div>
// //         <div style={styles.card}>
// //           <h3 style={styles.cardTitle}>👨‍🏫 Teachers</h3>
// //           <p>List and assign teachers to classes based on specialties.</p>
// //         </div>
// //         <div style={styles.card}>
// //           <h3 style={styles.cardTitle}>🎓 Students</h3>
// //           <p>Manage student registrations and class assignments.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles: { [key: string]: React.CSSProperties } = {
// //   container: {
// //     backgroundColor: '#121226',
// //     color: '#fff',
// //     minHeight: '100vh',
// //     padding: '60px 20px',
// //     textAlign: 'center',
// //     fontFamily: 'Segoe UI, sans-serif',
// //   },
// //   title: {
// //     fontSize: '2.5rem',
// //     marginBottom: '10px',
// //   },
// //   subtitle: {
// //     fontSize: '1.1rem',
// //     marginBottom: '40px',
// //     color: '#ccc',
// //   },
// //   grid: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     justifyContent: 'center',
// //     gap: '20px',
// //   },
// //   card: {
// //     backgroundColor: '#20203a',
// //     padding: '20px',
// //     borderRadius: '10px',
// //     width: '280px',
// //     boxShadow: '0 0 10px rgba(0,0,0,0.3)',
// //   },
// //   cardTitle: {
// //     color: '#4db8ff',
// //     marginBottom: '10px',
// //   },
// // };

// // export default DashboardAdmin;
