import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";
import image1 from '../../assets/Mario and Adrian A.jpg';
import image2 from '../../assets/Mario and Adrian b.jpg';
import image3 from '../../assets/restaurant chef B.jpg';

const ConfirmedBooking = () => {
    return (
        <section id="confirm">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Confirmed</span>
                    <h2 className="cs-title">Thank you for booking a table with us!</h2>
                    <p className="cs-text">
                        Prepare to indulge in a culinary experience where traditional recipes meet a modern flair. Every bite celebrates our Mediterranean roots and dedication to culinary perfection.

                    </p>
                </div>
                <ul className="cs-image-group">
                    {/* Image 1 */}
                    <li className="cs-item">
                        <picture className="cs-picture">
                            <source
                                media="(max-width: 600px)"
                                srcSet={image1}
                            />
                            <source
                                media="(min-width: 601px)"
                                srcSet={image1}
                            />
                            <img
                                loading="lazy"
                                decoding="async"
                                src={image1}
                                alt="Chef"
                                width={346}
                                height={346}
                            />
                        </picture>
                    </li>
                    {/* Image 2 */}
                    <li className="cs-item">
                        <picture className="cs-picture">
                            <source
                                media="(max-width: 600px)"
                                srcSet={image2}
                            />
                            <source
                                media="(min-width: 601px)"
                                srcSet={image2}
                            />
                            <img
                                loading="lazy"
                                decoding="async"
                                src={image2}
                                alt="Chef2"
                                width={346}
                                height={346}
                            />
                        </picture>
                    </li>
                    {/* Image 3 */}
                    <li className="cs-item">
                        <picture className="cs-picture">
                            <source
                                media="(max-width: 600px)"
                                srcSet={image3}
                            />
                            <source
                                media="(min-width: 601px)"
                                srcSet={image3}
                            />
                            <img
                                aria-hidden="true"
                                loading="lazy"
                                decoding="async"
                                src={image3}
                                alt="Chef3"
                                width={346}
                                height={346}
                            />
                        </picture>
                    </li>
                </ul>
                <Link to="/" className="cs-button-solid" aria-label="On Click">
                    Return to Home
                </Link>
            </div>
        </section>

    )
}

export default ConfirmedBooking;