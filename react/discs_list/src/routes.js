import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import DiscPage from './components/disc/DiscPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={DiscPage} />
    </Route>
);