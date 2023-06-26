/**
 * The initial state of the application
 * 
 * @typedef {Object} InitialState
 * @property {number} count - The count value
 */

/**
 * The action type for the reducer
 * 
 * @typedef {('ADD' | 'SUBTRACT' | 'RESET')} ActionType
 */

/**
 * The reducer function that handles state updates.
 *
 * @typedef {function} Reducer
 * @param {InitialState} state 
 * @param {Object} action 
 * @param {ActionType} action.type
 * @returns {InitialState} 
 */

/**
 * The store object that holds the state and manages state updates.
 *
 * @typedef {Object} Store
 * @property {InitialState} state 
 * @property {Array<function>} listeners 
 * @property {function} getState 
 * @property {function} dispatch 
 * @property {function} subscribe
 */

/**
 * Initialises the HTML elements used in the application
 * 
 * @type {HtmlElements}
 */
const html = {
    header: {
      settings: document.querySelector('[data-header-settings]'),
    },
    settings: {
      overlay: document.querySelector('[data-settings-overlay]'),
      form: document.querySelector('[data-settings-form]'),
    },
    key: {
      number: document.querySelector('[data-key="number"]'),
      subtract: document.querySelector('[data-key="subtract"]'),
      add: document.querySelector('[data-key="add"]'),
      reset: document.querySelector('[data-key="reset"]'),
    },
    reset: {
      overlay: document.querySelector('[data-reset-overlay]'),
    },
  };
  
  /**
   * The initial state of the application
   * 
   * @type {InitialState}
   */
  const initialState = {
    count: 0,
  };
  
  /**
   * The reducer function that handles state updates
   * 
   * @type {Reducer} 
   */
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return {
          count: state.count + 1,
        };
      case 'SUBTRACT':
        return {
          count: state.count - 1,
        };
      case 'RESET':
        return {
          count: 0,
        };
      default:
        return state;
    }
  }
  
  /**
   * The store object that holds the state and manages state updates
   * 
   * @type {Store}
   */
  const store = {
    state: initialState,
    listeners: [],
    /**
     * Gets the current state
     * @returns {InitialState}
     */
    getState() {
      return this.state;
    },
    /**
     * Dispatches an action and updates the state
     * @param {Object} action 
     */
    dispatch(action) {
      this.state = reducer(this.state, action);
      this.listeners.forEach((listener) => listener(this.state));
    },
    /**
     * Subscribes a listener function to the store for state changes
     * @param {function} listener 
     */
    subscribe(listener) {
      this.listeners.push(listener);
    },
  };
  
  /**
   * Logs the new state to the console
   * @param {InitialState} state
   */
  store.subscribe((state) => {
    // eslint-disable-next-line no-console
    console.log('New state:', state);
  });
  
  /**
   * Event listener for the subtract key
   */
  html.key.subtract.addEventListener('click', () => {
    store.dispatch({ type: 'SUBTRACT' });
  });
  
  /**
   * Event listener for the add key
   */
  html.key.add.addEventListener('click', () => {
    store.dispatch({ type: 'ADD' });
  });
  
  /**
   * Event listener for the reset key
   */
  html.key.reset.addEventListener('click', () => {
    store.dispatch({ type: 'RESET' });
  });