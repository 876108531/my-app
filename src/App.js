import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
