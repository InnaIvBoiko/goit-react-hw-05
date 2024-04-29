import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import { getMovieById } from '../../movies-api';
import NotFoundPage from '../NotFoundPage/NotFoundPage';


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>';

    useEffect(() => {
        async function fetchMovie() {
            try {
                setLoading(true);
                const data = await getMovieById(movieId);
                setMovieData(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [movieId]);

    if (!movieData) {
        return <NotFoundPage />;
    }

    return (
        <>
            <Link to=''>Go back</Link>
            {loading && <b>Loading details of movie...</b>}
            <div>
                <img src={
                    movieData.poster_path ?
                        `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                        : defaultImg
                }
                    width={250}
                    alt={movieData.tagline} />
                <div>
                    <h1>{movieData.title}({movieData.release_date.slice(0, 4)})</h1>
                    <p>User Score: {Math.round(movieData.vote_average * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{movieData.overview}</p>
                    <h3>Genres</h3>
                    <p>
                        {movieData.genres.map(item => (
                            <span key={item.id}>
                                {item.name}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            
            <ul>
                <li>
                    <Link to='cast' element={<MovieCast />}>Cast</Link>
                </li>
                <li>
                    <Link to='reviews' element={<MovieReviews />} >Reviews</Link>
                </li>
            </ul>

            <Suspense fallback={<b>Loading nested route...</b>} >
                <Outlet />
            </Suspense>
        </>
    );
}