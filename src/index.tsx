import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { UserList } from './UserList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider
    store={store}
  >
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) =>
            <App
              userType={'admin'}
              userName='abc'
              {...props}
            />
          }
        />
      </Switch>
      <Switch>
        <Route
          exact
          path='/userList'
          render={(props) =>
            <UserList
              {...props}
            />}
        />
      </Switch>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
