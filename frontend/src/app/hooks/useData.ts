import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import endpoint from "../services/endpoint";

interface FetchResponse<T> {
    count:number;
    results: T[];
}

export const useData = <T>(uri : string) => {

    const [data,setData] = useState<T[]>([]);
    const [error,setError] = useState();
    const [isLoading ,setLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true);
        endpoint.get<FetchResponse<T>>(uri,{signal:controller.signal})
        .then(res => {
            console.log(res.data.results)
            setData(res.data.results);
            setLoading(false);
    })
        .catch(err => {
            console.log('error');
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });
        return () => controller.abort();
    },[])

    return {data , error , isLoading}
}