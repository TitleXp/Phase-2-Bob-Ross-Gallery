// import logo from '../logo.svg';

import '../App.css';
import { useState, useEffect } from 'react';
import Header from "./Header";
import PaintingsContainer from "./PaintingsContainer";
import SearchBar from './Searchbar';


function App() {

  const [paintings, setPaintings]=useState([])
  const [searchTerm, setSearchTerm] = useState("")

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

  const filteredPaintings = paintings.filter(painting => (painting.painting_title.toLowerCase().includes(searchTerm.toLowerCase())))

  return (
    <div className="App">
   <Header/>
   <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
   <PaintingsContainer paintings={filteredPaintings}/>
   

    </div>
  );
}

export default App;
