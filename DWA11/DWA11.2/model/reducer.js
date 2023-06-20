import { State } from './store.js'
import { Action } from './actions.js'

/**
 * One can connect multiple reducers 
 * All a reducer does is takes a state and returns a new state 
 */

/**
 * @param {State} state
 * @param {Action} action
 * @return {State}
 */
export const reducer = (state, action) => {
    return state;
};

