import React from "react";
import "./Header.css";
import Food from "../../assets/restauranfood.jpg"

const Header = () => {
    return (
        <section id="header">
            <div className="cs-container">
                
                <div className="cs-content">
                    <h1 className="cs-topper">Little Lemon</h1>
                    <h2 className="cs-title">
                        Chicago
                    </h2>
                    <p className="cs-text">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <a href="" className="cs-button-solid">
                        Reserve a Table
                    </a>
                </div>
                <div className="cs-image-group">
                    <picture className="cs-background">
                        {/*Mobile Image*/}
                        <source
                            media="(max-width: 600px)"
                            srcSet={Food}
                        />
                        {/*Tablet and above Image*/}
                        <source
                            media="(min-width: 601px)"
                            srcSet={Food}
                        />
                        <img
                            loading="lazy"
                            decoding="async"
                            src={Food}
                            alt="people"
                            width={605868}
                            height={650}
                        />
                    </picture>
                </div>
            </div>
            {/** 
            <div className="cs-bubbles" aria-hidden="true" />
            */}

        </section>

        /**
        <>
            <header>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
                <img src="" alt=""></img>
            </header>
        </>
        */
    );
}

export default Header;