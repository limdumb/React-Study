export default function ClickButton() {
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          console.log("그코잠 화이팅!");
        }}
      >
        버튼이닷!
      </button>

      <button
        disabled=""
        onClick={(e) => {
          e.preventDefault();
          e.currentTarget.disabled = true;
        }}
      >
        없애버렷!
      </button>
    </div>
  );
}
