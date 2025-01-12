import {NavLink} from 'react-router-dom'

export default function Menu() {
    const claseActiva = "active";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" 
                activeClassName={claseActiva} 
                to="/">React Movies</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/genres">
                                Genres
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/movies/filter">
                                Filter Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/actors">
                                Actors
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/movies">
                                Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/movies/create">
                                Create Movies
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}