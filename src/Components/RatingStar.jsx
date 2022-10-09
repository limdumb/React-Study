import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar} from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"



export default function RatingStar() {
    return(
    <>
    <FontAwesomeIcon icon={faStar} size="8x"/>
    <FontAwesomeIcon icon={faStar} size="8x"/>
    <FontAwesomeIcon icon={faStar} size="8x"/>
    <FontAwesomeIcon icon={faStar} size="8x"/>
    <FontAwesomeIcon icon={faStar} size="8x"/>        
    </>
    )
}