import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

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

const Explain = styled.div`
  h2 {
    margin-top: 30px;
  }
`;

function Rating() {
  const Array = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (idx) => {
    let clickStates = [clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= idx ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <Wrap>
      <Stars>
        {Array.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="90"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && "yellowStar"}
            />
          );
        })}
      </Stars>
      <Explain>
        <h2>
          컴포넌트는 클릭한 별에 따라 값이 저장되어 별점을 표기해주는
          컴포넌트이다.
        </h2>
        <h2>
          별을 클릭하면 값이 변경되어 map으로 해당값에 맞는 별을 노출시켜준다
        </h2>
      </Explain>
    </Wrap>
  );
}

export default Rating;
