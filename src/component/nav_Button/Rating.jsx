import { useState } from "react";
import classNames from "classnames";


/*
[별점주기]
1. 별5개가 있어야한다
2. 각 별에 마우스를 올렸을시에 색이변해야 한다.
3. 마우스가 올라가 있는 별의 위치에따라 이전별또한 오버가 되어야한다.
4. 위와같은 방법으로 click시에 색상은 유지되어야한다.

[순서]
1. 각태그에 고유의 값을 갖는방법을 찾는다 => input태그의 value
// 이외의 사용자 관련 태그는 많이있다  form,textarea 등등 단! 여기서 사용할것는 input이 적합하단고판단

2. 각 별들마다 구분이가능한 value 값을 가진다

3. 해당 별이 클릭되었을시에 해당별의 value값을 변수에저장한다!

4. 저장된값을 어떠한값이랑 비교?



https://bennettfeely.com/clippy/
https://codepen.io/bennettfeely/pen/azJWWX/
https://heropy.blog/2019/05/26/html-elements/
*/
function Rating(){
    // const [star, setstar] = useState(Array(5).fill(0).map((v,i)=> i + 1));
    const [star, setstar] = useState(null);

    const [star1, setstar1] = useState(1);
    const [star2, setstar2] = useState(2);
    const [star3, setstar3] = useState(3);
    const [star4, setstar4] = useState(4);
    const [star5, setstar5] = useState(5);
    

 
    const test = (el)=>{
        setstar(el.target.value)
    }   
    
    
    return(
        <>
            <label className="star_label" style={{backgroundColor: star1 <= star ? "red" : "black"}}><input className={"star_input"} type="checkbox" onClick={test} value={star1}/></label>
            <label className="star_label" style={{backgroundColor: star2 <= star ? "red" : "black"}}><input className={"star_input"} type="checkbox" onClick={test} value={star2}/></label>
            <label className="star_label" style={{backgroundColor: star3 <= star ? "red" : "black"}}><input className={"star_input"} type="checkbox" onClick={test} value={star3}/></label>
            <label className="star_label" style={{backgroundColor: star4 <= star ? "red" : "black"}}><input className={"star_input"} type="checkbox" onClick={test} value={star4}/></label>
            <label className="star_label" style={{backgroundColor: star5 <= star ? "red" : "black"}}><input className={"star_input"} type="checkbox" onClick={test} value={star5}/></label>
            
            
            
            
            
        </>
    )
}

export default Rating;