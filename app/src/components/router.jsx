import {Routes, Route, Navigate} from "react-router-dom";
import Layout from '../pages/Layout.jsx';
import Movies from '../pages/Movies.jsx';
import Directors from '../pages/Directors.jsx';
import Categories from '../pages/Categories.jsx';
import DetailsMovie from '../pages/DetailsMovie.jsx';
import EditMovie from '../pages/EditMovie.jsx';
import AddMovie from '../pages/AddMovie.jsx';
import DetailsDirector from '../pages/DetailsDirector.jsx';
import EditDirector from '../pages/EditDirector.jsx';
import AddDirector from '../pages/AddDirector.jsx';
import EditCategory from "../pages/EditCategory.jsx";
import AddCategory from "../pages/AddCategory.jsx";

const Router = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/movies" />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/details/:id" element={<DetailsMovie />} />
                <Route path="/movies/edit/:id" element={<EditMovie />} />
                <Route path="/movies/add/" element={<AddMovie />} />
                <Route path="/directors" element={<Directors />} />
                <Route path="/directors/details/:id" element={<DetailsDirector />} />
                <Route path="/directors/edit/:id" element={<EditDirector />} />
                <Route path="/directors/add/" element={<AddDirector />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/edit/:id" element={<EditCategory />} />
                <Route path="/categories/add/" element={<AddCategory />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default Router;