import React, { useState, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage/BookingPage";
import Footer from "./components/Footer/Footer";
import ConfirmedBooking from "./components/ConfirmedBooking/ConfirmedBooking";
import "./App.css";

function App() {
  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const initializeTimes = { availableTimes: fetchAPI(new Date()) }
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) }
  }
  console.log(updateTimes);

  const submitAPI = function (formData) {
    return true;
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              numberOfGuests={numberOfGuests}
              setNumberOfGuests={setNumberOfGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
