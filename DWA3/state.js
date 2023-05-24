/**
 * @typedef {'high' | 'medium' | 'low'} Urgency - The priority that the tasks
 should take in terms of how quickly it should be complated 
 *
 * @typedef {'recent' | 'oldest' | 'upcoming'} Sorting - One of three 
 possible predefined ordering approaches that task can be shown in. `recent` arranges
 based on the tasks that were created closest to the current date, `oldest` does the opposite,
 and `upcoming` arranges based on the closest due date (if no new date it will be placed last)
 */

// We need a function that can create unique ID's for us: (Demonstrates how to mark up a function)

/**
 * Creates a unique ID to be used in the app. Value is created by combining two randomized numbers
 * with the current timestamp. The values are divided by dashes (-) in order to ensure that the
 * value is treated as a string (and not a number)
 *
 * @returns {string}
 */
const createId = () => {};

/**
 * @typedef {object} Task - An object representing a task to be shown to a user
 * @prop {string} id - An unique generated value by {@link createId} used to identify tasks
 * @prop {string} title - A short description of what the task entails
 * @prop {boolean} completed - Whether the task has been completed or not
 * @prop {Date} created - The exact date when the task was created in the system
 * @prop {null | Date} due - A user specified date for when the task should be completed           // value needs to be specified as null if no due date
 * @prop {'high' | 'medium' | 'low'} urgency - A user specified indication of how important the task is
 */

// Our Filters:
/**
 * @typedef {object} Filters
 * @prop {string} search
 * @prop {Urgency | 'any' } urgency           // has its own typedef
 * @prop {Sorting} sorting                   // has its own typedef
 */

// Our State Object:
/**
 * @typedef {object} State
 * @prop {Record<string, Task>} tasks               // we dont know the number of tasks there'll be, we only know what the values and keys need to be
 * @prop {Array<string>} displaying
 * @prop {Filters} Filter
 */


/**
 * @type {State}
 */
export const state = {
    tasks: {},
    displaying: {},

    filters: {
        search: "",
        sorting: "recent",
        urgency: "any",
    },
};