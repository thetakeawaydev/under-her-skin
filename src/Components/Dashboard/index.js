import React from 'react';
import Individual from '../Individual';
import CoverBox from '../CoverBox';
import './Dashboard.css';
import individuals from '../../individuals.json';

const Dashboard = (props) => {
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
				return <Individual {...individual} key={i} />
			})}
			{props.children}
		</main>
	);
};

export default Dashboard;