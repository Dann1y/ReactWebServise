import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//메인 컴포넌트가 데이터를 다 갖고 있음
//.map을 사용하여 해당 항목을 맵핑하고 새로운 리스트를 만듦

class App extends Component {
  
  //cycle
  // Render: componentWillMount() -> render() -> componentDidMount()
  
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {}

//AjAX는 url을 JavaScript로 비동기화로 불러온다.
//Ajax의 A가 Asynchronous인 이유
  componentDidMount() {
    fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
  }

  //리액트 자체 함수와 나의 함수에 차이를 두기위해 _를 사용함
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App"> 
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;