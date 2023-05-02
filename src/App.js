import './App.css';
import Register from './component/Register';
import Welcome from './component/Welcome'
import Contact from './component/Contact';
import Level1 from './component/Level1'
// import Level2 from './component/Level2'
import Level2 from './component/Level2'
import Level3 from './component/Level3'
import Level4 from './component/Level4'
import Level5 from './component/Level5'
import Success from './component/Success'
import {
  BrowserRouter  as Router, 
  Route , 
  Routes ,
  Link
} from 'react-router-dom';
import Login from './component/Login';
import Nav from './component/Nav';
import Home from './component/Home';


function App() {
  return (
    <div >
      <Nav/>
     <Routes>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/welcome' element={<Welcome/>} > </Route>
      <Route path='/login' element={<Login/>} > </Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path = '/loginpage1' element={<Level1/>}> </Route>
      <Route path = '/level2' element={<Level2/>}> </Route>
      <Route path = '/level3' element={<Level3/>}> </Route>
      <Route path = '/level4' element={<Level4/>}> </Route>
      <Route path = '/level5' element={<Level5/>}> </Route>
      <Route path = '/success' element={<Success/>}> </Route>
     </Routes>
     {/* <Footer/> */}

  
    </div>
  );
}

export default App;
