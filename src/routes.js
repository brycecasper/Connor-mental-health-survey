import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Opening from './components/opening';
import Survey from './components/survey';
import Closing from './components/closing';

export default (
    <Switch>
        <Route exact path='/' component={Opening} />
        <Route path='/survey' component={Survey} />
        <Route path='/closing' component={Closing} />
    </Switch>
)