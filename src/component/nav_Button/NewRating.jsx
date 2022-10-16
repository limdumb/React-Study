import {useState} from "react"
import styled from "styled-components";

const Circle = styled.div`
    width:100px;
    height: 100px;
    background-color:blue;
    display: inline-block;
    border: 1px solid black;
    border-radius: 50%;
`

function NewRating(){
    const [val, setVal] = useState(Array(5).fill(0).map((value, index)=> index + 1 ))
    const [save, setSvae] = useState(0)

    return(
        <>
        {val.map((el)=>{
            return (
                <Circle
                key={el}
                value={el}
                onClick={()=>{
                    setSvae(el)
                }}
                style={{background: el <= save ? "red" : "blue"}}
                />
            )
        })}
        </>
    )

}

export default NewRating;