import { useState } from "react";
import styled from "styled-components";
import FullStar from '../Image/fullstar.png'
import EmptyStar from '../Image/emptystar.png'


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


const StarImage = styled.img `
  width: 70px;
  height: 70px;
  cursor: pointer;
`

const EmptyImage = styled.img `
  width: 66px;
  height: 67px;
  margin-bottom: 1px;
  cursor: pointer;
`

export default function Reting() {
  const [count, setCount] = useState(0)

  const retingItem = []

  for(let i=1; i <= count; i++) {
    retingItem.push(<StarImage src={FullStar} onClick={() => {setCount(i)}}/>)
  }

  for(let i=1; i <= 5-count; i++) {
    retingItem.push(<EmptyImage src={EmptyStar} onClick={() => {setCount(count+i)}}/>)
  }

  console.log(count)


  return (
    <div style={{
      borderRadius:10,
      backgroundColor : 'rgba(255, 255, 255, 0.5)',
    }}>
      {retingItem}
    </div>
  );
}
