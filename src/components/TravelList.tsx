import { useRecoilValue } from "recoil";
import { travelState } from "../atoms";
import CreateCountry from "./CreateCountry";
import Country from "./Country";

function TravelList() {
    const countryState = useRecoilValue(travelState);
    console.log(countryState);
    return (
        <div>
            <h1>내가 가고 싶은 나라들</h1>
            <CreateCountry />
        <div>
            <ul>
                {countryState.map((country) => <Country key={country.id} {...country} />)} 
            </ul>
        </div>
        </div>
    );
}

export default TravelList;