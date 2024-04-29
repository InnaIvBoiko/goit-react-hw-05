import { useEffect, useState } from 'react';
import { getMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await getMovies();
                setMovies(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            {loading && <b>Loading movies...</b>}
            <MovieList movies={movies}/>
        </>
    );
}