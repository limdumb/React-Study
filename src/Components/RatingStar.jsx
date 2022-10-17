// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faStar as regularStar} from "@fortawesome/free-regular-svg-icons"
// import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import styled from "styled-components"
import FullStar from "../Image/FullStar.png"
import EmptyStar from  "../Image/EmptyStar.png"

const FullImg = styled.img`
    width: 100px;
    height: 100px;
    `

const EmptyImg = styled.img`
    width: 100px;
    height: 100px;
`

export default function RatingStar() {
   const [stars, setStars] = useState(0)
   const star = [];
   for(let i = 1; i <= stars; i++) {
      star.push(<FullImg src={FullStar} onClick={() => {setStars(i)}}/>)
   }
   
   for(let i = 1; i <= 5-stars; i++) {
      star.push(<EmptyImg src={EmptyStar} onClick={() => {setStars(stars+i)}} />)
   }
   return(
      <div>
            {star}
        </div>
    )
   }
   // const Star = styled.span`
   //     cursor: pointer;
   //     :hover {color: grey;
   //     font-size: 16.2px;
   //     transition-duration: 0.5s;
   // }
   // `
   
   // const Text = styled.div`
   //     display: flex;
   //     justify-content: center;
   //     font-size: 100px;
   //     margin-bottom: 100px;
   // `
   
   //  const [icons, setIcon] = useState(regularStar)
   //  const [icons2, setIcon2] = useState(regularStar)
   //  const [icons3, setIcon3] = useState(regularStar)
   //  const [icons4, setIcon4] = useState(regularStar)
   //  const [icons5, setIcon5] = useState(regularStar)
   //  const Font = [
   // <Star><FontAwesomeIcon icon={icons} size='8x' onClick={() => {
   //      setIcon(solidStar)
   //      setIcon2(regularStar)
   //      setIcon3(regularStar)
   //      setIcon4(regularStar)
   //      setIcon5(regularStar)}}></FontAwesomeIcon></Star>,
   //   <Star><FontAwesomeIcon icon={icons2} size='8x' onClick={() => {
   //      setIcon(solidStar)
   //      setIcon2(solidStar)
   //      setIcon3(regularStar)
   //      setIcon4(regularStar)
   //      setIcon5(regularStar)}}></FontAwesomeIcon></Star>,
   //   <Star><FontAwesomeIcon icon={icons3} size='8x' onClick={() => {
   //      setIcon(solidStar)
   //      setIcon2(solidStar)
   //      setIcon3(solidStar)
   //      setIcon4(regularStar)
   //      setIcon5(regularStar)}}></FontAwesomeIcon></Star>,
   //   <Star><FontAwesomeIcon icon={icons4} size='8x' onClick={() => {
   //      setIcon(solidStar)
   //      setIcon2(solidStar)
   //      setIcon3(solidStar)
   //      setIcon4(solidStar)
   //      setIcon5(regularStar)}}></FontAwesomeIcon></Star>,
   //   <Star><FontAwesomeIcon icon={icons5} size='8x' onClick={() => {
   //      setIcon(solidStar)
   //      setIcon2(solidStar)
   //      setIcon3(solidStar)
   //      setIcon4(solidStar)
   //      setIcon5(solidStar)}}></FontAwesomeIcon></Star>
   //  ]
    
    //빈 별을 누르면 채워진 별로 바뀐다.
    //두번째 이상의 별부터 누르게 될 때 만약, 앞에 별이 채워지지 않아있다면 앞에별까지 색을 채운다.

   //  return(
   //  <>
   //  <Text>Rating Star</Text>
   //  {Font}
   //  </>
   //  )


