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
 * @callback Subscription
 * @param {State} prev
 * @param {State} next 
 */

/**
 * @type {Array<Subscription>}
 */
let subscribers = [] 

/**
 * @type {Array<State>}
 */
const states = [{
    phase: 'idle',
    tasks: {},
    filters: {
        sorting: 'A-Z',
    },  
}];   // this is the starting state

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
export const dispatch = (action) => {
    const prev = getState()       // gets the current store
    const next = reducer(prev, action);

    // trigger the subscriptions as well:
    subscribers.forEach((item) => item(prev, next))
    states.unshift(next);

} // we run our reducer on that state

/**
 * @param {Subscription} subscription
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription)
    const handler = (item) => item !== subscription
    // gets the current item in the array

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler)
        subscribers = newSubscribers
    }  
    // maps over the current subscribers
    // anything that resolves to true when you call filter it keeps it
    // if its false it removes it

    return unsubscribe
}


