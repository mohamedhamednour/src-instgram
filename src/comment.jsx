
import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";

export const Comments = (p) => {

  const [posts, setCount] = useState([]);
 


  

  useEffect(()=>{
    
appp()
  },[]);
  

  const appp = async() =>{
    const {data} =  await axios.get("http://127.0.0.1:7000/instgram/get")
  
    console.log(data)
    setCount(data)
    
   
  }

  const newLocal = <h1>ff</h1>;
  return (
  
   <div>
 {newLocal}
 { posts ? posts.map((p) => ([
        <h1>{p.comment}</h1>,
        <p>{p.created_at}</p>,
        <p>{p.image}</p>,
        <p>{p.profile}</p>
 ])): "no data"}

    </div>
      );
}
// export default App;
