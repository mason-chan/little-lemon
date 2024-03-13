import React from "react";

const BookingForm = (props) => {
    const {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        date,
        setDate,
        time,
        setTime,
        numberOfGuests,
        setNumberOfGuests,
        occasion,
        setOccasion,
        availableTimes,
        dispatch,
        submitForm
    } = props;

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);
        // Handle form submission logic here
    };

    const handleDateChange = (e) => {
        setDate(e);
        props.dispatch(e);
    };

    const isFormValid = () => {
        return (
            name.trim() !== "" &&
            email.trim() !== "" &&
            phone.trim() !== "" &&
            date.trim() !== "" &&
            time.trim() !== "" &&
            numberOfGuests.trim() !== ""
        );
    };

    return (
        <>
            <form
                className="cs-form"
                id="cs-form-1150"
                name="Contact Form"
                method="post"
                onSubmit={handleSubmit}
            >
                <label className="cs-label" htmlFor="res-name">
                    Name
                    <input
                        className="cs-input"
                        required
                        type="text"
                        id="res-name"
                        name="name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="cs-label cs-email" htmlFor="res-email">
                    Email
                    <input
                        className="cs-input"
                        required
                        type="email"
                        id="res-email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="cs-label cs-phone" htmlFor="res-phone">
                    Phone
                    <input
                        className="cs-input"
                        required
                        type="number"
                        id="res-phone"
                        name="phone"
                        placeholder="Phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label className="cs-label cs-date" htmlFor="res-date">
                    Date
                    <input
                        className="cs-input"
                        required
                        type="date"
                        id="res-date"
                        name="date"
                        placeholder="Date"
                        min={new Date().toISOString().split('T')[0]} // Minimum date is today
                        onChange={(e) => handleDateChange(e.target.value)}
                    />
                </label>
                <label className="cs-label cs-time" htmlFor="res-time">
                    Time
                    <select
                        className="cs-select"
                        required
                        id="res-time"
                        name="time"
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option className="cs-option" value="">Select a Time</option>
                        {props.availableTimes.availableTimes && props.availableTimes.availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </label>
                <label className="cs-label cs-guests" htmlFor="res-guests">
                    Number of Guests
                    <input
                        className="cs-input"
                        required
                        type="number"
                        id="res-guests"
                        name="number-of-guests"
                        placeholder="1"
                        min="1"
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                    />
                </label>
                <label className="cs-label cs-occasion" htmlFor="res-occasion">
                    Occasion (optional)
                    <input
                        className="cs-input"
                        type="text"
                        id="res-occasion"
                        name="occasion"
                        placeholder="Anniversary..."
                        onChange={(e) => setOccasion(e.target.value)}
                    />
                </label>
                <button className="cs-button-solid cs-submit" type="submit" onSubmit={handleSubmit} disabled={!isFormValid()} aria-label="On Click">
                    Make Your Reservation
                </button>
            </form>
        </>
    )
}

export const isFormValid = (formData) => {
    const { name, email, phone, date, time, numberOfGuests } = formData;
    return (
        name.trim() !== "" &&
        email.trim() !== "" &&
        phone.trim() !== "" &&
        date.trim() !== "" &&
        time.trim() !== "" &&
        numberOfGuests.trim() !== ""
    );
};

export default BookingForm;