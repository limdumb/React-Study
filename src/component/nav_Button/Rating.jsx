import { useState } from "react";


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

4. 클릭이 되어 저장된 값은 현재의 별과값과  저장된값을 비교한다.




https://bennettfeely.com/clippy/
https://codepen.io/bennettfeely/pen/azJWWX/
https://heropy.blog/2019/05/26/html-elements/
*/
function Rating(){
    console.log("정상실행");
    // Array.fill(채울값,시작,끝) => 간단하게생각하자
    // 채울값 뒤에 option index가온다면 지정한index 부터 해당값을채우는거다
    // Array.map(callback함수 => 현재값, 인덱스 , 배열)
    const [repeat, steRepeat] = useState(Array(5).fill(0).map((value,index)=> index + 1));
  
        
    const log = (Event)=>{
        const ev = Event.target.value;
        console.log(ev);
     
    }
    
    return(
        <>
        {repeat.map((value,index)=>{
            return(
                <label key={index} className="rating_label">
                    <input type="checkbox" className="rating_input" value={repeat[index]}
                    onClick={log}/>
                </label>
            )
        })}
        
        </>
    )
}

export default Rating;