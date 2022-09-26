export default function Home() {
    return (
    <div>
    <button onClick={((e) => {
        console.log('그코잠 만세')
    })}>하잇</button>
    <button onClick={((e) => {
        e.target.disabled = true;
    })}>바잇</button>   
    </div>
    );
    
}