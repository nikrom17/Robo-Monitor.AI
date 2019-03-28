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

  toggleFeed = () => {
    const doesShow = this.state.pickState;
    this.setState( { pickState: 1} );
    this.setState( {robotError: false} );
  }

  toggleErrors = () => {
    const doesShow = this.state.pickState;
    this.setState( { pickState: 2 } );
    this.setState( {robotError: true} );
  }

  toggleStats = () => {
    const doesShow = this.state.pickState;
    this.setState( { pickState: 3 } );
    this.setState( {robotError: false} );
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
    let ErrorStatus = null;

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
            onClick={this.toggleFeed}>Live Feed</button>
          <button
            className={btnClass2}
            onClick={this.toggleErrors}>Error History</button>
          <button
            className={btnClass3}
            onClick={this.toggleStats}>System Stats</button>
            {screen}
        </div>
    );
  }
}

export default App;
