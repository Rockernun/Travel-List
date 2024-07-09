import { useSetRecoilState } from "recoil";
import { ICountry, travelState } from "../atoms";
import styled from "styled-components";
import React from "react";

const Btn = styled.button`
    display: inline-block;
`;

function Country({ text, category, id }: ICountry) { 
    const setCountry = useSetRecoilState(travelState);  //  travelState 상태 업데이트 함수
    const onClick = (event:React.MouseEvent<HTMLButtonElement>, id:number) => {  
        const {
            currentTarget: { name },  //  버튼의 name 속성을 가져와서 해당 국가의 카테고리를 업데이트
        } = event;

        //  현재 상태를 업데이트한다. oldCountries 배열에서 클릭한 국가의 인덱스를 찾아서 새로운 카테고리로 업데이트한 후 새로운 배열을 반환한다.
        setCountry((oldCountries:ICountry[]) => {  
            const targetIndex = oldCountries.findIndex(Country => Country.id === id);  //  id와 일치하는 국가 객체의 인덱스(targetIndex)를 찾는다.
            const oldCountry = oldCountries[targetIndex];  //  해당 인덱스의 국가 객체를 oldCountry에 저장한다.

            /*
            id는 기존의 id를 그대로 사용하고, text는 기존의 text를 사용하며, category는 클릭된 버튼의 name 값을 사용한다. 
            name 값을 any 타입으로 강제 형변환(as any)하여 TypeScript 컴파일러 오류를 방지
            */
            const newCountry:ICountry = { id: id, text: oldCountry.text, category: name as any};
            return [...oldCountries.slice(0, targetIndex), newCountry, ...oldCountries.slice(targetIndex + 1)];
        })
    };
    const Delete = (event:React.MouseEvent<HTMLButtonElement>, id:number) => {  //  클릭한 국가를 상태에서 제거

        //  현재 상태를 업데이트한다. oldCountries 배열에서 id가 일치하지 않는 국가들만 필터링하여 새로운 배열을 반환한다.
        setCountry((oldCountries) => {
            return oldCountries.filter((country) => country.id !== id);
        });
    };
    return (
        <li key={id}>
            <span>{text}</span> 
            {category === "Country" && (  
                //  "Traveled"로 변경하는 버튼과 삭제 버튼을 표시
                <>
                    <Btn name="Traveled" onClick={(event) => onClick(event, id)}>✅</Btn>
                    <Btn onClick={(event) => Delete(event, id)}>🗑️</Btn>
                </>
            )}
            {category === "Traveled" && (
                //  "Favorite"로 변경하는 버튼과 "Country"로 변경하는 버튼을 표시
                <>
                    <Btn name="Favorite" onClick={(event) => onClick(event, id)}>👍</Btn>
                    <Btn name="Country" onClick={(event) => onClick(event, id)}>❌</Btn>
                </>
            )}
            {category === "Favorite" && (
                //  "Traveled"로 변경하는 버튼을 표시
                <>
                    <Btn name="Traveled" onClick={(event) => onClick(event, id)}>👎🏻</Btn>
                </>
            )}
        </li>
    );
}

export default Country;

