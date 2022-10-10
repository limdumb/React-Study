import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as regularStar} from "@fortawesome/free-regular-svg-icons"
import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import styled from "styled-components"

const Star = styled.span`
    cursor: pointer;
    :hover: {color: red;}
`
export default function RatingStar() {
    const [icons, setIcon] = useState(regularStar)
    const [icons2, setIcon2] = useState(regularStar)
    const [icons3, setIcon3] = useState(regularStar)
    const [icons4, setIcon4] = useState(regularStar)
    const [icons5, setIcon5] = useState(regularStar)
    const Font = [
   <FontAwesomeIcon icon={icons} size='8x' onClick={() => {
        setIcon(solidStar)
        setIcon2(regularStar)
        setIcon3(regularStar)
        setIcon4(regularStar)
        setIcon5(regularStar)}}></FontAwesomeIcon>,
    <FontAwesomeIcon icon={icons2} size='8x' onClick={() => {
        setIcon(solidStar)
        setIcon2(solidStar)
        setIcon3(regularStar)
        setIcon4(regularStar)
        setIcon5(regularStar)}}></FontAwesomeIcon>,
    <FontAwesomeIcon icon={icons3} size='8x' onClick={() => {
        setIcon(solidStar)
        setIcon2(solidStar)
        setIcon3(solidStar)
        setIcon4(regularStar)
        setIcon5(regularStar)}}></FontAwesomeIcon>,
    <FontAwesomeIcon icon={icons4} size='8x' onClick={() => {
        setIcon(solidStar)
        setIcon2(solidStar)
        setIcon3(solidStar)
        setIcon4(solidStar)
        setIcon5(regularStar)}}></FontAwesomeIcon>,
    <FontAwesomeIcon icon={icons5} size='8x' onClick={() => {
        setIcon(solidStar)
        setIcon2(solidStar)
        setIcon3(solidStar)
        setIcon4(solidStar)
        setIcon5(solidStar)}}></FontAwesomeIcon>
    ]
    
    //빈 별을 누르면 채워진 별로 바뀐다.
    //두번째 이상의 별부터 누르게 될 때 만약, 앞에 별이 채워지지 않아있다면 앞에별까지 색을 채운다.

    return(
    <>
    <Star>{Font}</Star>
    </>
    )
}

