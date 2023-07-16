import React, { useState } from 'react';
import axios from 'axios';
import './Postform.css'

function PostForm() {
  const apiUrl = 'https://localhost:7119/api/Users/GetAllUsers/';
  const aiUrl = 'https://localhost:7119/api/Users/GetById/2006';
  const url = `https://localhost:7119/api/Users/Create/`;
  const upUrl = `https://localhost:7119/api/Users/Update/2`;
  const delUrl = `https://localhost:7119/api/Users/Delete/`;

  const intVal={
    Fname: '',
    Lname: '',
    email: '',
    password: ''
  }
  const [user, setUser] = useState([]);

  function handle(e) {
    const newdata = { ...user };
    newdata[e.target.id] = e.target.value;
    setUser(newdata);
    console.log(newdata);
  }

  function createUser(users) {
    return axios.post(url, users);
  }
  function getAllUser() {
    return axios.get(apiUrl);
  }
  function getById() {
    return axios.get(aiUrl);
  }
  function updateUser(users) {
    return axios.put(upUrl,users);
  }
  function deleteUser() {
    return axios.put(delUrl);
  }

  function submit(e) {
    e.preventDefault();
    createUser(user)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      getAllUser(user)
      .then(response => {
        console.log(response.data);
        setUser(response.data)
      })

      // .then(data => setUser(data))
      .catch(error => {
        console.error(error);
      });
      getById(user)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  function handleUpdate(e) {
    e.preventDefault();
    updateUser(user)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      
  }
  function handleDelete(e) {
    e.preventDefault();
    deleteUser(user)
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
          First Name:
          <input onChange={(e) => handle(e)} id="fname" value={user.fname} type="text" name="fname" />
        </label><br/>
        <label>
          Last Name:
          <input onChange={(e) => handle(e)} id="lname" value={user.lname} type="text" name="lname" />
        </label><br/>
        <label>
          Email:
          <input onChange={(e) => handle(e)} id="email" value={user.email} type="text" name="email" />
        </label><br/>
        <label>
          Password:
          <input onChange={(e) => handle(e)} id="password" value={user.password} type="text" name="Password" />
        </label><br/>
        <button>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
      
      
    </div>
  );
}

export default PostForm;