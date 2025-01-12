import { movie } from './movies.model'
import SingleMovie from './SingleMovie'
import css from './MovieList.module.css'
import Cargando from '../utils/Loading'
import ListadoGenerico from './../utils/ListadoGenerico'

export default function MovieList(props: listadoPeliculasProps) {
    return (
        <GenericList movielist={props.peliculas}>
            <div className={css.div}>
                {props.movies?.map(pelicula =>
                    <singlemovie movie={movie}
                        key={movie.id}
                    />)}
            </div>
        </GenericList>

    )
}

interface listadoPeliculasProps {
    peliculas?: pelicula[]
}