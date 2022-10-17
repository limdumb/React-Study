import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function Tabs() {
  return (
    <div className="container">
      <div className="bloc-tabs"></div>

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
