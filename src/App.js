import React from "react";
import "./App.css";

import Header from "./shared/Header";
import SearchBox from "./search/SearchBox";
import SavedMovies from "./savedmovies/SavedMovies";

class App extends React.Component {
  constructor(props) {
    super(props);

    const movies = JSON.parse(localStorage.getItem("saved-movies"));
    if (movies && Array.isArray(movies)) {
      this.state = { movies };

      //this.state = {movies} //obj destructuring es6 --> key gets the name of the assigned variable
    } else {
      this.state = {
        movies: [],
      };
    }
  }

  //replace constructor with componentDidMount()

  updateSavedMoviesLocalStorage = () => {
    localStorage.setItem("saved-movies", JSON.stringify(this.state.movies));
  };

  handleAddMovie = (movie) => {
    const savedMovie = this.state.movies.concat(movie); // [...this.state.movies, movie]
    this.setState(
      {
        movies: savedMovie,
      },
      this.updateSavedMoviesLocalStorage()
    );
  };

  handleDeleteMovie = (movieId) => {
    const movies = this.state.movies.filter((movie) => movie.id !== movieId);
    this.setState({ movies }, this.updateSavedMoviesLocalStorage());
  };

  handleSaveMovieRating = (index, rating) => {
    const movies = this.state.movies.map((movie, i) => {
      if (i === index) {
        movie.user_rating = rating;
      }

      return movie;
    });

    this.setState({ movies }, this.updateSavedMoviesLocalStorage());
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox onMovieAdd={this.handleAddMovie} />
        <SavedMovies
          savedMovies={this.state.movies}
          deleteMovie={this.handleDeleteMovie}
          saveMovieRating={this.handleSaveMovieRating}
        />
      </div>
    );
  }
}

export default App;
