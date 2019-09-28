import React from 'react';
//import PropTypes from 'prop-types';
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
function Movie({title,poster}) {
    return (
//class가 아니므로 this.props는 삭제
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>   
    )
}

// const Movie = () => (
//     <div>
//         <MoviePoster poster={poster} />
//         <h1>{title}</h1>
//     </div>      
// )

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="빡빡이들"/>
    )
    
}

export default Movie;