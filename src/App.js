import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions/index';
import { connect } from 'react-redux';




// first way to display and dispatch an action from the component using useSelector and useDispatch


// function App() {

//   const counter = useSelector(state => state.counterReducer);
//   const isLoggedIn = useSelector(state => state.isLoggedReducer);

//   const dispatch = useDispatch();


//   return (
//     <div className="App">
//       <h2>Redux</h2>
//  <h4>Using useSelector and useDispatch way to dispatch an action</h4> 




//       <p>Counter is {counter}</p>

//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}> - </button>

//       <br />
//       <hr />

//       <p>You are {isLoggedIn === true ? "Logged In" : "Logged Out"}</p>
//       <button onClick={() => dispatch(signIn())} >Log In </button>
//       <button onClick={() => dispatch(signOut())} >Log Out </button>


//     </div>
//   );
// }

// export default App;




// ---------------------------------------------------------------------------------



// second way to display and dispatch an action from the component using connect




function App(props) {

  return (
    <div className="App">
      <h2>Redux</h2>
      <h4>Using connect way to dispatch an action</h4>

      <hr />
      <h2>counter is {props.counter}</h2>
      <button onClick={props.increment} >+</button>
      <button onClick={props.decrement}>-</button>

      <br />

      <h2>you are      {props.isLogged ? "Logged in" : "Logged out"} </h2>
      <button onClick={props.signIn} >Log In</button>
      <button onClick={props.signOut}>Log Out</button>


    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer,
    isLogged: state.isLoggedReducer

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    signIn: () => dispatch(signIn()),
    signOut: () => dispatch(signOut())

  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);