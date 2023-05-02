import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Level2() {
    const [ans , setans] = useState()
    const [topleft, settopleft] = useState(false)
  const [topright, settopright] = useState(false)
  const [bottomleft, setbottomleft] = useState(false)
  const [bottomright, setbottomright] = useState(false)
  const [level, setlevel] = useState(false)
  const navigate = useNavigate()

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const findlevel = "level2"

  let ans1 = '9 * 1 / 3 + 2 - 5 = 0'

  const check = (e)=>{
    e.preventDefault()
    if (ans === ans1) {
       setlevel(true)
       alert("please click on Proceed to level 3")
    }
    else{
      alert("wrong answer")
    }
  }

  const handlesubmit1 = async(e) => {
    e.preventDefault()

    if (level === true || localStorage.getItem('level2')) {
      localStorage.setItem('level2' , 'completed')
      await  axios.post('https://puzzlegame1.onrender.com/level' , {
           name ,
            email , 
             findlevel
          }) ;
      navigate('/level3')
    }
    else
    {
      alert("please submit the answer first")
    }

  }

  return (
    <div className='whole'>
      <h1 className='one'>welcome level 2</h1>
     { topleft===false ?
      <button onClick={()=>settopleft(!topleft)} id="top-left" >clue1</button>

      :
      <button onClick={()=>settopleft(!topleft)} id="top-left" >first operation is *</button>
     }

      {topright===false ?
        <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > clue2</button >
      : <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > second operation is /</button >}
      {bottomleft===false ?
        <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > clue3</button >
      : <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > third operation is +</button >}
      {bottomright===false ?
        <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" > clue4</button >
      : <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" > fourth operation is -</button >}

      <div className="question">
        <h2><pre>9 ? 1 ? 3 ? 2 ? 5 = 0 </pre></h2>
      </div>

      <form className='eksaath'>
        <label for="answer">Enter your answer here:</label><br/><br/>
        <input required type="text" id="answer" name="answer" placeholder='please enter answer' onChange={(e) => setans(e.target.value)} /><br/><br/>
        <button onClick={check} >Submit</button>
      </form>

      <h3 className='complete'>You have completed level 2</h3>
        <button className='complete' onClick={handlesubmit1} >Please proceed to level 3</button>
      


    </div>
  )
}

export default Level2