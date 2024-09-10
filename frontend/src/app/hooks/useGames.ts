import { useData } from "./useData";

export interface Game {
    id : number;
    name : string;
    platform:string;
    score:number
}

export const useGames = () => useData<Game>('/games')

