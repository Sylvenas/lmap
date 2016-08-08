import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, hashHistory, IndexRedirect} from 'react-router';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import CongestionIndex from './containers/CongestionIndex';
import TrafficGuidance from './containers/TrafficGuidance';
import initStore from './store/index';

let store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Root}>
                <IndexRedirect to="/CI" />
                <Route path='/CI' component={CongestionIndex}/>
                <Route path='/TG' component={TrafficGuidance}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

// ReactDOM.render(
//     <Provider store={store}>
//         <CongestionIndex/>
//     </Provider>,
//     document.getElementById('root')
// )