/**
 * THIS IS OUR LOGIC (The store itself)
 * 
 * Create a store that handles all our side effects for us
 * This is a factory function
 * 
 * 'update' takes an action and that action is a function
 * if action is not a function then throw an error
 */

/**
 * @typedef {object} Item
 * @prop {number} value 
 */

/**
 * @typedef {object} State
 * @prop {Item} wind
 * @prop {Item} temperature
 * @prop {Item} humidity
 */

/**
 * Notification you get when the store changes 
 * This is a side effect
 * We will register this notification
 * @callback Notify
 * @param {State} next
 * @param {State} prev  
 */

/**
 * @callback Action
 * @param {State}
 * @returns {State}
 */

/**
 * @callback Update 
 * @param {Action}
 */

/**
 * @callback Subscribe 
 * @param {Notify} notify
 */

/**
 * when 'update' is run we get notified 
 * @typedef {object} Store 
 * @prop {Update} update 
 * @prop {Subscribe} subscribe
 */

// THIS IS OUR DATA 
const state = {
    wind: {
        value: 1,
    },
    temperature: {
        value: 1,
    },
    humidity: {
        value: 1,
    }
};  // all our side effects will happen here and all data resides here


// const createStore = (initial) => {
//     /**
//      * @type {Array<State>}
//      */
// Commented the above bc we're using the export functionality 
// of the module itself 

/**
 * @type {Array<State>}
 */
const states = [initial]; // the state is the only thing that can be replaced

/**
 * @type {Array<Notify>}
 */
const notifiers = []; // functions subscribed to the store that'll get called 

export const update = (action) => {
        if (typeof action !== 'function') {
            throw new Error("action is required to be function")
        }
    
    // place the latest state at the front of the array 
    const prev = Object.freeze({ ...states[0] });  
    // we then calculate the next state, we run the action on the next state
    const next = Object.freeze({ ...action(prev) });

    // added Object.freeze() so that it cant be modified 
    // we also destructure them to ensure they're completely new arrays

    states.unshift(next);
    };


/**
 * notify is a function
 * @param {Notify} notify
 * @returns
 */    
export const subscribe = (notify) => {   // notify handles the notification
        notifiers.push(notify);

        const unsubscribe = () => {

        }

        return unsubscribe;
    };