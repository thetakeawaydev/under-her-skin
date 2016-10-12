import React from 'react';
import './Individual.css';

const Individual = (props) => {

	return (
		<figure className="individual" onClick={props.onClick}>
			<img title={props.name} src={props.image} alt={props.name} className="individual__photo" />
		</figure>
	);
}

export default Individual;