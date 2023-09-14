import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tv from "../assets/tv.png"
import Home from "../assets/Home.png"
import movie from "../assets/movie.png"
import series from "../assets/series.png"
import calendar from "../assets/calendar.png"
import Logout from "../assets/Logout.png"
import List from "../assets/List.png"
import ticket from "../assets/ticket.png"
import down from "../assets/down.png"
import { Link } from 'react-router-dom';

const API_KEY = "146776457697eb1d2f870174b4db5ee8"
const API_URL = "https://api.themoviedb.org/3/movie/"

const movieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
        const fetchMOvieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}${id}?api_key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error("Movie Not Found")
                }
                const data = await response.json();
                setMovieDetails(data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchMOvieDetails();
    }, [id]);

    const handleBackButtonClick = () => {
        navigate(-1)
    }

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div></div>
    )
}

export default movieDetails
