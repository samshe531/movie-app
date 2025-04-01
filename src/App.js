

import { useState } from 'react';
import './App.css';
import MovieList from './components/movieList/MovieList';
import { moviesData } from "./moviesData.js";
import AddMovie from './components/addMovie/AddMovie.jsx';
import FilterTitle from './components/filterTitle/FilterTitle.jsx';
import FilterRate from './components/filterRate/Rating.jsx'

function App() {

  const [movies, setMovies] = useState(moviesData);
  //fonction pour ajouter le nouveau movie dans le tableau movies
  const movieAdd = (newMoviee) => {
setMovies([...movies,newMoviee])
  }
  //useState pour récupérer ce que l'utilisateur saisi pour faire la recherche par titre
  const [searchTitle, setSearchTitle] = useState("")
  const [searchRate, setSearchRate] = useState(1)

  return (
    <div className="App">
     <h1>Movies App</h1>
     <FilterTitle searchTitle={searchTitle} setSearchTitle={setSearchTitle}/>
     <FilterRate searchRate={searchRate} setSearchRate={setSearchRate} isRate={false}/>
     <AddMovie movieAdd={ movieAdd }/>
     <MovieList movies={movies} searchTitle={searchTitle} searchRate={searchRate} />  {/*envoie des props */}
    </div>
  );
}

export default App;
 