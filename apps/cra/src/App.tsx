import * as React from 'react';
import './App.css';
import {fooBar} from 'package-b';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    const foo = fooBar();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {foo}
      </div>
    );
  }
}

export default App;
