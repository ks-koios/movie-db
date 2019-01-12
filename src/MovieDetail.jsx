import React, { Component } from 'react';

const POSTER_PATH = "http://image.tmdb.org/t/p/w154"
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280"


class MoviesDetail extends Component {
  state = {
    movie: {}
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5a3ed6513ac589600cf0f533446d29fe&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt="" />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt="" />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MoviesDetail;