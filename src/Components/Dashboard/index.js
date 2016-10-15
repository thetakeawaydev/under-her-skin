import React from 'react';
import Individual from '../Individual';
import Showcase from '../Showcase';
import CoverBox from '../CoverBox';
import './Dashboard.css';
import Scroll from 'react-scroll';
const scroll  = Scroll.animateScroll;
class Dashboard extends React.Component {
	constructor(props) {
	    super(props);
	    const { individuals } = props;
	    this.state = {
	      chosenIndividualIndex: -1,
	      individuals
	    };
  	}
	handleIndividualClick (i) {
		this.setState({chosenIndividualIndex: i});
		scroll.scrollToBottom();
	}
	render () {
		const { individuals, chosenIndividualIndex } = this.state;
		return (
			<main className="dashboard text-center">
				<CoverBox>
					<p className="center-align--block coverBox__p">
					  	Over the past 30 years, researchers have found a widening survival divide between black and white women diagnosed with breast cancer in the United States.
					</p>

					<p className="center-align--block coverBox__p">
						Through audio diaries, three African-American women share their thoughts and fears, their struggles and triumphs, as they cope with the disease.
					</p>
					<div className=" coverBox__button">Listen</div>
				</CoverBox>
				{individuals.map((individual, i)=> {
					const { name } = individual;
					const boundClick = this.handleIndividualClick.bind(this, i);
					return <Individual {...individual} onClick={boundClick} key={i}/>
				})}
				{chosenIndividualIndex >= 0 ? <Showcase audio={individuals[chosenIndividualIndex].audio} timelineId={individuals[chosenIndividualIndex].timelineId} /> : ''}
			</main>
		);
	}
}

export default Dashboard;