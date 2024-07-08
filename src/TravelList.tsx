import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const travelState = atom<ICountry[]>({
    key:"country",
    default: [],
})

interface IForm {
    Country:string,
}

interface ICountry {
    id:number;
    text:string;
    category: "Country" | "Traveled" | "Favorite";

}

function TravelList() {
    const [countryState, setCountryState] = useRecoilState(travelState);  //  이 함수는 value와 modifier을 반환한다.
    /*
    const value = useRecoilValue(travelState);  //  1. atom으로부터 값을 불러옴, value는 array
    const modFn = useSetRecoilState(travelState);  //  2. atom의 값을 바꾸는 modifier funciton
    */
    const { register, handleSubmit, formState: {errors}, setError, setValue} = useForm<IForm>();
    const onValid = ({Country}:IForm) => {
        setCountryState((prev) => [{id:Date.now(), text:Country, category:"Country"}, ...prev]);
        setValue("Country", "");
    };
    console.log(countryState);
    return (
        <div>
            <h1>내가 가고 싶은 나라들</h1>
        <div>
            <form 
            style={ {
                display:"flex", flexDirection:"column"}}
                onSubmit={handleSubmit(onValid)}
                >
                <input {...register("Country", {
                    required: "😖 required!!!"
                })} placeholder="이름"/>
                <span>{errors?.Country?.message}</span>
                <button>가즈아!!!</button>
            </form>
            <ul>
                {countryState.map((country) => <li key={country.id}>{country.text}</li>)}
            </ul>
        </div>
        </div>
    );
}

export default TravelList;