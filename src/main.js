import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reduxThunk } from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import App from './components/app';
import './styles/styles.less';

render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={} />
				</Switch>
			</div>
		</BrowserRouter>
	<App />, document.querySelector('#root')
);
