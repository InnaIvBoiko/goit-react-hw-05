import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../movies-api';
import { MdOutlineNoPhotography } from 'react-icons/md';
import css from './MovieCast.module.css';

export default function MovieCast() {const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCast() {
            try {
                setLoading(true);
                const data = await getMovieCast(movieId);
                setCast(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCast();
    }, [movieId]);

    return (
        <>
            {loading && <b>Loading reviews of movie...</b>}
            {cast.length !== 0 && (
                <div>
                    <h2>Movie Cast</h2>
                    <ul>
                        {cast.map(actor => (
                            <li key={actor.id} className={css.item}>
                                {actor.profile_path ? <img
                                    width="200px"
                                    height="300px"
                                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                                    alt={actor.original_name}
                                /> :
                                <MdOutlineNoPhotography color={'#2196f3'} size={200} />}
                                <h3>{actor.name}</h3>  
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {cast.length === 0 && (
                <p>We don't have any cast for this movie.</p>
            )}
        </>
    );
}