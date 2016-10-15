import React from 'react';
import './AudioPlayer.css';
import Sound from 'react-sound';

const AudioPlayer = React.createClass ({
 	getInitialState: function () {
 		return {
 			status: 'PLAYING'
 		};
 	},
  	shouldComponentUpdate: function(nextProps, nextState){
    	return nextProps.audio !== this.props.audio
    	|| nextState.status !== this.state.status
    	? true : false;
	},
  	handlePauseClick: function () {
  		const status = this.state.status === 'PLAYING' ? 'PAUSED' : 'PLAYING';
  		this.setState({status: status});
  	},
  	determineAudioIcon: function (status) {
  		const classNameLookup = {
  			PAUSED: 'icon-volume-medium',
  			PLAYING: 'icon-volume-mute2',
  		};
  		const iconClass = classNameLookup[status];
  		return iconClass;
  	},
  	render: function () {
  		const { status } = this.state;
  		const { audio } = this.props;
  		const STATUS =  Sound.status[status];
  		const className = this.determineAudioIcon(status);

  		return (
	  		<div>
		  		<Sound url={audio} playStatus={STATUS} onFinishedPlaying={this.handleFinishPlaying} />
		  		<button className={`${className} fixed`} onClick={this.handlePauseClick}></button>
	  		</div>
	  	);
  	}
})

export default AudioPlayer;