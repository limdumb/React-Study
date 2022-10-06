import { useState } from "react";
import styled from "styled-components";

const EmptyStar = styled.button `
  font-size: 54px;
  cursor: pointer;
  background-color: white;
  border: none;

`
const BlackStar = styled.button `
  font-size: 54px;
  cursor: pointer;
  border: none;
  background-color: white;
`
//
export default function Reting() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlackStar onClick={() => console.log(1)}>★</BlackStar>
      <BlackStar onClick={() => console.log(2)}>★</BlackStar>
      <BlackStar onClick={() => console.log(3)}>★</BlackStar>
      <BlackStar onClick={() => console.log(4)}>★</BlackStar>
      <BlackStar onClick={() => console.log(5)}>★</BlackStar>
      <EmptyStar onClick={() => console.log(1)}>☆</EmptyStar>
      <EmptyStar onClick={() => console.log(2)}>☆</EmptyStar>
      <EmptyStar onClick={() => console.log(3)}>☆</EmptyStar>
      <EmptyStar onClick={() => console.log(4)}>☆</EmptyStar>
      <EmptyStar onClick={() => console.log(5)}>☆</EmptyStar>
    </>
  );
}