import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies =[
  {
    id: 1,
    title: "JohnWick1",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/John_Wick_TeaserPoster.jpg/220px-John_Wick_TeaserPoster.jpg",
  },
  {
    id: 2,
    title: "JohnWick2",
    poster: "https://img01.mgo-images.com/image/thumbnail/v2/content/MMV9D183EB36CDF6353B4D01D15A3BF1F70A.jpeg"
  },
  {
    id: 3,
    title: "JohnWick3",
    poster: "https://images-na.ssl-images-amazon.com/images/I/91wc7yc2R8L._SL1500_.jpg"
  },
  {
    id: 4,
    title: "Fast & Furious",
    poster: "https://www.dvdsreleasedates.com/posters/800/F/Fast-and-Furious-Presents-Hobbs-and-Shaw-2019-movie-poster.jpg"
  }
]

//메인 컴포넌트가 데이터를 다 갖고 있음
//.map을 사용하여 해당 항목을 맵핑하고 새로운 리스트를 만듦
class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {
    greeting: 'Hello!'
  }

  componentDidMount() {
    this.setState({
      greeting: 'Hello Again!'
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;