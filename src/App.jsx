import { useEffect, useState } from "react";
import Hero from "./components/Hero";

const API_URL= " https://api.themoviedb.org/3/movie/popular?api_key=146776457697eb1d2f870174b4db5ee8";
function App() {
  const [movies, setMovies]=useState([]);
  
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=> {
      console.log(data);
      setMovies(data.results)
    })
  }, [])
  

  return (
    <>
     {movies.map((movieReq)=>
     <Hero key={movieReq.id} {...movieReq}/>)}
    </>

  )
}

export default App
