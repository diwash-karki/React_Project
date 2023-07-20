import DateBoard from "./components/DateBoard"
import DateSwitchRow from "./components/DateSwitchRow"
import PopupContainer from "./components/PopupContainer"
import "./css/DateSwitchRowStyle.css"
import "./css/DateBoardStyle.css"
import { useState, useEffect, useRef } from "react";

function App() {

  const [currentWeek, setCurrentWeek] = useState(0);
  const [currMonthName, SetCurrMonthName] = useState([]);

  function weekChangeHandler(args) {
    console.log("render from week change")
    if (args === 0) return setCurrentWeek(0);
    if (args === 1) return setCurrentWeek(currentWeek => currentWeek + 1);
    if (args === -1) return setCurrentWeek(currentWeek => currentWeek - 1);
  }

  function changeMonthString(monthArr) {
    SetCurrMonthName(() => monthArr);
  }


  return (
    <>
      <div className="header-holder" style={{
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: "0px",
        backgroundColor: "white",
        zIndex: 2
      }

      }>
        <PopupContainer />
        <div style={{
          width: "100px",
        }} />
        <DateSwitchRow monthName={currMonthName} onWeekChange={weekChangeHandler} />
      </div>
      <DateBoard onMonthChange={changeMonthString} dateCounter={currentWeek} />

    </>
  )
}

export default App
