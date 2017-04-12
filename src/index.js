import {h, render} from 'preact';
import {Provider} from 'preact-redux';
import {Router, Route} from 'preact-router';

// Load offline plugin only on production
process.env.NODE_ENV === 'production' && require('./offline');

import 'material-design-lite/material';

import HomePage from './views/home';
import './style/index.scss';

render(
	<Router>
	<HomePage path='/'/>
</Router>, document.body);
