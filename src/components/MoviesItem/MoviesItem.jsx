import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import s from "./moviesItem.module.css"
import { Link, useLocation } from "react-router-dom";

const MoviesItem = ({ item }) => {
    const {
        poster_path,
        overview,
        title,
        vote_average,
        release_date,
        genres, } = item;
    
    const genresItem = genres.map(item => (
        <li key={nanoid()}>{item.name}</li>
    ));
    const getActiveLink = ({ isActive }) => {
        return isActive ? s.itemActive : s.item;
    };
    const releaseDate = release_date.slice(0, 4)
    const voteAverage = (vote_average * 10).toFixed(0);
    const location = useLocation();
    // const comeBack = location.state?.from || '/'
    const comeBack = location.state || '/'
    return (
        <>
            <Link to={comeBack}>Go back</Link>
            <div className={s.container}>
                <img
                    className={s.img}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    width="300"
                    height="400"
                />
                <div >
                    <h2>{`${title} (${releaseDate})`}</h2>
                    <p>
                        USER SCORE: <span className={s.text}>{voteAverage}%</span>
                    </p>
                    <p>
                        OVERVIEW: <span className={s.text}>{overview}</span>
                    </p>
                    <p>GENRES:</p>
                    <ul className={s.list}>
                        {genresItem}
                    </ul>
                </div>
            </div>
            <ul className={s.secList}>
                <li className={s.secListIt}>
                    <Link className={getActiveLink} to='cast' state={{ from: comeBack }}>
                        Cast
                    </Link>
                </li>
                <li className={s.secListIt}>
                    <Link className={getActiveLink} to='reviews' state={{ from: comeBack }}>
                        Reviews
                    </Link>
                </li>
            </ul>
        </>
    );
};

MoviesItem.defaultProps = {
  item: [],
};

MoviesItem.propTypes = {
    item: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ),
    }),
};
export default MoviesItem;