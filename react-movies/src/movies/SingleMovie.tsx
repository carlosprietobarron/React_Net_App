import { movie } from "./movies.model";
import css from './SingleMovie.module.css';

export default function SingleMovie(props: singleMOvieProps){

    const constructLink = () => `/movies/${props.movie.id}`

    return (
        <div className={css.div}>
            <a href={constructLink()}>
                <img src={props.movie.poster} alt="Poster" />
            </a>
            <p>
                <a href={constructLink()}>{props.movie.title}</a>
            </p>
        </div>
    )
}

interface singleMOvieProps{
    movie: movie;
}