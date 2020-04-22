import React, {Component} from 'react';
import './App.css';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import Auth from './components/auth';
import Results from './components/results';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: false
    }
  }

  render(){
    return (
      <main>
        {
          this.state.results
          ?
          <div>
        <Auth />
        <Results />
          </div>
          :
          <div>
            {routes}
          </div>
        }
      </main>
    )
  }
}

export default withRouter(App);
