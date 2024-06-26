import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
    const location = useLocation();
        
    return (
        <ol>
            {movies.map((movie) => (
                <li key={movie.id} className={css.item}>
                    <Link to={`/movies/${movie.id}`} state={location}>{movie.title} </Link>
                </li>
            ))}
        </ol>
    );
}