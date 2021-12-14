import photo from './img/12.jpg'
import phot from './img/16.jpg'
import { ImFacebook } from "react-icons/im";

export const Apps = () => {
  
    return (
      <>
  
  <pre>






  </pre>
  <div class="container">
  <div className="row">
    <div className="col-6">
    <img src={photo}/>

    </div>
    <div className="col-6">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid laboriosam dolorem illo assumenda veniam, quibusdam, quos magnam soluta quod provident animi distinctio, corporis impedit! Minima doloremque obcaecati molestiae eligendi.</p>

    </div>
    
  
  </div>
</div>

<pre>









</pre>

   <h1>res</h1><br />
   <div class="container">
  <div className="row">
   
    <div className="col-6">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid laboriosam dolorem illo assumenda veniam, quibusdam, quos magnam soluta quod provident animi distinctio, corporis impedit! Minima doloremque obcaecati molestiae eligendi.</p>

    </div>

    <div className="col-6">
    <img src={phot}/>

    </div>
    
  
  </div>
</div>



  
      </>
    );
  };



  export const Apo = () => {
  
    return (
      <>

<div class="container">
<div class="row">
 <div class="col-3">

  </div>

<form class="col-6 justify-content-center" >
<h1>instgram</h1>
<p>Sign up to see photos and videos from your friends.</p>
<button class="btn btn-primary " type="button"><a > <ImFacebook className='facebook'  /> login with face book </a></button>
<p>OR</p>
<input type="text" class="form-control" id="validationCustom01" value="email or moblie " required/>
    <input type="text" class="form-control" id="validationCustom02" value="full name" required/>
    <input type="text" class="form-control" id="validationCustom02" value=" " required/>
    <input type="password" class="form-control" id="validationCustom02" value="" required/>
    <button class="btn btn-primary " type="submit">Sign up</button>

    <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>


</form>

<div class="col-3">

  </div>

  </div>

  </div>




      </>
    );
  };
  