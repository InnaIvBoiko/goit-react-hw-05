import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews.jsx'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast.jsx'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
