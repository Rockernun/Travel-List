import {useForm} from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { travelState } from "../atoms";

interface IForm {
    Country:string,
}

function CreateCountry() {
    const setCountryState = useSetRecoilState(travelState);
    const { register, handleSubmit, setValue, formState:{errors}  } = useForm<IForm>();
    const onValid = ({Country}:IForm) => {
        setCountryState((prev) => [{id:Date.now(), text:Country, category:"Country"}, ...prev]);
        setValue("Country", "");
    };
    return (
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
    );
}

export default CreateCountry;