import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "../css/App.css";
import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Step 1
        </button>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Step 2
        </button>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Step 3
        </button>
      </div>

      <div className="content-tabs">
        <div>
          <Step1 />
        </div>

        <div>
          <Step2 />
        </div>

        <div>
          <Step3 />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
