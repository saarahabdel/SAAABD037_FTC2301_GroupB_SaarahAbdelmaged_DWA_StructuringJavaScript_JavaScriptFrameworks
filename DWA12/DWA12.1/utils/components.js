import { subscribe, State } from '../model/store.js'

/** CREATING A UI FRAMEWORK
- utils arent specific to a piece of the app but are tools that help
us build our app as we go

- creating our own JavaScript framework below
*/

/**
 * @callback Handler
 * @param {Event | CustomEvent} event 
 */

/**
 * @callback Connect
 * @param {State} prev
 * @param {State} next 
 */

/**
 * @typedef {Object} Props
 * @prop {string} element
 * @prop {string} template
 * @prop {Record<string, Handler>} [events]
 * @prop {Connect} [connect] - creates a subscriber for our store 
 */

/**
 * @param {Props} props 
 */
export const createComponent = (props) => {
    const { element, template: templateString, events, connect } = props
    if (!element.includes("-")) {
        throw new Error("Element name must include a hypen"); 
    }

    const template = document.createElement("template");
    template.innerHTML = templateString;

    class Component extends HTMLElement{
        #inner = this.attachShadow( { mode: "closed" });
        #unsubscribe = null;
        constructor() {
            super(); // super calls the constructor on the thing we're extending  
            const node = template.content.cloneNode(true);
            this.#inner.appendChild(node);
        }

        connectedCallback() {
            if (events) {
                Object.entries(events).forEach(([key, handler]) => {
                    this.#inner.addEventListener(key, handler);
                })
            } 

            if (connect) {
                this.#unsubscribe = subscribe(connect);
            }
        }

        disconnectedCallback() {
            
        }
    }

    customElements.define(element, Component);
    return Component;
}