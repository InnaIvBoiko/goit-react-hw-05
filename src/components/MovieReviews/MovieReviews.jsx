// import css from './MovieReviews.module.css';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function fetchReviews() {
            try {
                setLoading(true);
                const data = await getMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                setError(true);
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
                            <li key={review.id}>
                                <h3>Author: {review.author}</h3>
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