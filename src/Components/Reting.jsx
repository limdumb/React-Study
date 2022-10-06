import styled from "styled-components";

const EmptyStar = styled.span `
  font-size: 54px;
`
const BlackStar = styled.span `
  font-size: 54px;
`
export default function Reting() {

  return (
    <>
      <BlackStar>★</BlackStar>
      <BlackStar>★</BlackStar>
      <BlackStar>★</BlackStar>
      <BlackStar>★</BlackStar>
      <BlackStar>★</BlackStar>
      <EmptyStar>☆</EmptyStar>
      <EmptyStar>☆</EmptyStar>
      <EmptyStar>☆</EmptyStar>
      <EmptyStar>☆</EmptyStar>
      <EmptyStar>☆</EmptyStar>
    </>
  );
}