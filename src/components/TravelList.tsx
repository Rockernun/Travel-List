import { useRecoilValue } from "recoil";
import { CountrySelector, travelState } from "../atoms";
import CreateCountry from "./CreateCountry";
import Country from "./Country";

function TravelList() {
    const [country, traveled, favorite] = useRecoilValue(CountrySelector);
    return (
        <div>
            <h1>내가 가고 싶은 나라들</h1>
            <CreateCountry />
        <div>
            <ul>
                {country && country.map((country) => <Country key={country.id} {...country} />)} 
            </ul>
            <h1>내가 가본 나라들</h1>
            <ul>
                {traveled && traveled.map((country) => <Country key={country.id} {...country} />)}   
            </ul>
            <h1>내가 좋아하는 나라들</h1>
            <ul>
                {favorite && favorite.map((country) => <Country key={country.id} {...country} />)}   
            </ul>
        </div>
        </div>
    );
}

export default TravelList;
