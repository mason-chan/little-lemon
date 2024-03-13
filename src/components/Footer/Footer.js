import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="cs-container">
                {/* Logo Group */}
                <div className="cs-logo-group">
                    <a aria-label="go back to home" className="cs-logo" href="">
                        {/* Remove the light class if you don't need the dark logo */}
                        <img
                            className="cs-logo-img"
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                            src={Logo}
                            alt="logo"
                            width={240}
                            height={32}
                        />
                    </a>
                    <div className="cs-social">
                        <a className="cs-social-link" aria-label="visit google profile" href="">
                            <img
                                className="cs-social-img"
                                aria-hidden="true"
                                loading="lazy"
                                decoding="async"
                                src="https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg"
                                alt="google"
                                width={11}
                                height={11}
                            />
                        </a>
                        <a
                            className="cs-social-link"
                            aria-label="visit facebook profile"
                            href=""
                        >
                            <img
                                className="cs-social-img"
                                aria-hidden="true"
                                loading="lazy"
                                decoding="async"
                                src="https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg"
                                alt="facebook"
                                width={6}
                                height={11}
                            />
                        </a>
                        <a
                            className="cs-social-link"
                            aria-label="visit instagram profile"
                            href=""
                        >
                            <img
                                className="cs-social-img"
                                aria-hidden="true"
                                loading="lazy"
                                decoding="async"
                                src="https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg"
                                alt="instagram"
                                width={11}
                                height={11}
                            />
                        </a>
                    </div>
                </div>
                {/* Links */}
                <ul className="cs-nav">
                    <li className="cs-nav-li">
                        <span className="cs-header">Contact</span>
                    </li>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="tel:123-456 7890">
                            (123) 456 7890
                        </a>
                    </li>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="">
                            contact@littlelemon.com
                        </a>
                    </li>
                </ul>
                <ul className="cs-nav">
                    <li className="cs-nav-li">
                        <span className="cs-header">Address</span>
                    </li>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="">
                            123 Avenue Street
                            <br /> Oak Harbor, WA 98101
                        </a>
                    </li>
                </ul>
                {/* Contact Info */}
                <ul className="cs-nav">
                    <li className="cs-nav-li">
                        <span className="cs-header">Opening Hours</span>
                    </li>
                    <li className="cs-nav-li">Monday - Friday: 9am-10pm
                        <br />Saturday - Sunday: 11am-8pm</li>
                </ul>
            </div>
        </footer>

    );
}

export default Footer;