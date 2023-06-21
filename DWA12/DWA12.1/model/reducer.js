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
    switch (action.type) {
        case 'ADD_TASK': {
            return {
                ... state,    // returns a new state
                phase: 'idle', // so automatically says app to idle state
                tasks: {
                    [action.task.id]: action.task,
                    ... state.tasks,
                }
            }

        }
        case 'CHANGE_SORT': {
            return {
                ... state,    // returns a new state
                filters: {
                    ... state.filters,
                    sorting: action.sorting,
                }
            }

        }
        case 'TOGGLE_ADD': {
            return {
                ... state,    // returns a new state
                phase: state.phase === 'adding' ? 'idle' : 'adding',
            }

        }
        default: return state
    }

};
// switch looks at the action type, based on the type it det what to do
// if none of the action types match any conditions then default state is returned 





