import { useParams } from "react-router-dom";

export default function EditGenere() {

    const { id }: any = useParams();

    return (
        <>
            <h3>Edit Genere</h3>
            <h4> The id is {id}</h4>
        </>

    )
}