import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Movie from "./Movie";
import "./MovieDex.css"
import Navbar from "./Navbar";

export default function MovieDex(){
    
    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState("thor");
    function handleSearch(value){
        setSearched(value);
    }
    useEffect (() => {
        async function getData() {
            await axios.get(`http://www.omdbapi.com/?s=${searched}&apikey=77faf2ff`)
                .then(res => {
                    const movi = res.data.Search;
                    console.log(res.data)
                    setMovies(movi);
                    setSearched("");        
        });
        }
        getData();
    })
        const toShow = movies.map(temp => (
            <Movie data={temp} />
        ))
        return (
            <div>
            <Navbar handleSearch={handleSearch} />
            <div className="MovieDex">
                {toShow}
            </div>
            </div>
        )
    }


