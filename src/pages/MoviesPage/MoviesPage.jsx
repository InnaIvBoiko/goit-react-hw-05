import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList'
import { getMovieSearch } from '../../movies-api';

export default function MoviesPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('query') ?? '';
    
    useEffect(() => {
        if (!search) return;
        async function fetchSearch() {
            try {
                setLoading(true);
                const data = await getMovieSearch(search);
                setSearchResults(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchSearch();
    }, [search]);
    
    const handleSubmit = value => {
        setSearchParams({ query: value });
    };

    return (
        <>
            <SearchForm onSearch={handleSubmit} />
            {loading && <b>Loading movies...</b>}
            <MovieList movies={searchResults} />
        </>
    );
}