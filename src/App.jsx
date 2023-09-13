import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Featured from "./components/feature";
import Footer from "./components/Footer";
import MovieDetails from './components/movieDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=146776457697eb1d2f870174b4db5ee8";
function App() {
  const [movies, setMovies] = useState([]);
  const [firstFiveMovies, setFirstFiveMovies] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results.slice(0, 12))
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
    <Router>
    <Routes>
      <Route path="/" element={<Hero firstFiveMovies={firstFiveMovies} movies={movies} setFirstFiveMovies={setFirstFiveMovies} setMovies={setMovies} />} />
      <Route path="/featured" element={<Featured movies={movies} setMovies={setMovies} />} />
      {/* Use the :id parameter in the path */}
      <Route path="/movies/:id" element={<MovieDetails />} />
    </Routes>
    <Footer />
  </Router>

  )
}

export default App
