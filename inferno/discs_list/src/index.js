/*eslint-disable import/default */ 
import 'babel-polyfill';
import Inferno from 'inferno';
import configureStore from './store/configureStore';
import {Provider} from 'inferno-redux';
import {Router, Route, IndexRoute} from 'inferno-router';
import {loadDiscs} from './actions/discActions';
import { createBrowserHistory } from 'history';
import App from './components/App';
import DiscPage from './components/disc/DiscPage';

const browserHistory = createBrowserHistory();

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);
store.dispatch(loadDiscs());

Inferno.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={DiscPage} />
        </Route>
    </Router>,
    document.getElementById('app')
);