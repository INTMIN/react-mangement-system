import React, { Component } from 'react';
import Home from './page/home';
import Login from './page/login';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          {/* both /roster and /roster/:number begin with /roster */}
        </div>
          
        </BrowserRouter>
      </Provider>
      
    );
  }
}




export default App;
