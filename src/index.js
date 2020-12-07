import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import workoutReducer from './reducers/workoutReducer'

import App from './App';


// set up our store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// we establish a compose enhancer to be able to create multiple stores


let store = createStore(workoutReducer, composeEnhancers(applyMiddleware(thunk)));
// create our store. Import it from redux, reducer, composeEnhancers, thunk middleware. Thunk(function returned by another function) middleware allows async calls throught the application

ReactDOM.render(
<Provider store={store}>
  {/*Back end as front end Redux is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree. */}
  {/* makes redux store available to any nested components that have been wrapped in the connect function || makes redux  store available */}
  <Router>
    {/* routes..duuuuuh!...by fatima */}
    <App />
  </Router>
</Provider>, 

document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
