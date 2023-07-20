import React from "react";
import { useState, useEffect, useRef } from "react";
const DateBoard = (props) => {
    let boardMonth = new Array(7);

    function isDateToday(date) {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    }
    function getWeekDates(weekOffset) {
        const today = new Date();
        const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

        // Calculate the start date of the current week (Sunday)
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - currentDay + weekOffset * 7);

        const weekDatesReturn = [];
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let monthFullHolder = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            const fullMonthStr = date.toLocaleString('default', { month: 'long' })
            if (!monthFullHolder.includes(fullMonthStr)) {
                monthFullHolder.push(fullMonthStr);
            }
            weekDatesReturn.push({
                week: daysOfWeek[date.getDay()],
                day: date.getDate(),
                month: date.getMonth() + 1,
                fullMonth: fullMonthStr,
                year: date.getFullYear(),
                isToday: isDateToday(date),
            });
        }

        return [monthFullHolder, weekDatesReturn];
    }
    const [weekDates, setWeekDates] = useState([]);
    useEffect(() => {
        const [monthHolderArr, weekDatesArr] = getWeekDates(props.dateCounter);
        setWeekDates(weekDatesArr);
        props.onMonthChange(monthHolderArr)

    }, [props.dateCounter]);
    return (
        <>
            <div className="board-container">
                <table className="date-table">
                    <thead>
                        <tr>
                            {
                                weekDates.map((item, index) => {
                                    return (item.isToday === true) ?
                                        (<th key={index}>
                                            <label>{item.week}</label>
                                            <label className="isToday">{item.day}</label>
                                        </th>)
                                        :
                                        (<th key={index}>
                                            <label>{item.week}</label>
                                            <label>{item.day}</label>
                                        </th>)
                                })
                            }

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={7} style={
                                {
                                    textAlign: "center",
                                    borderLeft: "none",
                                    position: "sticky",
                                    top: "165px",
                                    backgroundColor: "white",
                                    filter: "blur(2px)"
                                }
                            }></td>
                        </tr>
                        {
                          Array.apply(null, { length: 1440 }).map((e, index) => {
                                return <tr key={index}>
                                    <td>sda</td>
                                    <td>sda</td>
                                    <td>sda</td>
                                    <td>sda</td>
                                    <td>sda</td>
                                    <td>sda</td>
                                    <td>sda</td>
                                </tr>
                            })
                        }



                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DateBoard;