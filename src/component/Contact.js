import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Contact = () => {

  const [name , setname] = useState();
  const [email , setemail] = useState();
  const [message , setmessage] = useState();

  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post('https://puzzlegame1.onrender.com/message' , {
      name ,
      email , 
      message
    })
    navigate('/')
  };



  return (
    <div className="container1">
    <form
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          onChange={(e)=>setname(e.target.value)}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e)=>setemail(e.target.value)}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          onChange={(e)=>setmessage(e.target.value)}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-green active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 submit bg-success"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
  );
};

export default Contact;