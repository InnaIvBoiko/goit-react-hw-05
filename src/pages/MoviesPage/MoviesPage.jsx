import { useState } from 'react';
import { getMovies } from '../../movies-api';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    async function fetchMovies() {
        try {
            const data = await getMovies();
            setMovies(data);
        } catch (error) {
            setError(true);
        }
    }

    fetchMovies();

    return (
        <>
            <h1>MoviesPage</h1>
            {movies.length > 0 && <MovieDetailsPage movies={movies} />}
        </>
    );
}