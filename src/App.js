import React, { Component } from 'react';
import classes from './App.css';
import LiveFeed from './containers/LiveFeed/LiveFeed';
import ErrorHistory from './containers/ErrorHistory/ErrorHistory';
import SystemStats from './containers/SystemStats/SystemStats';

class App extends Component {
  state = {
    robotError: false,
    pickState: 1
  }

  toggleScreen = (screenId) => {
    let errorState = false;
    if (screenId === 2) {
      errorState = true;
    }
    this.setState( { pickState: screenId} );
    this.setState( {robotError: errorState} );
  }

  render () {
    let screen = null;
    let btnClass1 = classes.default;
    let btnClass2 = classes.default;
    let btnClass3 = classes.default;

    if (this.state.pickState === 1 ) {
      screen = (
        <div>
          <LiveFeed />
        </div>
      );
      btnClass1 = classes.pressed;
    }
    else if (this.state.pickState === 2) {
      screen = (
        <div>
          <ErrorHistory />
        </div>
      );
      btnClass2 = classes.pressed;
    }

    else if (this.state.pickState === 3 ) {
      screen = (
        <div>
          <SystemStats />
        </div>
      );
      btnClass3 = classes.pressed;
    }

    const assignedClasses = [];
    let ErrorStatus = '';

    if ( this.state.robotError ) {
      assignedClasses.push( classes.red );
      ErrorStatus = 'System Fault';
    }
    else {
      assignedClasses.push( classes.green );
      ErrorStatus = 'System Running';
    }

    return (
        <div className={classes.App}>
          <h1>Robot Control Pannel</h1>
          <p className={assignedClasses.join( ' ' )}>Status: {ErrorStatus}</p>
          <button
            className={btnClass1}
            onClick={() => this.toggleScreen(1)}>Live Feed</button>
          <button
            className={btnClass2}
            onClick={() => this.toggleScreen(2)}>Error History</button>
          <button
            className={btnClass3}
            onClick={() => this.toggleScreen(3)}>System Stats</button>
            {screen}
        </div>
    );
  }
}

export default App;
