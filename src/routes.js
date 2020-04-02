import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Opening from './components/opening';
import Security from './components/security';
import Survey from './components/survey';
import Closing from './components/closing';

export default (
    <Switch>
        <Route exact path='/' component={Opening} />
        <Route path='/security-question' component={Security} />
        <Route path='/survey' component={Survey} />
        <Route path='/closing' component={Closing} />
    </Switch>
)