import { useState } from "react";
import Home from "./pages/Home"


function App() {
  const [movies, setMovies]=useState([]);

  return (
    <>
     {movies.map((moviesReq)=><Home />)}
    </>
    
  )
}

export default App
