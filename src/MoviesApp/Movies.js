import React, { Component } from 'react';
import './Movies.scss';
import '../utils/css/reset.scss'
import MoviesView from './MoviesView';
import MoviesList from './MoviesList';
import Data from '../utils/api/data.json'

class Movies extends Component {
    state = {
        movies : Data
    }
    render() {
        const {movies} = this.state
        return (
            <div>
                <MoviesView/>
                <MoviesList movies={movies}/>
            </div>
        );
    }
}

export default Movies;