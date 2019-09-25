import React from 'react';
import './Movie.css';

const Movie = () => (
    <div>
        <MoviePoster />
        <h1>Hello! This is a Moive</h1>
    </div>
)

const MoviePoster = () => (
    <img src="https://img.hankyung.com/photo/201908/01.20268354.1.jpg" alt="빡빡이" />
)


// class Movie extends Component{
//     render() {
//         return(
//             <h1>Hello! This is a movie</h1>
//         )
//     }
// }

export default Movie;