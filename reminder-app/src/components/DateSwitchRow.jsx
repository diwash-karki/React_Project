import React from "react";

const DateSwitchRow = (props) => {

    function filterMonthString(monthName) {
        console.log(monthName)
        if (monthName == null || monthName.length == 0) return "Current";
        return (monthName.length == 1) ?
            monthName[0].slice(0, 3) :
            monthName[0].slice(0, 3) + "/" + monthName[1].slice(0, 3)
    }
    return <div className="button-switch-holder">
        <label className="today-txt" onClick={() => props.onWeekChange(0)}>Today</label>
        <label style={{ width: "50px" }} ></label>
        <button onClick={() => props.onWeekChange(- 1)}>{"<"}</button>
        <button onClick={() => props.onWeekChange(1)}>{">"}</button>
        <label style={{ width: "50px" }} ></label>
        <label style={{
            fontSize: "1.2rem"
        }}>{filterMonthString(props.monthName)} 2023</label>
    </div>
}

export default DateSwitchRow;


