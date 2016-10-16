import React from 'react';
import './Hero.css';

const Hero = () => {
	return (
		<header>
			<picture>
				<source media="(max-width: 40em)"
				sizes="100vw"
				srcSet="UnderHerSkin-mobile-opt.png 810w"
				/>
				<img alt="Under Her Skin: Living With Breast Cancer"
				src="UnderHerSkin-opt.png"
				className="hero__poster" />
			</picture>
		</header>
	);
}

export default Hero;