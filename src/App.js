

import { useState } from 'react';
import './App.css';
import MovieList from './components/movieList/MovieList';
import { moviesData } from "./moviesData.js";
import AddMovie from './components/addMovie/AddMovie.jsx';
import FilterTitle from './components/filterTitle/FilterTitle.jsx';
import { NavBar } from './components/navBar/NavBar.jsx';

function App() {

  const [movies, setMovies] = useState(moviesData);
  //fonction pour ajouter le nouveau movie dans le tableau movies
  const movieAdd = (newMoviee) => {
setMovies([...movies,newMoviee])
  }
  //useState pour récupérer ce que l'utilisateur saisi pour faire la recherche par titre
  const [searchTitle, setSearchTitle] = useState("")
  return (
    <div className="App">
      <NavBar />
     <h1>Movies App</h1>
     <FilterTitle searchTitle={searchTitle} setSearchTitle={setSearchTitle}/>
     <AddMovie movieAdd={ movieAdd }/>
     <MovieList movies={movies} searchTitle={searchTitle} />  {/*envoie des props */}
    </div>
  );
}

export default App;
 