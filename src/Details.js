import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import MovieDetails from "./MovieDetails";
import "./Details.css"

export default function Details(props){
        const [singleMovieData, setSingleMovieData] = useState("");
        const staySame = "I should stay unique";
        useEffect(() => {
            async function getData() {
                await axios.get(`http://www.omdbapi.com/?i=${props.id}&plot=full&apikey=77faf2ff`)
                    .then(res => {
                        const movieData = res.data;
                        setSingleMovieData(movieData);
                    });
            }
            getData();
        }, [staySame]);

        return (
            <div className="Details">
                <Navbar />
                <MovieDetails {...singleMovieData} />
            </div>
        )
  }