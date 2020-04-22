import React, {Component} from 'react';
import './App.css';
import routes from './routes';
import {withRouter} from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <main>
        {routes}
      </main>
    )
  }
}

export default withRouter(App);