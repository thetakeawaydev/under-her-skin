import React from 'react';
import Individual from '../Individual';
import Showcase from '../Showcase';
import './Dashboard.css';

class Dashboard extends React.Component {
	constructor(props) {
    super(props);
    const { individuals } = props;
    this.state = {
      chosenIndividualIndex: -1,
      individuals
    };
  }
  handleClick (i) {
  	this.setState({chosenIndividualIndex: i})
  }
	render () {
		const { individuals, chosenIndividualIndex } = this.state;
		return (
			<main className="dashboard">
				{individuals.map((individual, i)=> {
					const { name } = individual;
					const boundClick = this.handleClick.bind(this, i);
					return <Individual {...individual} onClick={boundClick} key={i}/>
				})}
				{chosenIndividualIndex >= 0 ? <Showcase audio={individuals[chosenIndividualIndex].audio} timelineId={individuals[chosenIndividualIndex].timelineId} /> : ''}
			</main>
		);
	}
}

export default Dashboard;