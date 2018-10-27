import React, { Component } from 'react';
import Login from './page/login';
import { Provider } from 'react-redux';
import store from './store';
import Picture from './page/picture';
import Avatar from './page/uplode';
import Home from './page/home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/picture' component={Picture}></Route>
            <Route path='/avatar' component={Avatar}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}




export default App;
