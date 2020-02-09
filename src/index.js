import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';



// STORE --. GLOBAL STATE
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);







// ACTIONS  ---> it describe what we want to do
// //  INCREMENT ACTION 
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//         // we can use name or type to describe our actions in our object
//     }
// }
//  DECREMENT ACTION
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }



// REDUCERS
// One reducer
//  const counter = (state = 0, action) => {

//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }

// };


// STORE --. GLOBAL STATE
// we pass the reducer to the store 

// let store = createStore(counter);



// Display to console
// store.subscribe(() => console.log(store.getState()));



// DISPATCH
// we excute the action 
// store.dispatch(increment());
// store.dispatch(increment());

// store.dispatch(decrement());



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
