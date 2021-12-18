import axios from "axios";
import React from "react";
import { useState ,useEffect} from "react";

import { useParams,useHistory } from "react-router-dom";
import { useContext} from 'react'
import AuthContext from './component/Authcontext';

 export  const Edit = () => {
    const {user} = useContext(AuthContext)
    const { ID } = useParams();
    const [posts, setCount] = useState([]);
    let history = useHistory();

    const baseURL = `http://127.0.0.1:7000/instgram/userid/${ID}`;
  const [customerSignUp, setCustomerSignUp] = useState({
    
   
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
    axios.get(`${baseURL}`).then((response) => {
        setCustomerSignUp(response.data);
    });
  }, []);

  function createPost() {
    axios({
        method: 'PUT',
        url: `http://127.0.0.1:7000/instgram/userid/${ID}`,
        data: customerSignUp
    }).then(response => {
        console.log(response.data);
        setCustomerSignUp(response.data);
        
    })
  
  }
  useEffect(()=>{
    
    appp()
      },[]);
      
  const appp = async() =>{
    const {data} =  await axios.get(`http://127.0.0.1:7000/instgram/profile/${ID}`)
  
    console.log(data)
    setCount(data)
    
   
  }

  let deleteNote = async () => {
    axios.delete(`http://127.0.0.1:7000/instgram/postid/${ID}`)
   
  }
  return (
    <div>
      
    email:  <input onChange={handleChange}  value={customerSignUp.email} name="email"/><br/>
    username:  <input onChange={handleChange}  value={customerSignUp.username} name="username"/><br/>
     lastname: <input onChange={handleChange}  value={customerSignUp.last_name} name="last_name"/><br/>
    firstname:  <input onChange={handleChange}  value={customerSignUp.first_name} name="first_name"/><br/>
      
      <button onClick={createPost}>Create Post</button>
     
      {/* <Link className="btn btn-danger" onClick={() => deleteUser(customerSignUp.id)}>Delete</Link> */}
  
      {/* { posts ? posts.map((p) => ([
       <img key={p.id} src={p.image}/>,
       user ?  <button className="btn btn-danger" onClick={deleteNote(p.id)}>delete</button> : <p>no</p>
  ])): "no data"} */}

    </div>
  );
}