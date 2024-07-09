import { useSetRecoilState } from "recoil";
import { ICountry, travelState } from "../atoms";

//  1. 우리는 id로 조작하고 싶은 Country를 찾아야 함.(array 안에 있는 Object의 index를 찾는 방법)
//  2. 이전 인덱스의 Country를 새로운 Country로 바꿔줘야 함.

function Country({ text, category, id }: ICountry) {  //  수정하고 싶은 Country의 id를 알고 있다.
    const setCountry = useSetRecoilState(travelState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},  //  어느 카테고리에 가야 하는지 판단(name)
        } = event;
        setCountry((prev) => {
            const targetIndex = prev.findIndex(Country => Country.id === id);  //  상호작용한 나라의 인덱스 값 반환
            const oldCountry = prev[targetIndex];
            const newCountry = {text, id, category:name};
            console.log(oldCountry);
            console.log(newCountry);
            return prev;
        })
    };
    return (
        <li>
            {text} 
            {category !== "Check" && <button name="Check" onClick={onClick}>✅</button>}
            {category !== "Trash" && <button name="Trash" onClick={onClick}>🗑️</button>}
        </li>
    );
}

export default Country;