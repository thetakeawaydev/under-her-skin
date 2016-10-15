import React from 'react';
import './Footer.css';
const Footer = () => {

	return (
		<footer className="footer">
			<a href="https://tyleraadams.com" className="credit" target="_blank">Designed by <br/>Tyler Adams</a>

            <a href="http://www.thetakeaway.org/series/breastcancer/" target="_blank">
                <img className="logo hover-effect" src="takeawaylogo-opt.png" alt="The Takeaway" />
            </a>
            <div className="iconContainer">
                <a href="https://www.facebook.com/groups/underherskin/1450514928556979/" target="_blank">
                    <i className="icon-facebook3 social-icon__type hover-effect"></i>
                </a>
                <a href="http://twitter.com/thetakeaway" target="_blank">
                    <i className="icon-twitter3 social-icon__type hover-effect"></i>
                </a>
            </div>
		</footer>
	);
}

export default Footer;