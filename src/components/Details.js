import React, { Component } from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import MovieDetails from "./MovieDetails";
import "../styles/Details.css"

export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {singleMovieData: ""}
    }
 async  componentDidMount(){
        await axios.get(`http://www.omdbapi.com/?i=${this.props.id}&plot=full&apikey=77faf2ff`)
            .then(res => {
                const singleMovieData = res.data;
                this.setState({singleMovieData: singleMovieData});
            });
    }
    render() {
        const data = this.state.singleMovieData
        return (
            <div className="Details">
                <Navbar />
                <MovieDetails {...data} />
            </div>
        )
  }}