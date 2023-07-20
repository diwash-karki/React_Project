import './css/Main.css'
import React, { useState, useEffect, useRef } from 'react'
import DailyForm from "./Components/DailyForm";
import MonthlyForm from './Components/MonthlyForm';
import Login from './Components/Login/Login';
import { auth, googleProvider } from './Components/Firebase/FireBaseAuth';
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";

function App() {
  const [chooseBtnState, setBtnState] = useState(true);
  const [locationBox, setLocationBox] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function showAvailableParkingSpaces(e) {
    e.preventDefault()
    console.log("show parking spaces");
  }

  function handleLocationClick(event) {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocationBox(() => `${latitude}, ${longitude}`);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }



  function updateLocationBox(location) {
    console.log("location", location);
    setLocationBox(() => location);
  }

  function updateStartDate(date) {
    setStartDate(() => date);
  }

  function updateEndDate(date) {
    setEndDate(() => date);
  }

  useEffect(() => {
    console.log("start date", startDate);
    console.log("end date", endDate);
  }, [startDate, endDate])

  return (
    <>
      <div className="container-holder">
        <div className="leftContainer">
          <h1>Find parking in seconds</h1>
          <p>Choose from millions of available spaces, or reserve your space in advance.<br />
            Join over 10 million drivers enjoying easy parking.</p>
          <form className="form-register" onSubmit={showAvailableParkingSpaces}>
            <div className="time-switch-holder">
              <label className={(chooseBtnState === true) ? "switch-button selected-btn" : "switch-button"} onClick={() => setBtnState(true)}>HOURLY/DAILY</label>
              <label className={(chooseBtnState === false) ? "switch-button selected-btn" : "switch-button"} onClick={() => setBtnState(false)}>MONTHLY</label>
            </div>
            {
              chooseBtnState ? <DailyForm locationHandler={handleLocationClick} ontype={updateLocationBox} sValue={startDate} eValue={endDate} start={updateStartDate} end={updateEndDate} /> : <MonthlyForm locationHandler={handleLocationClick} ontype={updateLocationBox} sValue={startDate} eValue={endDate} start={updateStartDate} end={updateEndDate} />
            }

            <button className="search-button">SHOW PARKING SPACES</button>
          </form>
        </div>
        <div className="rightContainer">

        </div>
      </div>
      <Login />

    </>
  )
}

export default App
