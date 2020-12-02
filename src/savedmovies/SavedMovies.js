import React from "react";
import { Button } from "@material-ui/core";
import TrashIcon from "@material-ui/icons/Delete";
import styles from "./SavedMovies.module.css";
import Rating from "../shared/rating/Rating";
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const MovieItem = (props) => {
  const movie = props.movie;
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const movieIndex = props.movieIndex;

  return (
    <li className="movie_item" key={movie.id}>
      <Card>
        <CardMedia
          component="img"
          alt={movie.title}
          height="140"
          image={imgUrl}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <CardContent classes={{ root: styles.detailsContainer }}>
            <Typography gutterBottom variant="body1" component="span" className={styles.releaseDate}>
              Release Date: {movie.release_date}
            </Typography>
            <Typography gutterBottom variant="body1" component="span">
              User Rating: {movie.vote_average}/10
            </Typography>
          </CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <TrashIcon onClick={() => props.deleteMovie(movie.id)} />
          </Button>
          <span>
            <Rating
              activeIndex={movie.user_rating}
              itemIndex={movieIndex}
              handleOnClick={props.saveMovieRating}
            />
          </span>
        </CardActions>
      </Card>
    </li>
  );
};

const SavedMovies = (props) => {
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul className={styles.movieList}>
          {props.savedMovies.map((movie, index) => (
            <MovieItem
              movie={movie}
              movieIndex={index}
              deleteMovie={props.deleteMovie}
              saveMovieRating={props.saveMovieRating}
            />
          ))}
        </ul>
      ) : (
        "No saved movies"
      )}
    </div>
  );
};

export default SavedMovies;
