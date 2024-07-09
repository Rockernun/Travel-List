import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "countryLocal",
    storage: localStorage,
});

export const travelState = atom<ICountry[]>({
    key:"country",
    default: [],
    effects_UNSTABLE:[persistAtom],
});

export interface ICountry {
    id:number;
    text:string;
    category: "Country" | "Traveled" | "Favorite";
}

export const CountrySelector = selector({
    key:"CountrySelector",
    get: ({get}) => {
        const Countries = get(travelState);
        return [
            Countries.filter((Country) => Country.category === "Country"),
            Countries.filter((Country) => Country.category === "Traveled"),
            Countries.filter((Country) => Country.category === "Favorite"),
        ];
    },
});