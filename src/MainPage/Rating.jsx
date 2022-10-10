import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Array = [0, 1, 2, 3, 4];

function Rating() {
  return (
    <Wrap>
      <Stars>
        {Array.map((el, idx) => {
          return <FaStar key={idx} size="50" />;
        })}
      </Stars>
    </Wrap>
  );
}

export default Rating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: black;
    cursor: pointer;
  }

  :hover svg {
    color: gold;
  }

  & svg:hover ~ svg {
    color: black;
  }

  .yellowStar {
    color: gold;
  }
`;
