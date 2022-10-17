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
      tabTitle: <button onClick={() => tabClickHendler(0)}>Reting</button>,
      tabContetn: <Reting/>,
    },
    {
      tabTitle: <button onClick={() => tabClickHendler(1)}>Modal</button>,
      tabContetn: <Modal/>,
    },
    {
      tabTitle: <button onClick={() => tabClickHendler(2)}>Switch</button>,
      tabContetn: <SwitchToggle/>,
    },
  ];

  return (
    <div className="Container">
      <div className="tab__Container">
        {contentTab.map((section) => {
          return section.tabTitle
        })}
      </div>
        <div style={{
          display:"flex",
          justifyContent:"center",
          alignItems: "center",
          flexDirection:"column"
        }}>
          {contentTab[activateTab].tabContetn}
        </div>
    </div>
  );
}
