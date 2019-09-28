import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*smart component

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
*/

//no state,function render,lifecycle
//just return => dumb component
function Movie({title,poster,genres,synopsis}) {
    return (
//class가 아니므로 this.props는 삭제
//poster설명 = title
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
    
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

Movie.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;