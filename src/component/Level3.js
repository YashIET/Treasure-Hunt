import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Level3() {
   
  const [ans , setans] = useState()
  const [topleft, settopleft] = useState(false)
  const [topright, settopright] = useState(false)
  const [bottomleft, setbottomleft] = useState(false)
  const [bottomright, setbottomright] = useState(false)
  const [level, setlevel] = useState(false)

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const findlevel = "level3"



  const navigate = useNavigate()

  let ans1 = 'Taj Mahal'

  const check = (e)=>{
    e.preventDefault()
    if (ans === ans1) {
       setlevel(true)
       alert("please click on Proceed to level 4")
    }
    else{
      alert("wrong answer")
    }
  }

  const handlesubmit1 = async(e) => {
    e.preventDefault()

    if (level === true || localStorage.getItem('level3')) {
      localStorage.setItem('level3' , 'completed')
      await  axios.post('https://puzzlegame1.onrender.com/level' , {
        name ,
         email , 
          findlevel
       }) ;
      navigate('/level4')
    }
    else
    {
      alert("please submit the answer first")
    }

  }

  return (
    <div className='whole'>
      <h1 className='one'>welcome level 3</h1>
     { topleft===false ?
      <button onClick={()=>settopleft(!topleft)} id="top-left" >clue1</button>

      :
      <button onClick={()=>settopleft(!topleft)} id="top-left" >I am among 7 wonders of world</button>
     }

      {topright===false ?
        <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > clue2</button >
      : <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > I am of white color</button >}
      {bottomleft===false ?
        <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > clue3</button >
      : <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > I was made under mughal rule</button >}
      {bottomright===false ?
        <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" > clue4</button >
      : <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" > I am in Agra</button >}

      <div className="question">
        <h2>I am India's tourist place</h2>
      </div>

      <form className='eksaath' >
        <label for="answer">Enter your answer here:</label><br/><br/>
        <input required type="text" id="answer" name="answer" placeholder='please enter answer' onChange={(e) => setans(e.target.value)} />
        <br/><br/><button onClick={check}>Submit</button>
      </form>
      <h3 className='complete'>You have completed level 3</h3>
        <button className='complete' onClick={handlesubmit1} >Please proceed to level 4</button>
      
      


    </div>
  )
}

export default Level3;
