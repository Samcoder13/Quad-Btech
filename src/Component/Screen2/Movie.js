import React from 'react'
import './Movie.css'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
function Movie(props) {
  const[name,setName]=useState("")
  const[add,setAdd]=useState("")
  const [val,setVal]=useState('');
  const [val2,setVal2]=useState('');
 
  useEffect(() => {
    const val1=localStorage.getItem("name") ? localStorage.getItem("name") :'';
    const val2=localStorage.getItem("address") ? localStorage.getItem("address") :'';
    setName(val1);
    setAdd(val2);
  },[])



  function loginHandle(e)
    {
        e.preventDefault()
        localStorage.setItem("name",name);
        localStorage.setItem("address",add);
        
    }
  
    return (
        <div>
           <form className='forms' onSubmit={loginHandle}>
            <span>Movie:{props.name2}</span>
            <br></br>
            <div className='input'>
            Enter User Name: <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <br /><br />
            Enter Your ADD:  <input type="text" placeholder="Enter ADD" value={add} onChange={(e)=>setAdd(e.target.value)} />

            <br /> <br />
            <button type="submit" className='button bt'>Login</button>

            </div>
            <Link   to="/click">
            <button className='button bt '>Back</button>
            </Link>
          
            <div>
      <div></div>

      </div>
           </form>
        </div>
    )
}

export default Movie;
