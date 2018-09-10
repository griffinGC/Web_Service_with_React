import React, {Component} from 'react';
import './movie.css';


class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
//이런식으로 랜더 props를 사용한다.


class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}
export default Movie