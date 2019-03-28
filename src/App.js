import React, { Component } from 'react';
import classes from './App.css';
import LiveFeed from './LiveFeed/LiveFeed';
import ErrorHistory from './ErrorHistory/ErrorHistory';
import SystemStats from './SystemStats/SystemStats';

class App extends Component {
  state = {
    errors: [
    { id: 'dfa ', description: 'Foreign Object (wooden beam) in cell', image: "/im_5.jpg", date: "05-16-2018 12:17 PM" },
      { id: 'asfa1', description: 'Foreign Object (shoe) in cell', image: "/im_3.jpg", date: "05-16-2018 12:17 PM"},
      { id: 'vasdf1', description: 'Robot Colision: Axis 6 external force exceeded', image: "/im_4.jpg", date: "05-16-2018 12:17 PM" },
      { id: 'fdasf ', description: 'Loss of pressure: Axis 3', image: "/im_6.jpg" , date: "05-16-2018 12:17 PM"},
      { id: 'asdrewaf11', description: 'Welding wire jam', image: "/im_4.jpg" , date: "05-16-2018 12:17 PM"},
      { id: 'apkglfgssdf11', description: 'Communication error: valve manifold', image: "/im_6.jpg" , date: "05-16-2018 12:17 PM"}
    ],
    robotError: false,
    pickState: 1
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
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
    let feed = null;
    let errors = null;
    let stats = null;
    let btnClass1 = classes.default;
    let btnClass2 = classes.default;
    let btnClass3 = classes.default;

    if (this.state.pickState == 1 ) {
      feed = (
        <div>
          <LiveFeed />
        </div>
      );

      btnClass1 = classes.pressed;
    }
    else if (this.state.pickState == 2) {
      errors = (
        <div className={classes.Error}>
          {this.state.errors.map( ( error, index ) => {
            return <ErrorHistory
              click={() => this.deletePersonHandler( index )}
              description={error.description}
              image={error.image}
              date={error.date}
              key={error.id} />
          })}
        </div>
      );
      btnClass2 = classes.pressed;
    }

    else if (this.state.pickState == 3 ) {
      stats = (
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
            {feed}
            {errors}
            {stats}
        </div>
    );
  }
}

export default App;
