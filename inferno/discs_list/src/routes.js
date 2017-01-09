import Inferno from 'inferno';
import {Route, IndexRoute} from 'inferno-router';

import App from './components/App';
import DiscPage from './components/disc/DiscPage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={DiscPage} />
    </Route>
);