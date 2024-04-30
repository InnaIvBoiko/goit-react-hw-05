import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../movies-api';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function fetchReviews() {
            try {
                setLoading(true);
                const data = await getMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchReviews();
    }, [movieId]);

    return (
        <>
            {loading && <b>Loading reviews of movie...</b>}
            {reviews.length !== 0 && (
                <div>
                    <h2>Movie Reviews</h2>
                    <ul>
                        {reviews.map(review => (
                            <li key={review.id} className={css.item}>
                                <h3 className={css.author}>Author: {review.author}</h3>
                                <p>{review.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {reviews.length === 0 && (
                <p>We don't have any reviews for this movie.</p>
            )}
        </>
    );
}