import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div class="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phones</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appstore" />
            </div>

            <div class="midFooter">
                <h1>6PP.</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2021 &copy; ArabindaBehera</p>
            </div>

            <div class="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/abehera">Instagram</a>
                <a href="http://youtube.com/abehera">Youtube</a>
                <a href="http://facebook.com/abehera">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer
