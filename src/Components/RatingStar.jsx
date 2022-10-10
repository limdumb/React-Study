import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as regularStar} from "@fortawesome/free-regular-svg-icons"
import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


export default function RatingStar() {
    const [icons, setIcon] = useState(regularStar)
    const [icons2, setIcon2] = useState(regularStar)
    const [icons3, setIcon3] = useState(regularStar)
    const [icons4, setIcon4] = useState(regularStar)
    const [icons5, setIcon5] = useState(regularStar)
    const Font = [
    <FontAwesomeIcon icon={icons} size='8x' onClick={() => {
        setIcon(solidStar)}}></FontAwesomeIcon>,
    <FontAwesomeIcon icon={icons2} size='8x' onClick={() => {
        setIcon2(solidStar)}}></FontAwesomeIcon>,
    <FontAwesomeIcon icon={icons3} size='8x' onClick={() => {
        setIcon3(solidStar)}}></FontAwesomeIcon>,
    <FontAwesomeIcon icon={icons4} size='8x' onClick={() => {
        setIcon4(solidStar)}}></FontAwesomeIcon>,
    <FontAwesomeIcon icon={icons5} size='8x' onClick={() => {
        setIcon5(solidStar)}}></FontAwesomeIcon>
    ]
    

    return(
    <>
    {Font}
    </>
    )
}

