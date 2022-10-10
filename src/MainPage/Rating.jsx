import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Array = [0, 1, 2, 3, 4];

function Rating() {
  return (
    <>
      <>
        {Array.map((el, idx) => {
          return <FaStar />;
        })}
      </>
    </>
    //
  );
}

export default Rating;
