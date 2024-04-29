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

export const getMovieById = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}`, options);
    return response.data;
};