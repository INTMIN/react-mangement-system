import React, { Component } from 'react';
import Login from './page/login';
import { Provider } from 'react-redux';
import store from './store';
import Picture from './page/picture';
import Avatar from './page/uplode';
import Home from './page/home';
import { BrowserRouter, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/picture' component={Picture}></Route>
            <Route path='/avatar' component={Avatar}></Route>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}




export default App;
