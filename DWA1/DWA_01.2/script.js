// Mars Climate Orbiter Code 

// p = 9
// m = 2000
// vel = 1000
// acc = 2
// frcp = m * acc
// n = 5 
// time = 10
// frcn = frcp * 4.44822
// cc = 3 / n
// acc2 = 90410 + p
// final = vel + (frcp / m) * time // should apply frcn instead
// console.log('Final velocity', final)


// HOW TO WRITE THE ABOVE CODE BETTER
const CONVERSION_FACTOR = 4.44822   // set before the programme runs

// const forceInPoundsSec = 50
// const timeAsSeconds = 10              // include unit of measurement in variable names
// const forceInNewtonsSec = forceInPoundsSec * CONVERSION_FACTOR 
// const thrust = forceInPoundsSec * timeAsSeconds

// Build it in a way where the code cant run if the wrong value is used 
const force = {
    value: 50,
    measurement: 'pound-seconds'
}
console.log(force.measurement) // we can check what the measurement is 

/**
 * Calculates the Mars Climate Orbiter thruster amount. Note that the provided value
 * can be either pounds-seconds or newton-seconds. (the conversion will happen automatically).
 * 
 * @param {object} props 
 * @param {number} props.time - Time as measured in seconds
 * @param {object} props.force
 * @param {number} props.force.value - Force as measured in newton-seconds
 * @param {'newton-seconds' | 'pound-seconds'} props.force.measurement
 * @returns {number}
 */
const calcThrust = (props) => {
    if (!props) throw new Error('"force" is required')

    const { force, time} = props
    const { value, measurement } = force
    if (!force) throw new Error('"force" is required')
    if (!time) throw new Error('"time" is required')
    if (!value) throw new Error('"value" is required')
    if (!measurement) throw new Error('"measurement" is required')
    if (!['newton-seconds', 'pound-seconds'].includes(measurement) ) { // checks whether measurement is in the array 
        throw new Error(`"measurement" is required to be "newton-seconds" or "pound-seconds", it is
        currently ${measurement}`)
    } 

    const valueAsNewtonSeconds = measurement === 'newton-seconds' ? 
          value: 
          value * CONVERSION_FACTOR

    return valueAsNewtonSeconds * time    
}

// const thrust = calcThrust() // bc no value will parse error 

const thrust = calcThrust({
    time: 10,
    force: {
        value: 50,
        measurement: 'newton-seconds'
    }
})

console.log(thrust);


/** WHAT WE DID TO MANAGE THE CODE COMPLEXITY
 * 
 * 1) Looked at Code Style and Style Guides
 * -- having the properties of objevts be on a new line
 * -- indentation as things get nested in a property
 * -- using brackets if an IF statement is more than a single line 
 * -- writing global constants in upper snake case 
 * 
 * 2) Added Documentation 
 * -- comments describing what code does 
 * -- comments describing code types and shapes
 * -- comments on what the code returns 
 * 
 * 3) Built the Code much for Modular 
 * -- easy to re-use (like global constants or functions)
 * -- kept related things close as a function or an object 
 * -- functional programming (FP)
 * -- object orientated programming (OOP)
 * 
 * 4) Abstraction 
 * -- what keeps code manageable 
 * -- build little pieces of software then join them together (using export and import)
 * -- interface
 */


/** WHAT CAUSES COMPLEXITY?
 * 
 * 1) programming comes with complexity
 * 2) requirements are usually evolving 
 * 3) technical debt (sometimes you need a quick fix for a bug)
 *    manage the debt, add documentation after, dont let it pile up 'interest'
 * 4) scaling, code needs to change as the product grows 
 * 
 */

