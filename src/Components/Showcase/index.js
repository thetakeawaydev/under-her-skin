import React from 'react';
import './Showcase.css';
import AudioPlayer from '../AudioPlayer';
import individuals from '../../individuals.json';
const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) =>  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

const deslugify = (string) => toTitleCase(string.replace('-', ' '));

function determineChosenIndiviual(routerParams, individuals) {
	const slugName = routerParams.name;
	const name = deslugify(slugName);
	const chosenPerson = individuals.filter((personData)=> personData.name === name);
	return chosenPerson[0];
}

const Showcase = React.createClass({
	render() {
		const args =  this.props.params;
		const theChosen = determineChosenIndiviual(args, individuals);
		const { audio, timelineId } = theChosen;
		const timeline = `//cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=${timelineId}&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650`;
		return (
		<section className="showcase">
			<AudioPlayer audio={audio} />
			<iframe src={timeline}></iframe>
		</section>
		);
	}
});

export default Showcase;