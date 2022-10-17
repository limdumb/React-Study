import Reting from "./Reting";
import SwitchToggle from "./SwitchToggle";
import Modal from "./Modal";
import { useState } from "react";

export default function ContentTab() {
  const [activateTab, setActivateTab] = useState(0);

  const tabClickHendler = (index) => {
    setActivateTab(index);
  };

  const contentTab = [
    {
      tabTitle: (
        <button
          className={activateTab === 0 ? "reting__Tab" : "befor__RetingTab"}
          onClick={() => tabClickHendler(0)}
        >
          Reting
        </button>
      ),
      tabContetn: <Reting />,
    },
    {
      tabTitle: (
        <button
          className={activateTab === 1 ? "modal__Tab" : "befor__ModalTab"}
          onClick={() => tabClickHendler(1)}
        >
          Modal
        </button>
      ),
      tabContetn: <Modal />,
    },
    {
      tabTitle: (
        <button
          className={activateTab === 2 ? "switch__Tab" : "befor__SwitchTab"}
          onClick={() => tabClickHendler(2)}
        >
          Switch
        </button>
      ),
      tabContetn: <SwitchToggle />,
    },
  ];

  return (
    <div className="Container">
      <div className="tab__Container">
        {contentTab.map((section) => {
          return section.tabTitle;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {contentTab[activateTab].tabContetn}
      </div>
    </div>
  );
}
