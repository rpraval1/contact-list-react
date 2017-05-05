import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import EditContact from './components/EditContact';
import ContactButton from './components/ContactButton';
import { Router, Route, IndexRoute ,browserHistory } from 'react-router';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ContactButton}></IndexRoute>
      <Route path='/edit' component={EditContact}></Route>
    </Route>
  </Router>
),
  document.getElementById('root')
);
