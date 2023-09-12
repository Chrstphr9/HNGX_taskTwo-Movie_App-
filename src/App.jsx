import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Featured from "./components/feature";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=146776457697eb1d2f870174b4db5ee8";
function App() {
  const [movies, setMovies] = useState([]);
  const [firstFiveMovies, setFirstFiveMovies] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.result.slice(0, 12))
      })
  }, [])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstFiveMovies(data.results.slice(0, 5));
      })
  }, [])



  return (
    <>
      <Hero firstFiveMovies={firstFiveMovies} setFirstFiveMovies={setFirstFiveMovies} setMovies={setMovies} />
      <Featured movies={movies} setMovies={setMovies} />

    </>

  )
}

export default App
