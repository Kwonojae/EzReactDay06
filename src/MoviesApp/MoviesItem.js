import React, { Component } from 'react';

class MoviesItem extends Component {
    render() {
        const {movie} = this.props
        return (
            <>
                <tr>
                    <td>{movie.movieNm}</td>
                    <td>{movie.salesAmt}</td>
                    <td>{movie.audiCnt}</td>
                    <td>{movie.salesShare}</td>
                    <td></td>
                </tr>  
            </>
        );
    }
}

export default MoviesItem;