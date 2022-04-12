import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

//STORE -> GLOBALIZED STATE

//ACTION INCREMENT
const increment =()=>{
  return {
    type:'INCREMENT'
  }
}
const decrement =()=>{
  return {
    type:'DECREMENT'
  }
}

const double =()=>{
  return {
    type:'DOUBLE'
  }
}
//REDUCER
const counter =(state=0,action)=>{
  switch(action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    case 'DOUBLE':
      return state*2;
  }
}

let store= createStore(counter);
//DISPATCH
store.subscribe(()=>console.log(store.getState()))
store.dispatch(increment())

store.dispatch(decrement())
console.log(store)





ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
