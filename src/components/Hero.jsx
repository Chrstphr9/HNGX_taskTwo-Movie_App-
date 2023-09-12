import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './Navbar';
const API_IMG = "https://image.tmdb.org/t/p/w500/"
const CAROUSEL_DELAY = 3000;


const Hero = ({ title, poster_path, overview, firstFiveMovies, setMovies}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevState)=> prevState+1 === firstFiveMovies?.length ? 0 : prevState+1 )
      })
    
      return () => {
        clearInterval(intervalId)
      }
    }, [firstFiveMovies])
    



  return (
    <div>
    <h1>{title}</h1>
    <img src={API_IMG + poster_path} alt="nthn" />
    <p>{overview}</p>
    </div>
  )
}

export default Hero