import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string,
        poster: PropTypes.string
    }

    render() {
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}

//필수요건으로 지정후 데이터가 없을경우 메세지 받음
class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        return(
            <img src={this.props.poster} alt="빡빡이들"/>
        )
    }
}
    
    

export default Movie;