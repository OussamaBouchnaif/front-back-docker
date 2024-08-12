import { useEffect, useState } from "react";
import endpoint from "../services/endpoint";
import { CanceledError } from "axios";

export interface Game {
    id : number;
    name : string;
    platform:string;
    score:number
}


interface FetchGames {
    count:number;
    results : Game[];
}


export const useGames = () => {
    const [games,setGames] = useState<Game[]>([]);
    const [error,setError] = useState();
    const [isLoading ,setLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true);
        endpoint.get<FetchGames>('/games',{signal:controller.signal})
        .then(res => {
            setGames(res.data.results);
            setLoading(false);
    })
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });
        return () => controller.abort();
    },[])

    return {games , error , isLoading}
}
