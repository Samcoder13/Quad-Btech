import React from 'react'
import './Screen2.css'
import {Link} from 'react-router-dom'
function Screen2(props) {
  return (
    <div className='m-screen2'>
      <h1>Summary</h1>
      <div dangerouslySetInnerHTML={{ __html:props.name1 }} />
      <div >
      <Link   to="/">
      <button className='button bt '>Back</button>
      </Link>
      <div className='movie'>
        <span>Book Movie:</span>
        <div className='bt2'>
        <Link  to="/click/movie">
      <button className='button bt '>Book</button>
      </Link>

        </div>
       

      </div>
      
       
      </div>
      
    </div>


  )
}

export default Screen2
