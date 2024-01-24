import { MovieItem } from '../MovieItem';
import './style.scss'

export const MovieList = ( { movies } ) => {
  return (
    <div className='MovieList'>
      {movies.map((movie) => (
          <MovieItem movie={movie} key={movie.imdbId}/>
      ))}
    </div>
  );
}