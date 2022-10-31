import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import  {getTrendingMovies} from '../../shared/api/services'
import s from './MoviesList.module.css';

const MoviesList = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });
const from = useLocation();
    useEffect(() => {
        const fetchMovies = async () => {
            setState(p => ({
                ...p,
                loading: true,
            }));
            try {
                const data = await getTrendingMovies();
                setState(p => ({
                    ...p,
                    items: [...data],
                    loading: false,
                }))
            } catch (error) {
                setState(p => ({
                    ...p,
                    loading: false,
                    error,
                }))
            }
        }
        fetchMovies()
    }, []);

    const { items, loading, error } = state;
    const elements = items.map(({ id, title }) => title !== undefined && <li className={s.item} key={id}>
        <Link className={s.link} to={`/movies/${id}`} state={{ from }}>{ title }</Link>
    </li> )

    return (
        <div className={s.container}>
            {loading && <p>...Loading</p>}
            {error && <p>Movies not found</p>}
            <ul className={s.list}>{elements}</ul>
        </div>
    )
}

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;