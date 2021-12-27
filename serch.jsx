import React from 'react'
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";


import axios from 'axios';

export const  Getuser =() => {
    const [name  , setFirstname] = useState('')
    const [posts , setPosts] = useState([])

    const IDprofiles = async() =>{
        const {data} = await axios.get(`http://127.0.0.1:7000/instgram/serch/user?username=${name}`)
      
        console.log(data)
        setPosts(data)
            
           
          }
  
    useEffect(()=>{
       
            
        // const searchFun = () => async () =>{   await axios.get(`http://127.0.0.1:7000/instgram/serch/user`).then((Response)=>{setPosts(Response.data)});}
        // searchFun() 
        IDprofiles()

      },[name]);   
    //   let history = useHistory() 
      const submitHandler = (e) => {
        e.preventDefault()
        // if(first_name){
        //     history.push(`?first_name=${first_name}`)
        // }

    }

    if(!posts){ return null} ;

    console.log(posts,'###################################################') 
    return (
        <div>
             <form onSubmit={submitHandler}  >
   
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setFirstname(e.target.value)}
        />
     
    
        <input type="submit" value="serch"/>
    </form>
     {posts.map((p) => ([
    
 <p key={p.id}>{p.username}</p> 
          

                
              ]))} 
        </div>
    )
}


