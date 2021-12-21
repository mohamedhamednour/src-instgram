import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { useContext} from 'react'
import AuthContext from './component/Authcontext';

export const Follw = () => {
    const {user} = useContext(AuthContext)

   const [followers , serfollower] = useState([])
//    const [user_to, setuset_to] = useState()
   const user_from= user.user_id


   useEffect(()=>{
      
    follower()
    
},[]);


const addNewStudent = async (i) => {
    let formField = new FormData()
    formField.append('user_from',user_from)
    formField.append('user_to',i)


  
    await axios({
      method: 'post',
      url:'http://localhost:7000/instgram/viewfol',
      data: formField
    }).then(response=>{
      console.log(response.data);
    })
}


    const follower = async() =>{
        const {data} =  await axios.get(`http://localhost:7000/instgram/Viewfollwadd`)
      
        console.log(data)
        serfollower(data)
        
       
      }
    return (
        <div>
            <h1>follow </h1>
            {followers.map((p,l) => ([
                console.log(p.id),
                
          <p key={l}> {p.username}</p>,
                        <p>id_user {p.id}</p>,
          <button onClick={addNewStudent(p.id)} className="btn btn-danger">follow</button>,
       
      

       
 ]))}
        </div>
    )
}

