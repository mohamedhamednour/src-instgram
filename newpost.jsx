import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useContext} from 'react'
import AuthContext from './component/Authcontext';


export const Addpost = () => {
  const {user} = useContext(AuthContext)

    let history = useHistory();


    const [image, setImage] = useState(null)
    const [image_name, setName] = useState(null)
    const [profile, setPhone] = useState(user.user_id)


    const addNewStudent = async () => {
        let formField = new FormData()
        formField.append('image_name',image_name)  
        formField.append('profile',profile)

        if(image !== null) {
          formField.append('image', image)
        }

        await axios({
          method: 'post',
          url:'http://localhost:7000/instgram/Posts/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          history.push('/')
        })
    }
   
    return (
        <div className="container">
            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add post</h2>
        

        <div className="form-group">
        <label>Image</label>
             <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="image_name"
              value={image_name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="hidden"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="profile"
              value={profile}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
         
   
       
       
          <button className="btn btn-primary btn-block" onClick={addNewStudent}>Add Student</button>
       
      </div>
    </div>
        </div>
    );
};

