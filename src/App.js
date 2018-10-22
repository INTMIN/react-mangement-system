import React, { Component } from 'react';
import SiderMune from './page/menu';
import AppIcon from './page/home';

class App extends Component {
  render() {
    return (
      <div>
        <AppIcon/>
        <SiderMune />
      </div>
    );
  }
}

export default App;
