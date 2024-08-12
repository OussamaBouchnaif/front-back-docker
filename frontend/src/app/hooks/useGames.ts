import { useEffect, useState } from "react";
import endpoint from "../services/endpoint";
import { CanceledError } from "axios";

export interface Game {
    id : number;
    name : string;
}


interface FetchGames {
    count:number;
    results : Game[];
}


export const useGames = () => {
    const [games,setGames] = useState<Game[]>([]);
    const [error,setError] = useState();

    useEffect(()=>{
        const controller = new AbortController();
        endpoint.get<FetchGames>('/games',{signal:controller.signal})
        .then(res => setGames(res.data.results))
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        });
        return () => controller.abort();
    },[])

    return {games , error}
}
