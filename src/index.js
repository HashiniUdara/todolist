import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './app/store';
import { Provider } from 'react-redux';
import ReduxPractice from './ReduxPractice';
import { fetchUsers } from './features/users/usersSlice';

import Login from './features/login/Login';

// E-commerce
import Main from './E-commerce/Main';
import Category from './E-commerce/Category';
import Item from './E-commerce/Item';
import InsertUser from './E-commerce/InsertUser';
import InsertItem from './E-commerce/InsertItem';

store.dispatch(fetchUsers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      {/* <App /> */}
      {/* <ReduxPractice/> */}
      {/* <Login/> */}
      {/* <Main/> */}
      {/* <Category/> */}
      {/* <Item/> */}
      {/* <InsertUser/> */}
      <InsertItem/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
