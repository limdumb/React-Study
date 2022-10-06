import { useState } from "react";
import styled from "styled-components";

//Span으로 구현하기에는 무리가 있다고 판단..
//image를 노출시켜서 해당 이미지들에 onclick을 주어서 이벤트 설정
//useState로 해당 image 별로 count 값을 줄것
//setCount로 해당 count 값 핸들링하여 클릭했을때 그값만큼 검정별이 밑에 노출되게설정
export default function Reting() {
  const [count, setCount] = useState(0)

  return (
    <>

    </>
  );
}