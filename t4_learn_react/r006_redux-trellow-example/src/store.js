/*
  This is the store: keeps hold of the state, and allows to dispatch actions 
  that will modify state, and dispatch actions to modify
 */

import {createStore} from 'redux'

import {trelloReducer} from './reducers';

// create store using createStore method, tell use our reducer to 
// handle any actions dispatched
export default createStore(trelloReducer);
