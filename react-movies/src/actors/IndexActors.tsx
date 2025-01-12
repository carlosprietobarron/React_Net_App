import { Link } from "react-router-dom";

export default function IndexActors() {
    return (
        <>
            <h3>Actors Index</h3>
            <Link to="actors/create">Crear Actor</Link>
        </>

    )
}