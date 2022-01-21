import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Coming soon on Android and IOS mobile phones</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appstore" />
            </div>

            <div className="midFooter">
                <h1>Auro Zone</h1>
                <p>Quality products ensured</p>
                <p>Copyrights 2022 &copy; ArabindaBehera</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Me</h4>
                <a href="https://www.linkedin.com/in/arabinda-behera">LinkedIn</a>
                <a href="https://www.facebook.com/arvind.behera.9">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer
