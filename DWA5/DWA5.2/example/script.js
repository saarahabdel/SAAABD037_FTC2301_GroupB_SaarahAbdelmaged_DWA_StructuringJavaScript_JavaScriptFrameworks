/**
 * 
 * @param {string} label 
 * @returns {HTMLElement}
 */

const getHtml = (label) => {
    const node = document.querySelector(`[data-${label}]`)
    if (!(node instanceof HTMLElement)) {
        throw new Error(
            "[data-${label}] was not found in HTML"
            )
    }

    return node
}
// if this returns anything apart from an HTML element then it should throw a error

const html = {
    alert: getHtml("alert"),
    mode: {
        display: getHtml('mode-display'),
        button: getHtml('mode-button'),
    },

    intensity: {
        display: getHtml('intensity-display'),
        button: getHtml('intensity-button'),
    }
}



const modeHtml = document.querySelector(['data-mode'])
const intensityHtml = document.querySelector(['data-intensity'])

/**
 * @typedef {object} data
 * @prop {'low' | 'high'} intensity
 * @prop {'wide' | 'focus' } mode
 * @prop {boolean} locked 
 */

/**
 * @type {Data}
 */
const data = {          // starting data
    intensity: 'low',
    mode: 'wide',
    locked: true, // starts as true and only unlocks when all event listeners have been added
}

const lockFn = () => {
    if (data.locked) throw new Error('Already locked')
    data.locked = true;

    return () => {
        data.locked = false
    }
}

const toggleMode = () => {
    try {
    const unlock = lockFn()
       
       setTimeout(() => {  
        const newMode = data.mode === 'wide' ? 'focus' : 'wide';
        data.mode = newMode;
        html.mode.display.innerText = newMode
           unlock()
       }, 2000)
        } catch (error) {
            html.alert.innerText = 
            `Operation could not be performed,since another operation is currently in progress. Please try again in a few seconds. (${error.message})`;
            
            // a function that takes another function as an argument
            const interval = setInterval(() => {
                if (!data.locked) {
                    html.alert.innerText = ''
                    clearInterval(interval)

                }

            },
            1000, // how often it should check in milliseconds
            );  
        }
   };

const toggleIntensity = () => {
    try {
    const unlock = lockFn();
    const newIntensity = data.intensity === 'low' ? 'high' : 'low';
    data.intensity = newIntensity;
    html.intensity.display.innerText = newIntensity;
    unlock();
    } catch (error) {
        html.alert.innerText = 
        `Operation could not be performed,since another operation is currently in progress. Please try again in a few seconds.(${error.message})`;

        // a function that takes another function as an argument
        const interval = setInterval(
            () => {
            if (!data.locked) {
                html.alert.innerText = ''
                clearInterval(interval)

            }
        },
        1000, // how often it should check in milliseconds
        ); 
    }

};

html.intensity.button.addEventListener("click", toggleIntensity);
html.mode.button.addEventListener("click", toggleMode);

/**
 * Bc errors bubble we can add an event listener on the window itself which is the entire
 * scope of our browser.
 * 
 * So we can listen for an error.
 */
window.addEventListener('error', () => {
    document.body.innerHTML = /* html */ `
    Something critical went wrong on our side. Please restart and try again.
    If the issue persists please contact support.
    `;
});

html.intensity.display.innerText = data.intensity;
html.mode.display.innerText = data.mode;
data.locked = false;

/** We can toggle intensity as much as we want, but while we're toggling mode there is a period
 * we can't do anyhting until it actually changed
 */ 


/**
 * - We dont want to unwind the entire app, instead we want to do validation
 * - We dont want to throw a full on error, we just want to validate what the user 
 * is trying to do, and let them know what theyre doing is incorrect so they should wait
 * a while or try again, without actually breaking the entire app.
 * 
 * So what we'll do is, intercept this request at the specific scope.
 * So it'll unwind up to a certain point, so it'll stop everything up until the point
 * we intercept it. 
 * So user can use everything else in the app, just that little piece will not be usable
 * 
 * The first scope of the error would be in the lockFn function 
 * So we'll wrap the insides of toggleMode and toggleIntensity in a try catch and use
 * a 'html alert' to make sure the error was caught
 * 
 * Let us have the error go away once the app is no longer locked.
 * We'll add a setInterval
 * It's similar to setTimeout (setTimeout pauses something and runs it after an amount of time )
 * setInterval runs something every certain number of seconds until you tell it to stop
 * 
 * We'll say, if you throw an error, every second after it should check if locked has been
 * resolved. And then if lock has been resolved, it should clear the error.
 * 
 * We place the setInterval in a variable called 'interval'
 * Then we say clearInterval bc once we clear the alert text we no longer want to run it 
 * at an interval. 
 * 
 */






