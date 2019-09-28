import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//메인 컴포넌트가 데이터를 다 갖고 있음
//.map을 사용하여 해당 항목을 맵핑하고 새로운 리스트를 만듦
class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {
    greeting: 'Hello!',
    movies: [
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
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Harry Potter",
            poster: "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA1XFxcLzMwMTIzNzI3XFxcL2hhcnJ5LXBvdHRlci0yLmpwZ1wiLFwid2lkdGhcIjo3NjcsXCJoZWlnaHRcIjo0MzEsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5qb2UuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9qb2VcXFwvbm8taW1hZ2UucG5nP2lkPTI2NGEyZGJlMzcwZjJjNjc1ZmNkXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjI5YjgwMDYyODg2N2Y4ODA3MWQ1NzVkZTBmOTZkZTg3ZjNmNThmYjUifQ==/harry-potter-2.jpg"
          }
        ]
      })
    }, 3000)
  }
  
  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;