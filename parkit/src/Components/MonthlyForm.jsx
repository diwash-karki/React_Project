import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/Main.css'

const MonthlyForm = (props) => {
    return <>
        <div className="input-holder">
            <div className="input-design">
                <label className="label-location">PARKING AT</label>
                <input type="text" onChange={(e) => props.ontype(e.target.value)} placeholder="Enter your location or Location ID" className="input-location" required />
            </div>
            <button className="gps-icon" onClick={props.locationHandler}>&#9737;</button>
        </div>
        <div className="input-holder">
            <div className="input-design">
                <label className="label-location">STARTING ON</label>
                <DatePicker selected={props.sValue} value={props.sValue} onChange={date => props.start(date)} dateFormat="Pp" placeholderText="Select a date & time" showTimeSelect />
            </div>
            <div className="input-design">
                <label className="label-location">DURATION</label>
                <DatePicker selected={props.eValue} value={props.eValue} onChange={date => props.end(date)} dateFormat="Pp" placeholderText="Select a date & time" showTimeSelect />
            </div>
        </div></>;
}


export default MonthlyForm;