import React from 'react';
import { Link } from 'react-router';
import './Individual.css';


const slugify = (string) => string.toLowerCase().replace(' ', '-');
const Individual = (props) => {

	return (

		<figure className="individual" onClick={props.onClick}>
			<Link to={slugify(props.name)}>
			<img title={props.name} src={props.image} alt={props.name} className="individual__photo" />
			</Link>
		</figure>

	);
}

export default Individual;