import React from 'react';
import './Showcase.css';

const Showcase = (props) => {
	const { audio, timelineId } = props;
	const timeline = `http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=${props.timelineId}&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650`;
	return (
		<section className="showcase">
			<audio autoPlay id="player" src={props.audio}></audio>
			<iframe src={timeline}></iframe>
			<button>TURN OFF SOUND</button>
		</section>
	);
}

export default Showcase;