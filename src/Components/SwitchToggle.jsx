import './SwitchToggle.css';

export default function SwitchToggle() {
    return (
        <>
        <h1>제껴보세요</h1>
        <label className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>
        </label>
        </>     
    )
}

function TogleAlert() {
    setTimeout(() => {
        alert('그 코딩실력에 잠이와? TIL은 썼니?')
    }, 3000);
}