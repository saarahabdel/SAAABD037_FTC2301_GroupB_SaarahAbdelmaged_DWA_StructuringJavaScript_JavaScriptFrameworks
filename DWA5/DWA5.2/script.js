let locked = false

const lockFn = () => {
    if (locked) throw new Error('Already locked')
    locked = true;

    return () => {
        locked = false
    }
}

const toggleMode = () => {
 const unlock = lockFn()
    
    setTimeout(() => {  
        unlock()
    }, 2000)
}  // setting amount of time that should ellapse before setting to lock


// Check if machine is locked 
const changeAmount = () => {
    const unlock = lockFn()
    // ...  (instantaneous change in intensity)
    unlock()
}

toggleMode()
changeAmount()
