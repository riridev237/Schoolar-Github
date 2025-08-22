import React, { useEffect, useState } from 'react';
import '../../Styles/Sidebar.css';
import api from '../../ApiServices';
import { Link } from 'react-router-dom';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

interface StatEntry {
  name: string;
  value: number;
}

const COLORS = ['#4CAF50', '#2196F3', '#FF5722', '#FFC107', '#9C27B0'];




const Welcome: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
   const [stagiairesData, setStagiairesData] = useState<StatEntry[]>([]);
  const [absencesData, setAbsencesData] = useState<StatEntry[]>([]);
  const [totaux, setTotaux] = useState<{ stagiaires: number; encadrants: number; stages: number }>({
    stagiaires: 0,
    encadrants: 0,
    stages: 0
  });

const toggleMenu = (menuName: string) => {
  setOpenMenu(openMenu === menuName ? null : menuName);
};
useEffect(() => {
    api.get('/api/statistiques/stagiaires-par-service')
      .then(res => {
        const data = Object.entries(res.data).map(([key, value]) => ({ name: key, value: value as number }));
        setStagiairesData(data);
      });

    api.get('/api/statistiques/absences-par-stagiaire')
      .then(res => {
        const data = Object.entries(res.data).map(([key, value]) => ({ name: key, value: value as number }));
        setAbsencesData(data);
      });

    api.get('/api/statistiques/totaux')
      .then(res => setTotaux(res.data));
  }, []);
  return (
    <div className="admin-dashboard">
      
      <aside className="sidebar">
        <h2 className="logo">ADMIN <span className="span">DASHBOARD</span></h2>
        <nav>
          <ul>
              <li className="active">Nice day Administrator </li>
            <div className="submenu">
               <Link to="/Home">
                  <button>Home</button>
                </Link>

            </div>
              <li onClick={() => toggleMenu('settings')}> 🏠 Dashboard</li>
              {openMenu === 'settings' && (
                <div className="submenu">
                  <Link to="/welcome">
                  <button> 🏠Dashboard</button>
                </Link>                
                </div>
              )}

              <li onClick={() => toggleMenu('classes')}>🏫 Intern List</li>
              {openMenu === 'classes' && (
                <div className="submenu">
                 <Link to="/classes">
                  <button>New Intern </button>
                </Link>
                <Link to="/classes/new">
                  <button> Ongoing Intern</button>
                </Link>  
                <Link to="/manage">
                  <button> Saved Intern</button>
                </Link>  
                </div>
              )}

              <li onClick={() => toggleMenu('subjects')}>Add Intern</li>
              {openMenu === 'subject' && (
                <div className="submenu">
                  <Link to="/addstagiaire">
                  <button>Add Intern</button>
                </Link>
                </div>
              )}
               <li onClick={() => toggleMenu('students')}>Internship</li>
              {openMenu === 'students' && (
                <div className="submenu">
                  <Link to="/classes">
                  <button>List Intership</button>
                </Link>
                <Link to="/classes/new">
                  <button> Add Intership</button>
                </Link>  
                </div>
              )}
               <li onClick={() => toggleMenu('teachers')}>👥 Supervisor</li>
              {openMenu === 'teachers' && (
                <div className="submenu">
                <Link to="/classes">
                  <button>List supervisor</button>
                </Link>
                <Link to="/classes/new">
                  <button> Add Supervisor</button>
                </Link>  
                
                </div>
              )}
               <li onClick={() => toggleMenu('attendance')}> ✋ Attendance</li>
              {openMenu === 'attendance' && (
                <div className="submenu">
                 <Link to="/classes">
                  <button>List of Absence</button>
                </Link>
                <Link to="/classes/new">
                  <button> Mark Absence</button>
                </Link> 
                </div>
              )}
              <li onClick={() => toggleMenu('timetable')}> Search</li>
              {openMenu === 'timetable' && (
                <div className="submenu">
                 <Link to="/classes">
                  <button>Search an Intern</button>
                </Link>
                <Link to="/classes/new">
                  <button> Search an Internship</button>
                </Link>  
                <Link to="/manage">
                  <button> Search Supervisor</button>
                </Link> 
                </div>
              )}
              <li onClick={() => toggleMenu('homework')}> Manage Accounts</li>
              {openMenu === 'homework' && (
                <div className="submenu">
                  <Link to="/classes">
                  <button>Add an Account</button>
                </Link>
                <Link to="/classes/new">
                  <button> Modify an Account</button>
                </Link>  
              </div>
              )}
              
             
            </ul>
            <div className="react-calendar">
                        <Calendar value={new Date("2025-06-29")} />

             </div>
            
        </nav>
      </aside>
    <div className="dashboard-container">
      <h2 className="dashboard-title">General Statistiques</h2>

      <div className="totals-cards">
        <div className="card blue">
          <h3>Total Interns</h3>
          <p>{totaux.stagiaires}</p>
        </div>
        <div className="card green">
          <h3>Total Supervisor</h3>
          <p>{totaux.encadrants}</p>
        </div>
        <div className="card orange">
          <h3>Total Internships</h3>
          <p>{totaux.stages}</p>
        </div>
      </div>

      <div className="chart-section">
        <h3>Intern per Service</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stagiairesData} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h3>Absences per Interns</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={absencesData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
              {absencesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  


    </div>
  )
};
export default Welcome; 