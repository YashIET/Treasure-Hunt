import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {

    const navigate = useNavigate();

    const [email , setemail] = useState();
    const [password , setpassword] = useState();
   
    let auth = localStorage.getItem("name");

    

    const handlesubmit = async (e)=>{
      e.preventDefault();
     console.log(email , password);
     console.log("auth")
  console.log(auth);
   
      let result = await axios.post('https://puzzlegame1.onrender.com/login' , {
        email, 
        password

      });
     
    if(result.data.name){
      localStorage.setItem("name" , result.data.name);
      localStorage.setItem("email" , result.data.email);
     navigate('/');
    }
     else 
     alert("please enter correct details");

    }

  return (
    <form>
    <div className='cont'>
        <h3 className='logn'>PLEASE LOGIN -:</h3>
        <div>
      
      <div className='container1'>
<label>Email :</label>
<br/><br/>
<input type='text' placeholder='Enter Your Email' 
onChange={(e)=>setemail(e.target.value)}
required
/>

<br/><br/>

<label>Password :</label>
<br/><br/>
<input type='password' placeholder='Enter Your password' 
onChange={(e)=>setpassword(e.target.value)}
required
/>
<br/><br/>
<button type='submit' className='submit' onClick={handlesubmit}> Submit </button>

</div>

    </div>
    </div>
    </form>
  )
}

export default Login
