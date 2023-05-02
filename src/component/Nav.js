import React, { useEffect } from 'react'
import {
    Link , 
    useNavigate
} from 'react-router-dom';

function Nav() {

  const navigate =useNavigate();
  let auth = localStorage.getItem("name");
  useEffect(()=>{
    auth = localStorage.getItem("name");
  });
  
  const logout = ()=>{
  localStorage.clear();
   navigate('/login');
  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      { auth ?
        <div className="container-fluid">
        <Link to='/' className="navbar-brand" href="#">Treasure Hunt</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
               <Link to='/welcome' className="nav-link navbar-brand " aria-current="page" href="#">ENTER</Link>
               <Link to='/contact' className="nav-link  navbar-brand" href="#">CONTACT-US</Link>
             <div className='log1'>
             <Link to='/register'onClick={logout}  className="nav-link  navbar-brand bg-danger " href="#">LOGOUT</Link>
             </div></div></div>
             </div>:
              <div className='log'>
              <Link to='/' className="nav-link navbar-brand" href="#">Treasure Hunt</Link>
              <Link to='/login'  className="nav-link  navbar-brand bg-success">LOGIN</Link>
              <Link to='/register'className="nav-link  navbar-brand bg-danger " href="#">SIGN UP</Link>
              </div>
          
      }

      </nav>
    </div>
  )
}

export default Nav
