import React from "react";
import "./Main.css";
import Bruchetta from "../../assets/bruchetta.svg";
import Greek from "../../assets/greek salad.jpg";
import Lemon from "../../assets/lemon dessert.jpg";
import Moped from "../../assets/scooter.svg";

const Main = () => {
  return (
    <section id="main">
      <div className="cs-container">
        <div className="cs-content">
          <div className="cs-flex-group">
            <h2 className="cs-title">This weeks specials!</h2>
          </div>
          <a href="" className="cs-button-solid">
            Online Menu
          </a>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            {/*Background Image*/}
            <picture className="cs-background">
              <img
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src={Greek}
                alt="cleaner"
                width={305}
                height={335}
              />
            </picture>
            <div className="card-container">
              <div className="cs-h3">
                <h3 className="cs-name">Greek Salad</h3>
                <p className="cs-price">$ 12.99</p>
              </div>
              <p className="cs-item-p">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <span className="cs-fake-link">
                Order a delivery
                <img
                  className="cs-icon"
                  src={Moped}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              </span>
            </div>
          </li>
          <li className="cs-item">
            {/*Background Image*/}
            <picture className="cs-background">
              <source media="(max-width: 767px)" srcSet={Bruchetta} />
              <source media="(min-width: 768px)" srcSet={Bruchetta} />
              <img
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src={Bruchetta}
                alt="cleaner"
                width={305}
                height={335}
              />
            </picture>
            <div className="card-container">
              <div className="cs-h3">
                <h3 className="cs-name">Bruschetta</h3>
                <p className="cs-price">$ 5.99</p>
              </div>
              <p className="cs-item-p">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <span className="cs-fake-link">
                Order a delivery
                <img
                  className="cs-icon"
                  src={Moped}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              </span>
            </div>
          </li>
          <li className="cs-item">
            {/*Background Image*/}
            <picture className="cs-background">
              <source media="(max-width: 767px)" srcSet={Lemon} />
              <source media="(min-width: 768px)" srcSet={Lemon} />
              <img
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src={Lemon}
                alt="cleaner"
                width={305}
                height={335}
              />
            </picture>
            <div className="card-container">
              <div className="cs-h3">
                <h3 className="cs-name">Lemon Dessert</h3>
                <p className="cs-price">$ 5.00</p>
              </div>
              <p className="cs-item-p">
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <span className="cs-fake-link">
                Order a delivery
                <img
                  className="cs-icon"
                  src={Moped}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              </span>
            </div>
          </li>
        </ul>
        <div className="cs-bubbles cs-bubbles-small" aria-hidden="true" />
        <div className="cs-bubbles cs-bubbles-big" aria-hidden="true">
          <span className="cs-bubbles-big2" />
        </div>
      </div>
    </section>
  );
};

export default Main;
