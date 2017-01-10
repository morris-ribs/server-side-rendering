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
import routes from './routes';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const browserHistory = createBrowserHistory();

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);
store.dispatch(loadDiscs());

Inferno.render(
    <Provider store={store}>
        <Router history={browserHistory} component={ App }>
                <IndexRoute component={DiscPage} />
        </Router>
    </Provider>,
    document.getElementById('app')
);