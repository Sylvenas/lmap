import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, hashHistory, IndexRedirect} from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import CongestionIndex from './containers/CongestionIndex';
import TrafficGuidance from './containers/TrafficGuidance';
import rootReducer from './reducers/index';

let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRedirect to="CI" />
                <Route path='CI' component={CongestionIndex}/>
                <Route path='TG' component={TrafficGuidance}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)