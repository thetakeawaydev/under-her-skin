import React from 'react';
import './CoverBox.css';

class CoverBox extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      hidden: false
	    };
	    this.children = props.children;
	    this.handleClick = this.handleClick.bind(this);
  	}
  	handleClick() {
  		this.setState({hidden: true});
  	}
	render() {
		const hiddenClass = this.state.hidden ? 'coverBox--disactivated' : '';
		return (
			<div className={`coverBox ${hiddenClass}`} onClick={this.handleClick}>
				{this.children.map((child) => child)}
			</div>
		)
	};
}

export default CoverBox;