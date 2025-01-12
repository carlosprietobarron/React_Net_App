import { useHistory } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenres(){
    const history = useHistory();
    return (
        <>
        <h3>Create Genere</h3>
        <Button onClick={() => history.push('/generes')}>Save</Button>
        </>
    )
}