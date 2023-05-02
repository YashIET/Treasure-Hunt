import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Level4() {
   
  const [ans , setans] = useState()
  const [topleft, settopleft] = useState(false)
  const [topright, settopright] = useState(false)
  const [bottomleft, setbottomleft] = useState(false)
  const [bottomright, setbottomright] = useState(false)
  const [level, setlevel] = useState(false)

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const findlevel = "level4"

  const navigate = useNavigate()

  let ans1 = 'agra'

  const check = (e)=>{
    e.preventDefault()
    console.log(ans.length)
    if (ans.length>20) {
       setlevel(true)
       alert("please click on Proceed to level 3")
    }
    else{
      alert("please write more than 20 letters")
    }
  }

  const handlesubmit1 = async(e) => {
    e.preventDefault()

    if (level === true || localStorage.getItem('level4')) {
      localStorage.setItem('level4' , 'completed')
      await  axios.post('https://puzzlegame1.onrender.com/level' , {
        name ,
         email , 
          findlevel
       }) ;
      navigate('/level5')
    }
    else
    {
      alert("please submit the answer first")
    }

  }

  return (
    <div className='whole'>
      <h1 className='one'>welcome level 4</h1>
     { topleft===false ?
      <button onClick={()=>settopleft(!topleft)} id="top-left" >clue1</button>

      :
      <button onClick={()=>settopleft(!topleft)} id="top-left" >Think about your previous experiences</button>
     }

      {topright===false ?
        <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > clue2</button >
      : <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" >Be original</button >}
      {bottomleft===false ?
        <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > clue3</button >
      : <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" >That situation may be any</button >}
      {bottomright===false ?
        <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" > clue4</button >
      : <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" >Just go ahead</button >}

      <div className="question">
        <h2>Describe your previous bad experience and how you tackle it</h2>
      </div>

      <form className='eksaath'>
        <label for="answer">Enter your answer here:</label><br/><br/>
        <br/><br/><input required type="text" id="answer" name="answer" placeholder='please enter answer' onChange={(e) => setans(e.target.value)} />
        <button  onClick={check} >Submit</button>
      </form>
      <h3 className='complete'>You have completed level 4</h3>
        <button className='complete' onClick={handlesubmit1} >Please proceed to level 5</button>
      
      


    </div>
  )
}

export default Level4;
