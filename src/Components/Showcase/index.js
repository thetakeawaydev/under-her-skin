import React from 'react';
import './Showcase.css';
import AudioPlayer from '../AudioPlayer';

const Showcase = (props) => {
	const { audio, timelineId, onAudioClick } = props;
	const timeline = `http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=${props.timelineId}&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650`;
	return (
		<section className="showcase">
			<AudioPlayer audio={audio} />
			<iframe src={timeline}></iframe>
		</section>
	);
};

export default Showcase;