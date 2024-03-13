import React from "react";
import BookingForm from "../BookingForm/BookingForm";
import "./BookingPage.css";
import Restaurant from "../../assets/restaurant.jpg";

const BookingPage = (props) => {
  return (
    <section id="booking">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Reservations</span>
          <h2 className="cs-title">Look Forward to Seeing You!</h2>
        </div>
        <div className="cs-contact-group">
          <picture className="cs-picture">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet={Restaurant} />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet={Restaurant} />
            <img
              loading="lazy"
              decoding="async"
              src={Restaurant}
              alt="people"
              width={630}
              height={300}
            />
          </picture>
          <p className="cs-contact-text">
            Step into our family-owned Mediterranean restaurant, where tradition
            meets innovation in every dish. With a passion for authentic flavors
            and a touch of modern flair, we invite you to experience our
            culinary heritage reimagined. Reserve your table now to embark on a
            journey of traditional recipes with a contemporary twist, where each
            bite tells a story of our Mediterranean roots and dedication to
            excellence.
          </p>
          <ul className="cs-ul">
            <li className="cs-li">
              <picture className="cs-icon-wrapper">
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-phone.svg"
                  alt="phone icon"
                  className="cs-icon"
                  width={40}
                  height={40}
                  decoding="async"
                />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-header">Phone</span>
                <a
                  href="tel:888-4565-789
                  "
                  className="cs-link"
                >
                  (123) 456 7890
                </a>
              </div>
            </li>
            <li className="cs-li">
              <picture className="cs-icon-wrapper">
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-pin.svg"
                  alt="address icon"
                  className="cs-icon"
                  width={40}
                  height={40}
                  decoding="async"
                />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-header">Address</span>
                <a href="" className="cs-link">
                  123 Avenue Street, Oak Harbor, WA 98101
                </a>
              </div>
            </li>
          </ul>
        </div>
        <BookingForm {...props}/>
      </div>
    </section>
  );
};

export default BookingPage;
