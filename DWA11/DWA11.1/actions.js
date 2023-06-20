/**
 * increase takes state and produces a new state
 * 
 * we return the current state and destructure to create a new object
 * we then override value 
 * 
 * we can do either one of these below
 */

// THIS IS OUR BEHAVIOR 
export const increase (state) => {
    return {
        ...state,
        value: state.value + 1
    }
}

// const increase (state) => {
//     const result = {}
//     result.value = state.value + 1
//     return result
// }


const decrease (state) => {
    return {
        ...state,
        value: state.value - 1
    }
}

// create a lense 
// use this instead of getters and setters in functional programming
const get = (state) => {
    return state[key]
}