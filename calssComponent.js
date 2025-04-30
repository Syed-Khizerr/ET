// App.js
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Setting initial state
    this.state = {
      message: 'Hello from Class Component!',
    };
  }

  // Method to update the state
  changeMessage = () => {
    this.setState({
      message: 'Message updated!',
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Update Message</button>
      </div>
    );
  }
}

export default App;
