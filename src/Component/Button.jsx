import { Link } from "react-router-dom";

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
      <Link to="/switch">
        <button>라우터터터터 </button>
      </Link>
    </div>
  );
}
