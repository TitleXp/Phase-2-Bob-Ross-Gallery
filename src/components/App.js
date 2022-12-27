// import logo from '../logo.svg';

import '../App.css';
import { useState, useEffect } from 'react';
import Header from "./Header";
import PaintingsContainer from "./PaintingsContainer";


function App() {
 const [paintings, setPaintings]=useState([])

// useEffect(() => {
//   const fetchData = () => {
//     fetch("http://localhost:3000/paintings")
//     .then(response => response.json())
//     .then(painting => setPaintings(painting))
//     .catch(error => alert(error))
//   }

//   fetchData()

// }, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:3000/paintings")
      const paintings = await resp.json()
      setPaintings(paintings)
    } catch (error) {
      alert(error)
    }
   }

   fetchData()
  
}, [])


  return (
    <div className="App">
   <Header/>
  <PaintingsContainer paintings={paintings}/>
    </div>
  );
}

export default App;
