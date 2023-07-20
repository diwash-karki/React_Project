import React from 'react';
import Popup from 'reactjs-popup';
import '../css/PopupContainer.css';
import { addReminder, updateReminder, clearStorage, getReminder } from '../localstorage/Database';
import { useState } from 'react';


export default function PopupContainer() {
    const [reminderTitle, setReminderTitle] = useState("");
    const [reminderDate, setReminderDate] = useState("");
    const [reminderTime, setReminderTime] = useState("");
    const [reminderLabel, setReminderLabel] = useState("personal");
    const [reminderDescription, setReminderDescription] = useState("");
    getReminder();
    function formHandler(e) {
        e.preventDefault();
        const uuid = crypto.randomUUID();
        const obj = {
            id: uuid,
            title: reminderTitle,
            date: reminderDate,
            time: reminderTime,
            label: reminderLabel,
            description: reminderDescription
        }
        console.log(obj);
        addReminder(obj);
        setReminderTitle(e => "");
        setReminderDate(e => "");
        setReminderTime(e => "");
        setReminderLabel(e => "personal");
        setReminderDescription(e => "");



    }

    const gap = (height) => <div style={{
        width: "100px",
        height: `${height}px`
    }}
    ></div>



    const popupContent = (closeFunc) => <>
        <div className='popup-contents'>
            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                margin: '30px 5px',
                fontStyle: 'Raleway'
            }
            }>
                <label style={{
                    fontSize: '1.3rem',
                    fontWeight: '400'
                }}>Create Event</label>
                <button className='close-btn' onClick=
                    {() => closeFunc()}>&#10005;</button>
            </div>

            <div className='popup-body-container'>
                <form className='popup-form' onSubmit={formHandler}>
                    <div className='popup-item-container'>
                        <label>Event name</label>
                        <input type="text" className='addtitle-input' value={reminderTitle} onChange={(e) => setReminderTitle(e.target.value)} placeholder="Enter reminder title" required />
                    </div>

                    {gap(20)}


                    <div className='label-holder'>
                        <div className='popup-item-container'>
                            <label>Type</label>
                            <select name="label" id="label-selector" className='addtitle-input childrens' onChange={(e) => setReminderLabel(e.target.value)}>
                                <option value="personal">Personal</option>
                                <option value="event">Event</option>
                                <option value="work">Work</option>
                            </select>
                        </div>

                        <div className='popup-item-container'>
                            <label htmlFor="date-input-box" >Date</label>
                            <input type="date" className='addtitle-input childrens' id='date-input-box' onChange={(e) => setReminderDate(e.target.value)} required />
                        </div>
                        <div className='popup-item-container'>
                            <label>Time</label>
                            <input type="time" className='addtitle-input childrens' onChange={(e) => setReminderTime(e.target.value)} required />
                        </div>
                    </div>
                    {gap(20)}
                    <div className='popup-item-container'>
                        <label>Description</label>
                        <textarea className='addtitle-description' onChange={(e) => setReminderDescription(e.target.value)} placeholder="Add description" />
                    </div>
                    <div className='popup-footer-container'>
                        <button className='close-btn submit-button'>Add</button>
                    </div>
                </form>
            </div>

        </div>

    </>
    return (
        <div>
            <Popup trigger=
                {<button className='reminder-button'> + </button>}
                modal nested>
                {
                    close => (
                        <div className='modals'>
                            {popupContent(close)}
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};