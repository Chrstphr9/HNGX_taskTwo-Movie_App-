import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Featured from "./components/feature";
import Footer from "./components/Footer";
import MovieDetails from './components/movieDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const movieUrl = "import.meta.env.VITE_MOVIEBOX_URL";
function App() {
  const [movies, setMovies] = useState([]);
  const [firstFiveMovies, setFirstFiveMovies] = useState([])

  useEffect(() => {
    fetch(movieUrl)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results.slice(0, 12))
      })
  }, [])

  useEffect(() => {
    fetch(movieUrl)
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
      <Route path="/movies/:id" element={<MovieDetails />} />
    </Routes>
    <Footer />
  </Router>

  )
}

export default App
