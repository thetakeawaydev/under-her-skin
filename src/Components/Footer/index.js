import React from 'react';
import './Footer.css';
const Footer = () => {

	return (
		<footer className="footer">
			<a href="http://tyleraadams.com" className="credit" target="_blank">Designed by <br/>Tyler Adams</a>

            <a href="http://www.thetakeaway.org/series/breastcancer/" target="_blank">
                <div id="logo"></div>
            </a>
            <div className="iconContainer">
                <a href="https://www.facebook.com/groups/underherskin/1450514928556979/" target="_blank" className="icons">
                    <div id="facebook"></div>
                </a>
                <a href="http://twitter.com/thetakeaway" className="icons" target="_blank">
                    <div id="twitter"></div>
                </a>
            </div>
		</footer>
	);
}

export default Footer;