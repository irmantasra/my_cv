import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import './styles.css';
import reducers from './reducer';

const history = createHistory();
const middleware = [
		routerMiddleware(history),
		thunk
];

const appReducer = combineReducers({
	...reducers,
	router: routerReducer,
	from: reduxFormReducer
});

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT' ) {
		const { router } = state;
		state = {
			router,
			admin: {
				authentificated: false,
				loggedInUser: {}
			}
		};

		return appReducer(state, action);
	}
}

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(...middleware)
);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<h1>Irmantas Ramanauskas cv</h1>
		</ConnectedRouter>
	</Provider>,
	document.querySelector('.app')
);