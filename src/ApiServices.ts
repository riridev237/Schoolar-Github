// import axios from "axios";

// export default axios.create({
//     baseURL:'http://localhost:8080/api/auth',
//     headers: {
//         'Content-Type':'application/json'
//     }
// });

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, // Important si tu utilises des cookies
  headers: {
       'Content-Type':'application/json'
    }


});

export default api;
