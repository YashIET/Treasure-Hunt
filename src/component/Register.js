import React from 'react'
import { useState , useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


export default function Register() {

  const navigate = useNavigate();

  const [name , setname] = useState();
  const [email , setemail] =useState();
  const [password , setpassword] = useState();

  const handlesubmit= async (e)=>{
    e.preventDefault();
    console.log(name  , password) ;
    
    // const one=name.length;
    if(name===undefined || password===undefined || email===undefined || password.length<5 || email.length<6){
    alert("please enter correct details");
    return ;
    }
    
     await  axios.post('https://puzzlegame1.onrender.com/register' , {
           name ,
            email , 
             password
          }) ;

    //  console.log("pass");

    setTimeout(() => {
      navigate('/login');
    }, 500);
    
  }



  // useEffect(()=>{
  //   if(localStorage.getItem('name')!=''){
  //     console.log(localStorage.getItem('name'));
  //     console.log("rishabh");
  //     navigate('/welcome');

  //   }
  //   else 
  //   alert("please fill the credentials")
  // } , []);
  

  return (
    <form>
    <div className='cont'>
      <h2 className='register'>PLEASE REGISTER YOURLSELF</h2>
        <div className='container1'>

          <label>Name :</label>
        <br/><br/>
        <input type='text' placeholder='Enter Your Name' 
        onChange={(e)=>setname(e.target.value)}  
        required
        />

        <br/><br/>


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
    </form>
  )
}
