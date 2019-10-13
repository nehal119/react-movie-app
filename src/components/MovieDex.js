import React, { Component } from 'react'
import axios from 'axios';
import Movie from "./Movie";
import "../styles/MovieDex.css"
import Navbar from "./Navbar";

export default class MovieDex extends Component {
    constructor(props){
        super(props);
        this.state = {movies: [], searched: "holmes"}
        this.handleSearch = this.handleSearch.bind(this);
    }
    // componentDidMount(){
    //     axios.get(`http://www.omdbapi.com/?s=${this.state.searched}&apikey=77faf2ff`)
    //     .then(res => {
    //         const movies = res.data.Search;
    //         this.setState({movies: movies});
    //     });
    // }
    handleSearch(value){
        this.setState({searched: value});
    }
    render() {
        if(this.state.searched !== ""){
            axios.get(`http://www.omdbapi.com/?s=${this.state.searched}&apikey=77faf2ff`)
        .then(res => {
            const movies = res.data.Search;
            this.setState({movies: movies});
             this.setState({searched: ""});        
        });
        }
        console.log(this.state.searched);
        const toShow = this.state.movies.map(temp => (
            <Movie data={temp} />
        ))
        return (
            <div>
            <Navbar handleSearch={this.handleSearch} />
            <div className="MovieDex">
                {toShow}
            </div>
            </div>
        )
    }
}

