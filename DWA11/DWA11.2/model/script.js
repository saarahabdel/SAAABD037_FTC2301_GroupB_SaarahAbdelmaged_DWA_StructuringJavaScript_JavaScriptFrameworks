import { getState, dispatch } from './store.js'
import { addTask, changeSort, toggleAdd } from './actions.js'

subscribe((_, next) => console.log(next)) // we only want next not prev state

dispatch(toggleAdd());
dispatch(toggleAdd());
dispatch(toggleAdd());
dispatch(addTask({ title: "Hello" }));
dispatch(addTask({ title: "World" }));
dispatch(changeSort({ sorting: "Z-A" }));
dispatch(toggleAdd());

// added dispatch to dispatch items to the store 
// action creator creates action for us but we still need to send it 
//       to the store 













