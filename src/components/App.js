import React, { Component } from 'react';
import ContactButton from './ContactButton';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
