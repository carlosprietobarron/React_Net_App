import { ReactElement } from "react";
import Cargando from "./Loading";
import Loading from "./Loading";

export default function GenericList(props: GenericListProps){
    if (!props.list){
        if (props.loadingUI){
            return props.loadingUI;
        }
        return <Loading />
    } else if (props.list.length === 0){
        if (props.emptyListUI){
            return props.emptyListUI;
        }
        return <>No hay elementos para mostrar</>
    } else{
        return props.children;
    }
}

interface GenericListProps{
    list: any;
    children: ReactElement;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
}