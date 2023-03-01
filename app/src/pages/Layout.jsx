import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <h1 className="title">Allo Movies</h1>
        <nav className="navbar">
            <Link to="/movies">
                <button className="navBtn pointer">Movies</button>
            </Link>
            <Link to="/directors">
                <button className="navBtn pointer">Directors</button>
            </Link>
            <Link to="/categories">
                <button className="navBtn pointer">Categories</button>
            </Link>
        </nav>

        <Outlet />
        </>
    )
};

export default Layout;
