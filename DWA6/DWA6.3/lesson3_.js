import { createUniqueId } from './lesson3.js'

/**
 * @param {string} name - The legal name of the employee as appearing on their ID
 * @return {Employee}
 * 
 */

export createEmployee = (name, company) => {
    const id = createUniqueId()

    return {
        id,
        name,
        company,
        created: new Date(),
    }
}

const createColleague = (name) => createEmployee(name, 'Codespace')

const createInspector = (name) => createEmployee(name, 'South African Government')

createColleague('Schalk Venter');
createColleague('Renzo van Wyk');

createInspector('James Bond');

const createEvent = ({ attendees, title }) => {
    return {
        title,
        attendees,
        date: new Date(),
        completed: false,
    }
}

const event = createEvent({
    title: 'Annual 2051 Inspection',
    attendees: [
        createColleague('Schalk Venter'),
        createColleague('Renzo van Wyk'),
        createInspector('Mr Big Boss'),
    ],
    }  
)






