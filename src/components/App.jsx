import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import s from './app.module.css';

const HeaderMenu = lazy(() => import("../modules/HeaderMenu"));
const HomePage = lazy(() => import("../pages/HomePage"));

export const App = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <HeaderMenu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/movies" element={<SearchPage />} />
        <Route path="movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} /> */}
            </Routes>
        </Suspense>
    );
}
