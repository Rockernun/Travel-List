import { atom } from "recoil";

export const travelState = atom<ICountry[]>({
    key:"country",
    default: [],
})

export interface ICountry {
    id:number;
    text:string;
    category: "Country" | "Traveled" | "Favorite" | "Trash" | "Check";
}