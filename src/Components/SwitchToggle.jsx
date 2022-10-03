import { useState } from "react";
import styled from "styled-components";


export default function SwitchToggle() {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev); //prev = 이전상태
  };
  return 
}