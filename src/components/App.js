// import logo from '../logo.svg';

import '../App.css';
import { useState, useEffect } from 'react';
import Header from "./Header";
import PaintingsContainer from "./PaintingsContainer";
import SearchBar from './Searchbar';
import Painting from "./Painting";
import ErrorPage from "./ErrorPage";
import CommentsContainer from './CommentsContainer';
import CommentForm from './CommentForm.js';


import { Switch, Route } from "react-router-dom"


function App() {

  const [paintings, setPaintings]=useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [comments, setComments] = useState([])
  // const []

// useEffect(() => {
//   const fetchData = () => {
//     fetch("http://localhost:3000/paintings")
//     .then(response => response.json())
//     .then(painting => setPaintings(painting))
//     .catch(error => alert(error))
//   }

//   fetchData()

// }, []);

// add to the main
useEffect(() => { // fetch comments
  const fetchComments = async () => {
    try {
      const resp = await fetch("http://localhost:3000/comments")
      const data = await resp.json()
      setComments(data)
    } catch (error) {
      alert(error)
    }
   }

   fetchComments()
  
}, [])
// add to the main

useEffect(() => { // fetch paintings
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

        <Switch>      
          <Route path="/paintings/:id">
            <Painting />
          </Route> 

          {/* add to the main */}
          <Route path="/comments">
            <CommentsContainer comments={comments} />
            <CommentForm setComments={setComments} />
          </Route>
          {/* add to the main */}

          <Route path="/">          
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PaintingsContainer paintings={filteredPaintings} setPaintings={setPaintings}/>
          </Route>
          
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
