import './Screen1.css'
import React from 'react'
import {useEffect,useState} from 'react'

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Screen2 from '../Screen2/Screen2.js'

import {Routes,Route,Link,useNavigate} from 'react-router-dom'

export default function Screen1(props) {
    const [data,setData]=useState([])
    useEffect(() =>{
        fetch("https://api.tvmaze.com/search/shows?q=all").then((result)=>{
            result.json().then((resp)=>{
            setData(resp)
            })
        })
    },[] )
    console.warn(data);
    
    const navigate=useNavigate();

    const clickHandler = (e,e1) => {
      props.name(e,e1);
    }
  return (
    
    <div className='screen1'>
        <div className='sc1-table'>
        <Table  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th ><b>ID</b></th>
          <th><b>Name</b></th>
          <th><b>Language</b></th>
          <th><b>Premiered</b></th>
          <th><b>Summary</b></th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((item,i)=>
                <tr key={i}>
                <td>{i+1}</td>
                <td>{item.show.name}</td>
                <td>{item.show.language}</td>
                 <td>{item.show.premiered}</td>
                 <div>
                 <Link  onClick={()=>clickHandler(item.show.summary,item.show.name)} to="click">
                  <td>
                    <button className='button' style={{color:'blue'}} >Click Me</button>
                  </td>
                  </Link>

                 </div>
                
                </tr>
            )
        }
      </tbody>
    </Table>
    </div>
    </div>
  )
}

