import { useData } from "./useData";

export interface Genre {
    id:number;
    name:string
} 


export const useGenres = () => useData<Genre>('/genre');
    
