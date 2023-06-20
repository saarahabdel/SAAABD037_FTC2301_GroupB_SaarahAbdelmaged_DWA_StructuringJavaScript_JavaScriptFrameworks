import { Action } from './actions.js';
import { reducer } from './reducer.js';

/**
 * @typedef {object} Task
 * @prop {string} id
 * @prop {string} title
 * @prop {Date} created 
 */

export const Task = {};

/**
 * @typedef {'A-Z' | 'Z-A'} Sorting
 */

export const Sorting = {}; 

/**
 * @typedef {object} filters
 * @prop {Sorting} sorting
 */

/**
 * @typedef {object} State 
 * @prop {'idle' | 'adding'} phase 
 * @prop {Record<string, Task>} tasks
 * @prop {Filters} filters 
 */

export const State ={};
/**
 * callback that returns the current state
 * @callback getState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn 
 */

/**
 * @callback Subscribe
 * @param {State} prev
 * @param {State} next 
 * @return {EmptyFn}
 */

/**
 * @type {Array<Subscribe>}
 */
const subscribers = [] 

/**
 * @type {Array<State>}
 */
const states = []

/**
 * @return {State}
 */
export const getState = () => {
    return Object.freeze({ ...states[0] });
    // return state as new object so that you cant mutate it 
    // freeze it too 
}

/**
 * @param {Action} action 
 */
export const dispatch = () => {
    const prev = getState()       // gets the current store
    const next = reducer 

} // 

/**
 * @typedef {object} Store 
 * @prop {GetState} getState
 * @prop {Subscribe} subscribe
 * @prop {Dispatch} dispatch 
 */
