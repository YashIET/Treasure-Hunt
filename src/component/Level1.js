import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Level1() {

  const [ans, setans] = useState()
  const [topleft, settopleft] = useState(false)
  const [topright, settopright] = useState(false)
  const [bottomleft, setbottomleft] = useState(false)
  const [bottomright, setbottomright] = useState(false)
  const [level, setlevel] = useState(false)

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const findlevel = "level1"

  const navigate = useNavigate()

  let ans1 = 'complication'

  const check = (e)=>{
    e.preventDefault()
    if (ans === ans1) {
       setlevel(true)
       alert("please click on Proceed to level 2")
    }
    else{
      alert("wrong answer")
    }
  }

  const handlesubmit1 = async(e) => {
    e.preventDefault()

    if (level === true || localStorage.getItem('level1')) {
      localStorage.setItem('level1' , 'completed')
      await  axios.post('https://puzzlegame1.onrender.com/level' , {
           name ,
            email , 
             findlevel
          }) ;

      navigate('/level2')
    }
    else
    {
      alert("please submit the answer first")
    }

  }
  

  return (
    <div className='whole'>
      <h1 className='one'>welcome level 1</h1>
     { topleft===false ?
      <button onClick={()=>settopleft(!topleft)} id="top-left" >clue1</button>

      :
      <button onClick={()=>settopleft(!topleft)} id="top-left" >Second letter is o</button>
     }

      {topright===false ?
        <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > clue2</button >
      : <button onClick={()=>settopright(!topright)} id="top-right" className="textbox" > Last letter is n</button >}
      {bottomleft===false ?
        <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > clue3</button >
      : <button onClick={()=>setbottomleft(!bottomleft)} id="bottom-left" className="textbox" > last third letter is i</button >}
      {bottomright===false ?
        <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" > clue4</button >
      : <button onClick={()=>setbottomright(!bottomright)} id="bottom-right" className="textbox" > sixth letter is i</button >}

      <div className="question">
        <h2><pre>guess the word:= c _ _ p _ _ _ _ _ _ o _</pre><br/></h2>
      </div>

      <form className='eksaath' >
        <label for="answer"><h3>Enter your answer here:</h3></label><br/><br/>
        <input required type="text" id="answer" name="answer" placeholder='please enter answer' onChange={(e) => setans(e.target.value)} /><br/><br/>
        <button onClick={check} >Submit</button>
      </form>
        <h3 className='complete'>You have completed level 1</h3>
        <button className='complete' onClick={handlesubmit1} >Please proceed to level 2</button>
      


    </div>
  )
}

export default Level1;
