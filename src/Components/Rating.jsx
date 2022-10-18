import { useState } from "react";
import styled from "styled-components";
import FullStar from "../Image/fullstar.png";
import EmptyStar from "../Image/emptystar.png";

// 1. 점수를 표현할 수 있는걸 만들어보기
// 1-1 . 점수를 담을수 있는 count 점수 , 클릭할때 해당 숫자로 상태값이 변경 될 수 있게 설정
// 1-2 . count는 5이기 때문에 5개의 별 render
// 2 . 해당 count(지금은 빈별)만큼 검은별 render하기
// 2-1 . 색이 칠해져있는 별 render할 count 값을 배열에 담을수있게 starItems 라는 빈 배열 선언
// 2-2 . 빈별을 클릭 했을때 설정된 값만큼 검은별을 render할 수 있게 값을 반복해서 그 결과값을 retingItem에 넣기(push)
// 2-3 . 비교값이 count 작거나 같을때까지 비교값을 증감하는 반복문 선언
// 2-4 . 클릭했을때 바로 render 될 수 있도록 onclick 선언

// 3 . 빈별을 클릭했을때 클릭한 숫자만큼 검은별로 변경
// 3-1 . 빈별을 클릭 했을때 5에서 검은별의 값을 뺀 만큼 랜더링 되게 설정
// 3-2 . 반복문으로 동일하게 retingItem 값을 넣어주면 될것같음

const StarImage = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin-top: 50px;
`;

const EmptyImage = styled.img`
  width: 66px;
  height: 67px;
  cursor: pointer;
  margin-top: 50px;
`;

export default function Rating() {
  const [score, setScore] = useState(3);

  const starItem = [];

  for (let i = 1; i <= score; i++) {
    starItem.push(
      <StarImage
        src={FullStar}
        onClick={() => {
          setScore(i);
        }}
      />
    );
  }

  for (let i = 1; i <= 5 - score; i++) {
    starItem.push(
      <EmptyImage src={EmptyStar} onClick={() => setScore(score + i)} />
    );
  }

  return(
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      backgroundImage:"url(https://i.pinimg.com/222x/9b/72/4a/9b724a9a57feda49832adc8ea88d157a.jpg)",
      backgroundSize:"50%",
      height:"100%"
    }}>
      <h1 style={{ color:"#150050"}}>🌟 Reting Star Components 🌟</h1>
      {starItem}
      <h3>해당 컴포넌트는 클릭한 별에 따라서 점수를 표기하는 컴포넌트 입니다</h3>
      <h3>빈별을 Click시 useState 값이 변경되고 해당 변경값에 따라 반복문으로 별을 값에맞춰 Render 합니다</h3>
    </div>
  );
}
