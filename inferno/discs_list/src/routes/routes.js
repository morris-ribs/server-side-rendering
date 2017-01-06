import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import App from '../App';
import DiscPage from '../components/disc/DiscPage';

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
        <IndexRoute component={DiscPage} />
    </Route>
  </Router>
);