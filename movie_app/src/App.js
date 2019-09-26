import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "JohnWick1",
  "JohnWick2",
  "JohnWick3",
  "Fast & Furious"
]

//이미지 주소 긁어오기
const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/John_Wick_TeaserPoster.jpg/220px-John_Wick_TeaserPoster.jpg",
  "https://img01.mgo-images.com/image/thumbnail/v2/content/MMV9D183EB36CDF6353B4D01D15A3BF1F70A.jpeg",
  "https://images-na.ssl-images-amazon.com/images/I/91wc7yc2R8L._SL1500_.jpg",
  "https://www.dvdsreleasedates.com/posters/800/F/Fast-and-Furious-Presents-Hobbs-and-Shaw-2019-movie-poster.jpg"
]

//메인 컴포넌트가 데이터를 다 갖고 있음
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
    </div>
    );
  }
}

export default App;
