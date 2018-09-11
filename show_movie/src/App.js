import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie'

const movies = [
  {
    title : "Matrix",
    poster : "https://cdn.namuwikiusercontent.com/s/13785482ee9d3c792dc09eb2404f270a794c0f0435ce63473acf6cf2e34fc9e338fa812351e1710a73790fb8c3eb20970f07ad793f2d0c9e25468d510840efde911da5703036717866031fc581cdd710?e=1539639796&k=YIvwkeHAC0Hyd0Qb9GX1wA"
  },
  {
    title : "New World",
    poster : "http://newsimg.sedaily.com/2017/05/19/1OFZEVGVFT_1.jpg"
  },
  {
    title : "Inception",
    poster : "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title : "StarWars",
    poster : "https://shortlist.imgix.net/app/uploads/2015/12/04110243/50-of-the-best-star-wars-quotes-60-852x568.jpg?w=1640&h=1&fit=max&auto=format%2Ccompress"
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie,index) => { //인자가 2개이니까 괄호로 인자를 묶어줌!
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
      
    );
  }
}

export default App;
