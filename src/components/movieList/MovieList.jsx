import React from 'react';
import "./movieList.css";
import MovieCard from '../movieCard/MovieCard';

const MovieList = ({movies, searchTitle, searchRate}) => {
  return (
    <div className='cartes'>
      {movies.filter(movie=> 
        movie.title.toUpperCase().includes(searchTitle.toUpperCase())
        && movie.rate >= searchRate
      )
       .map((movie) => (
        <MovieCard movie={movie} key={movie.id} />))}  
        </div>
  )
}

export default MovieList