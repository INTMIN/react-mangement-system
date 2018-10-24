import React, { Component } from 'react';
import SiderMune from './page/menu';
import AppIcon from './page/home';
import NormalLoginForm from './page/login';
import { BrowserRouter, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
  <BrowserRouter>
  <div>
    <Route exact path='/' component={AppIcon}></Route>
    {/* both /roster and /roster/:number begin with /roster */}
    <Route path='/' component={SiderMune}></Route>
    <Route path='/login' component={NormalLoginForm}></Route>
  </div>
    
</BrowserRouter>
      
    );
  }
}




export default App;
