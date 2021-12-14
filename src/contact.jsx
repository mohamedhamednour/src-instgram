// // import { faCoffee } from "@fortawesome/free-solid-svg-icons";


 
// import { FaBeer ,BsInstagram} from 'react-icons/fa';
// import { DiStackoverflow  ,DiApple} from "react-icons/di";
// import { ImFacebook } from "react-icons/im";
//  export const Con = () => {
  
//     return (

//       <>
//       {/* <h1>hi contact us icon={faCoffee}</h1> */}
//       <h1>Facebook<a href='https://www.facebook.com/'> <ImFacebook className='appl'  /></a></h1>
//       <h1>apple <DiApple className='apple'/></h1>
      
//       <h1> stack <DiStackoverflow className='apple'/></h1>


//       {/* <ul>
//         <li>face</li>
//         <li>instgram</li>
//         <li>phone</li>
//         <li>location</li>



//         </ul> */}
//       </>

//       );

//     };


  
// // import React, { useReducer } from 'react';
// // import { Button } from './Button';

// // const INCREMENT = 'INCREMENT';
// // const DECREMENT = 'DECREMENT';

// // function reducer(state, action) {
// //   switch (action.type) {
// //     case INCREMENT:
// //       return { count: state.count + action.payload };
// //     case DECREMENT:
// //       return { count: state.count - 1 };
// //     default:
// //       return state;
// //   }
// // }

// // export const UseReducerEx = () => {
// //   const [state, dispatch] = useReducer(reducer, { count: 0 });

// //   return (
// //     <div>
// //      <button  label="increment"
// //         onClick={() => dispatch({ type: INCREMENT, payload: 3 })}></button>
// //       <h1>{state.count}</h1>
// //       {/* <button label="decrement" onClick={() => dispatch({ type: DECREMENT })} >
// //         </button> */}
// //     </div>
// //   );
// // };




import { useState ,useEffect} from "react";
import React from "react";
import axios from "axios";

export const Home = (p) => {
  const [postsdata, setposts] = useState([]);
  useEffect(()=>{
    
    Postsdata()
      },[]);
      const Postsdata = async() =>{
        const {data} =  await axios.get("http://127.0.0.1:7000/instgram/Posts")
      
        console.log(data)
        setposts(data)
        
       
      }

  return (
    <>
    <div className="App">
    {postsdata.map((p,l) => ([
        <p key={l}>{p.image_name}</p>,
        <p>{p.likes}</p>
        
 ]))}
       <div className="col-6">
      
  {/* <input onChange={handel} type="text"  value={count}/> */}
</div>


    </div>
    </>
  );
}

// export default Home;
