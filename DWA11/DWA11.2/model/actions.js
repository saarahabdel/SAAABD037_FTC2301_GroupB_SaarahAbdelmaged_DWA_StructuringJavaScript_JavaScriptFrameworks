import { Task, Sorting } from './store.js'

/**
 * Adds a task to the store 
 * @typedef {object} AddTask
 * @prop {'ADD_TASK'} type
 * @prop {Task} task 
 */

/**
 * Changes the order in which tasks are sorted
 * @typedef {object} ChangeSort
 * @prop {'CHANGE_SORT'} type
 * @prop {Sorting} sorting 
 */

// /**
//  * Starts the adding process of a new task
//  * @typedef {object} StartAdd
//  * @prop {'START_ADD'} type
//  */

// /**
//  * Cancels the adding process of a new task 
//  * @typedef {object} CancelAdd
//  * @prop {'CANCEL_ADD'} type
//  */
// THE BELOW COULD REPLACE THE COMMENTED ABOVE

/**
 * Starts or stops the adding of a new task, depending on
 * what the current phase is.
 * 
 * @typedef {object} StartAdd
 * @prop {'TOGGLE_ADD'} type 
 */

/**
 * @typedef {AddTask | ChangeSort | ToggleAdd } Action 
 */

export const Action = 

/**
 * @return {string} 
 */
export const createUniqueId = () => {
    const array = [
        Math.round(Math.random() * 10000000000),
        new Date().getTime(),
        Math.round(Math.random() * 10000000000),
    ];

    return array.join('-');
}

/**
 * @param {object} props
 * @param {string} props.title
 * @returns {AddTask} 
 */
export const addTask = (props) => {
    const { title } = props;          // destructuring props
    return {
        task: {
            created: new Date(),
            id: createUniqueId(),
            title,
        },
        type: 'ADD_TASK',
    };
};

/**
 * @returns {ToggleAdd}
 */
export const toggleTask = () => ({ type: "TOGGLE_ADD" });

/**
 * @param {object} props 
 * @param {Sorting} props.sorting 
 * @return {ChangeSort}
 */
export const changeSort = () => {
    const {} = []
    return {
        sorting,
        type: "CHANGE_SORT",
    }

}



