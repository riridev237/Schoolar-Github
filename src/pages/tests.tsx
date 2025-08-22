import axios from 'axios';
import { useEffect } from 'react';

function TestConnection() {
  useEffect(() => {
    axios.get('http://localhost:8080/api/enseignants')  // Remplace avec un vrai endpoint
      .then(res => console.log('✅ Connected to backend:', res.data))
      .catch(err => console.error('❌ Backend not reachable:', err));
  }, []);

  return <p>Check console for backend response</p>;
}

export default TestConnection;
