import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import workoutReducer from './reducers/workoutReducer'

import App from './App';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



let store = createStore(workoutReducer, composeEnhancers(applyMiddleware(thunk)));
// console.log(store)
// look for dispatch, getState(), routerprops

ReactDOM.render(
<Provider store={store}>
   <Router>
      <App />
   </Router>
</Provider>, 

document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// local state and global state
// local state- component state, global state = store

// the global state manages its own state via the reducers
// provider, gives access to the store