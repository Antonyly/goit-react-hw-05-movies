import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet, Link, useLocation } from "react-router-dom";
import MoviesItem from '../../components/MoviesItem';

import { getMovieById } from '../../shared/api/services';
import s from './SingleMoviePage.module.css';

const SingleMoviePage = () => {
    
    const [state, setState] = useState({
        movie: {},
        loading: false,
        error: null,
    });

    const { movie, loading, error } = state;


    const { id: StrId } = useParams();
  const id = Number(StrId);

    const location = useLocation();

     const goBack = location?.state?.from ?? '/';

    useEffect(() => {
        const fetchMovies = async () => {
            setState(p => ({
                ...p,
                loading: true,
            }))

            try {
                const movieEl = await getMovieById(id);
                setState((p) => {
          return { ...p, loading: false, movie: { ...movieEl } };
        });
            } catch (error) {
                setState(p => ({
                    ...p,
                    loading: false,
                    error,
                
                }))
            }
        }
        if (id) {
      fetchMovies()
    }
        
    }, [id]);

    const getActiveLink = ({isActive}) => {
    return isActive ? s.itemActive : s.item;
}

    
    const isMovie = Object.keys(movie).length > 0;
    return (
        <>
            <div className={s.container}>
                <Link className={s.button} to={goBack}>
                    Go back
                </Link>
            
                {loading && <p>...Loading</p>}
                {error && <p>Movie not found</p>}
                {isMovie && <MoviesItem item={movie} />}
                {isMovie && <NavLink className={getActiveLink} to={`cast`} state={{ from: goBack }}>Cast</NavLink>}
                {isMovie && <NavLink className={getActiveLink} to={`reviews`} state={{ from: goBack }}>Reviews</NavLink>}
                
            </div>
            <Outlet />
        </>
    );
}

export default SingleMoviePage;