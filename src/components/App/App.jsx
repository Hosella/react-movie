import { useState } from 'react';
import { InputsList } from '../InputsList';
import { MovieList } from '../MovieList';
import { movies } from '../../utils/movies';
import './App.scss';

function App() {
  const [newMovie, setNewMovie] = useState(movies);

  console.log(newMovie)

  function addNewMovie(anotherMovie) {
    setNewMovie([...newMovie, anotherMovie]);
  }

  return (
    <div className="App">
      <MovieList movies={newMovie} />
      <InputsList addNewMovie={addNewMovie} />
    </div>
  );
}

export default App;
