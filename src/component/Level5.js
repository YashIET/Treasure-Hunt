import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Level5() {
   
  const [ans , setans] = useState()
  const [topleft, settopleft] = useState(false)
  const [topright, settopright] = useState(false)
  const [bottomleft, setbottomleft] = useState(false)
  const [bottomright, setbottomright] = useState(false)
  const [level, setlevel] = useState(false)

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const findlevel = "level5"

  const navigate = useNavigate()

  let ans1 = 'Gujarat Titans'

  const check = (e)=>{
    e.preventDefault()
    if (ans === ans1) {
       setlevel(true)
       alert("please click on Proceed success page")
    }
    else{
      alert("wrong answer")
    }
  }

  const handlesubmit1 = async(e) => {
    e.preventDefault()

    if (level === true || localStorage.getItem('level5')) {
      localStorage.setItem('level5' , 'completed')
      await  axios.post('https://puzzlegame1.onrender.com/level' , {
        name ,
         email , 
          findlevel
       }) ;
      navigate('/success')
    }
    else
    {
      alert("please submit the answer first")
    }

  }

  return (
    <div className='whole'>
      <h1 className='one'>welcome level 5</h1>
     { topleft===false ?
      <button onClick={()=>settopleft(!topleft)} id="top-left" >clue1</button>

      :
      <button onClick={()=>settopleft(!topleft)} id="top-left" >Our prime minister belongs to that place</button>
     }

      {topright===false ?
        <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > clue2</button >
      : <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > It starts woth letter G</button >}
      {bottomleft===false ?
        <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > clue3</button >
      : <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > Hardhik Pandhya is its captain</button >}
      {bottomright===false ?
        <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" > clue4</button >
      : <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" >Team is Gujarat Titans</button >}

      <div className="question">
        <h2>Who won IPL 2022</h2>
      </div>

      <form className='eksaath'>
        <label for="answer">Enter your answer here:</label><br/><br/>
        <input required type="text" id="answer" name="answer" placeholder='please enter answer' onChange={(e) => setans(e.target.value)} />
        <br/><br/><button  onClick={check} >Submit</button>
      </form>

      <h3 className='complete'>You have completed level 5</h3>
        <button className='complete' onClick={handlesubmit1} >All level completed click to Check your Score </button>
      


    </div>
  )
}

export default Level5;
