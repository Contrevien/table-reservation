import React, { Component } from 'react';
import './App.css';
import TableReservation from './containers/TableReservation/TableReservation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableReservation />
      </div>
    );
  }
}

export default App;
