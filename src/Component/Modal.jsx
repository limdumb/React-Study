import { useState } from "react";
import "../css/Modal.css";

function Modal() {
  const [modal, SettModal] = useState(false);

  const PopupButton = () => {
    return SettModal(!modal);
  };

  return (
    <div className="modal_container">
      <button className="modal_Button" onClick={PopupButton}>
        윈도우를 탈출하자!
      </button>
      <div className={modal ? "backDiv" : null}>
        {modal ? (
          <div className="modal_content">
            <div>
              <h1>나도 조금 있으면 맥북 오우너...?</h1>
            </div>
            <button className="close__Button" onClick={PopupButton}>
              맥북
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
