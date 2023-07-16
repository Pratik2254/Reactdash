import React, { useState } from 'react';
import axios from 'axios';
import './Postform.css'


function Registration() {
    const [data, setData] = useState({
        email: '',
        password: ''
      });
      const url = `https://localhost:7119/api/Login/Create/`;
      const apiUrl = `https://localhost:7119/api/Login/GetAllUsers/`;
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
      }
    
    
      function createUser(user) {
        return axios.post(url, user);
      }
      function getAllUser() {
        return axios.get(apiUrl);
      }
      function submit(e) {
        e.preventDefault();
        createUser(data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      getAllUser(data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
        
      }
  
    return (
        <div className='form'>
          <form onSubmit={(e) => submit(e)} className='form'>
            <label>
              Email:
              <input onChange={(e) => handle(e)} id="email" value={data.email} type="text" name="email" />
            </label><br/>
            <label>
              Password:
              <input onChange={(e) => handle(e)} id="password" value={data.password} type="text" name="Password" />
            </label><br/>
            <button>Register</button>
            
          </form>
        </div>
      );
  
}

export default Registration