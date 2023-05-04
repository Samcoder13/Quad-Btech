import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navbar/Navbar'
import Screen1 from './Component/Fetch/Screen1'
import { Route,Routes } from 'react-router-dom';
import Screen2 from './Component/Screen2/Screen2';
import { useState } from 'react';
import Movie from './Component/Screen2/Movie';
function App() {
  const [item,setItem]=useState();
  const [item1,setItem1]=useState();
  function childparent(data,data2){
    setItem(data);
    setItem1(data2);
  }
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<div><Nav />
      <Screen1 name={childparent} /> </div>} />
      <Route path="click" element={  <Screen2 name1={item}/>  } ></Route>
      <Route path="click/movie" element={  <Movie name2={item1}/>  } >
      </Route>
       </Routes>
    </div>
  );
}

export default App;
