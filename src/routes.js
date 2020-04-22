import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Opening from './components/opening';
import Survey from './components/survey';
import Closing from './components/closing';
import Auth from './components/auth';
import Results from './components/results';

export default (
    <Switch>
        <Route exact path='/' component={Opening} />
        <Route path='/survey' component={Survey} />
        <Route path='/closing' component={Closing} />
        <Route path='/results' component={Auth} />
        <Route path='/secure' component={Results} />
    </Switch>
)