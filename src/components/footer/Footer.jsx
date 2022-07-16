import React from "react";
import { footerSocials } from "./data";

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container container">
                <div className="footer__content">
                    <h3 className="footer__title">our information</h3>
                    <ul className="footer__list">
                        <li>1234 Europe</li>
                        <li>Novi Sad 43210</li>
                        <li>123-456-789</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <div className="footer__title">about us</div>
                    <ul className="footer__links">
                        <li><a href="#home" className="footer__link" target="_blank" rel="noreferrer">Support Center</a></li>
                        <li><a href="#home" className="footer__link" target="_blank" rel="noreferrer">Customer Support</a></li>
                        <li><a href="#home" className="footer__link" target="_blank" rel="noreferrer">About Us</a></li>
                        <li><a href="#home" className="footer__link" target="_blank" rel="noreferrer">Copy Right</a></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <div className="footer__title">products</div>
                    <ul className="footer__links">
                        <li><a href="#home" className="footer__link" target="_blank" rel="noreferrer">Outdoor Drones</a></li>
                        <li><a href="#home" className="footer__link" target="_blank" rel="noreferrer">Indoor Drones</a></li>
                        <li><a href="#home" className="footer__link" target="_blank" rel="noreferrer">Electrics</a></li>
                        <li><a href="#home" className="footer__link" target="_blank" rel="noreferrer">Accesories</a></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">socials</h3>
                    <ul className="footer__social">
                        {footerSocials.map(social => {
                            const { id, url, image } = social;
                            return (
                                <li key={id}>
                                    <a href={url} target="_blank" rel="noreferrer" className="footer__social-link">
                                        <img src={image} alt="social icon" width="20px" height="20px"/>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <span className="footer__copy">&copy; Copyright 2022 DodaDesign</span>
        </footer>
    )
}

export default Footer;