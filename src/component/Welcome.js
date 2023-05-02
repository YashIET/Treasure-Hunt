import React from 'react'
import { useState , useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


function Welcome() {

    const [name , setname] = useState();

    const navigate = useNavigate()
    
    useEffect(()=>{
        const find = localStorage.getItem("name");
        setname(find);
    } , []);

    const handleclick =(e)=>{
       e.preventDefault()
       navigate('/loginpage1')

    }

  return (
    <div className='cont'>
    <div className='container1'>
     
      <h1>Welcome {name}</h1>
    </div>
    {/* <div className='container1'> */}
    <h1 className='button12'><button onClick={handleclick} className='bg-success'>Start</button></h1>
    {/* </div> */}
      
    </div>
  )
}

export default Welcome
