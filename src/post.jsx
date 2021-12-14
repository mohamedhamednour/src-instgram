
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



import React from "react"
export const Postid = (p) => {

    const [posts, setCount] = useState([]);
    const [profile, setProfile] = useState([]);
 


  

    useEffect(()=>{
      
        IDuser()
        IDprofile()
    },[]);
    
  
    const IDuser = async() =>{
      const {data} =  await axios.get(`http://127.0.0.1:7000/instgram/userid/${id}`)
    
      console.log(data)
      setCount(data)
      
     
    }
    const IDprofile = async() =>{
        const {data} =  await axios.get(`http://127.0.0.1:7000/instgram/profile/${id}`)
      
        console.log(data)
        setProfile(data)
        
       
      }
  

    
    const { id } = useParams();
        return (
        <div>
            {id}
            <h1>{posts.username}</h1>
            <h1>{posts.first_name}</h1>
            <h1> {posts.last_name}</h1>
            <h1>  {posts.email}</h1>
            <h1> {posts.date_joined}</h1>

<img src={profile.profile_pic} alt="" />
<h1> {profile.bio}</h1>
        </div>
    )
}

