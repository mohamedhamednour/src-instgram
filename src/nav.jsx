import {NavLink} from "react-router-dom"
import phot from './img/199.jpg'

export const Navbar = () => {
  
    return (
      <>
  
  
  <nav class="navbar navbar-dark bg-dark">
  <ul >
  <li> <NavLink className="nav-link" to="/">
  <img className='photo1' src={phot}/>     
   </NavLink> </li>
     
      <li> <NavLink className="nav-link" to="/home">
              Posts
      </NavLink> </li>
      <li>
      <NavLink className="nav-link" to="/contact">
              to
      </NavLink>  

     

      </li>
      <li>
      <NavLink className="nav-link" to="/comment">
              comment
      </NavLink>
      </li>
      <li>
      <NavLink className="nav-link" to="/accouns">
              accounts
      </NavLink>
      </li>
      
</ul>
              
      
      
          
       
    



    </nav>


    

  
      </>
    );
  };



