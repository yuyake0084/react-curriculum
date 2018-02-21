import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      name: 'Ohashi'
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    const { isLoggedIn, name } = this.state;

    return (
      <div>
        {isLoggedIn ?
          <p>
            {'Hello ' + name + '!'}
          </p>
        :
          <button onClick={this.handleLogin}>ログイン</button>
        }
      </div>
    );
  }
}

export default App;
