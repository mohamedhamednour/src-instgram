import axios from "axios";
import React from "react";
import { useState } from "react";



 export  const Add = () => {
    const baseURL = "http://127.0.0.1:7000/instgram/userall/";
  const [customerSignUp, setCustomerSignUp] = useState({
    
    password: '',
    username: '',
    first_name: '',
    last_name: '',
    email: ''
    
    
 });
 const handleChange = (event) => {
    setCustomerSignUp({
       ...customerSignUp,
       [event.target.name]: event.target.value
    })
 }
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
        setCustomerSignUp(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, customerSignUp)
      .then((response) => {
        setCustomerSignUp(response.data);
      });
  }


  return (
    <div>
      
    email:  <input onChange={handleChange}  value={customerSignUp.email} name="email"/><br/>
    username:  <input onChange={handleChange}  value={customerSignUp.username} name="username"/><br/>
     lastname: <input onChange={handleChange}  value={customerSignUp.last_name} name="last_name"/><br/>
     password: <input onChange={handleChange} type="password" value={customerSignUp.password} name="password"/><br/>
    firstname:  <input onChange={handleChange}  value={customerSignUp.first_name} name="first_name"/><br/>
      
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}