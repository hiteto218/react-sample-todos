import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  addTodo,
  toggleTodo,
  setVisivilityFileter,
  VisibilityFileters,
} from './actions'
// Log the initial state
console.log(store.getState())
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisivilityFileter(VisibilityFileters.SHOW_COMPLETED))
// Stop listening to state updates
unsubscribe()
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
