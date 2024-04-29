import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
    params: {language: 'en-US'},
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzZmMGM0ODFmM2NjMzY5OTY1ODhkZWU3MzIyMjlkZiIsInN1YiI6IjY2MmQwYTZhYTE5OWE2MDEyNTcyMjQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gd58qd3bpQVYtzQC9bZ0krmoe-GFqD60xoaB2TNyCho'
    }
};

export const getMovies = async () => {
    const response = await axios.get('/trending/movie/day', options);
    return response.data.results;
};

export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`, options);
    return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits?`, options);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?`, options);
    return response.data.results;
};

export const getMovieSearch = async (search) => {
    const response = await axios.get(`/search/movie?query=${search}`, options);
    return response.data.results;
};
