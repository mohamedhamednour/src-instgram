
import { useEffect, useState } from "react";
import axios from "axios";


import { Link ,useParams} from "react-router-dom";

import React from "react"
export const Accounsts = () => {

    const [account, setaccount] = useState([]);
 

    const { id } = useParams();

  

   
    
  
    const Alluser = async() =>{
      const {data} =  await axios.get('http://127.0.0.1:7000/instgram/userall')
    
      console.log(data)
      setaccount(data)
      
     
    }
    
    useEffect(()=>{
      
        Alluser()
    
    },[]);
  

    
        return (
        <div>
            

           
           {account.map((p) => ([
               <Link to={`/blog/${p.id}`}>
        <h1 key={p.id}> Account : {p.username}</h1>
        
        </Link>
 ]))}
 

        </div>
    )
}

