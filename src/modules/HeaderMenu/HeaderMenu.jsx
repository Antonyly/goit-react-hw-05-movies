import { NavLink } from "react-router-dom";
import s from './headerMenu.module.css';

const getActiveLink = ({ isActive }) => {
    return isActive ? s.itemActive : s.item
};

const HeaderMenu = () => {
    return (
        <header className={s.list}>
            <NavLink className={getActiveLink} to="/" end>Home</NavLink>
            <NavLink className={getActiveLink} to="/movies" end>Movies</NavLink>
        </header>
    )
}

export default HeaderMenu;