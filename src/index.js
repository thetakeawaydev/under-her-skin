import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './Components/App';
import Showcase from './Components/Showcase';
import './index.css';
import 'picturefill';
import Scroll from 'react-scroll';
const scroll  = Scroll.animateScroll;


const router = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/:name" component={Showcase} onEnter={()=>scroll.scrollToBottom()}></Route>
		</Route>
	</Router>
);


ReactDOM.render(
 	router,
	document.getElementById('root')
);