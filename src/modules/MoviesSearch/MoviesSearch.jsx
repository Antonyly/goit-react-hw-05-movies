import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import MoviesSearchForm from './MoviesSearchForm/MoviesSearchForm';
import { searchMovies } from "shared/api/services";
import s from './MoviesList.module.css';


const MoviesSearch = () => {

const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");

    useEffect(() => {
        async function fetchMoviesBySearch() {
            setState(p => ({
                ...p, 
                loading: true,
            }))
            try {
                const data = await searchMovies(search);
                setState(p => ({
                  ...p,
                  loading: false,
                    items: data.results,
                }))
            }
            catch (error) {
              setState((p) => {
                return { ...p, loading: false, error };
              });
            }
        }
      if (search) {
          fetchMoviesBySearch();
        }
    }, [search])
    
    const changeSearch = ({ search }) => setSearchParams({search});
    const { items, error, loading } = state;

      const elements = items.map(({ id, title }) => title !== undefined && <li className={s.item} key={id}>
         <Link className={s.link} to={`/movies/${id}`}>{ title }</Link>
    </li>)
  
  return (
    <>
      <MoviesSearchForm onSubmit={changeSearch} />
      {loading && <p>...Loading</p>}
      {error && <p>Movies not found</p>}
      {items.length > 0 && <ul className={s.list}>{elements}</ul>}
    </>
  );
}

MoviesSearch.defaultProps = {
  items: [],
};

MoviesSearch.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesSearch;