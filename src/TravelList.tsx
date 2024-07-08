import { useForm } from "react-hook-form";

interface ICountry {
    Country:string,
}

function TravelList() {
    const { register, handleSubmit, formState: {errors}, setError, setValue} = useForm<ICountry>();
    const onValid = () => {
        setValue("Country", "");
    }
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
        </div>
        </div>
    );
}

export default TravelList;