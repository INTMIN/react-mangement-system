import React, { Component } from 'react';
import Header from './page/header';
import Login from './page/login';
import { Provider } from 'react-redux';
import store from './store';
import Picture from './page/picture';
import Avatar from './page/uplode';
import Home from './page/home';
import SiderMune from './page/menu';
import { BrowserRouter, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
       <Header />
       <SiderMune />
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/picture' component={Picture}></Route>
            <Route path='/avatar' component={Avatar}></Route>
          </div>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}




export default App;
