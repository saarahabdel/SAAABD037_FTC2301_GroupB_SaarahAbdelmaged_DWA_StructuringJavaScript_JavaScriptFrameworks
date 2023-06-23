// OPEN-CLOSED PRINCIPLE AND LISKOV SUBSTITUTION PRINCIPLE

//@ts-check


/**
 *@callback invite
 *@returns {string}
 */

/**
 * - have things share a base interface or base abstraction, when you work with them you dont know which specific one it is. 
 * 
 * @typedef {object} Employee
 * @prop {string} id
 * @prop {string} name
 * @prop {string} company
 * @prop {Date} created 
 * @prop {invite} invite   - returns a string as a response 
 * 
 */

/**
 * @param {string} name - The legal name of the employee as appearing on their ID
 * @returns {Employee}
 */

const createEmployee = (name, company) => {
    const id = new Date().getTime().toString();

    return {
        id,
        name,
        company,
        created: new Date(),
        invite: () => "Not required",   // all employees unless specified otherwise will return not required
    };
};

/**
 * 
 * @param {string} name 
 * @returns {Employee}
 */
const createColleague = (name) => {
    const employee = createEmployee(name, "Codespace");

    employee.invite = () => {
    const answer = window.prompt(`Is ${name} attending?`);

        if (!answer || answer.trim() === '') 
          throw new Error('Answer cannot be empty.')

        return answer;
    }

    return employee;
};    

/**
 * 
 * @param {string} name 
 * @returns {Employee}
 */
const createInspector = (name) => {
    const employee = createEmployee(name, "South African Government");
    employee.invite = () => {
    // send email logic     
        return "Awaiting response";
    }
    return employee;
} 

/**
 * 
 * @param {object} props 
 * @param {string} props.title
 * @param {Array<Employee>} props.attendees   
 * @returns 
 */
const createEvent = (props) => {
    const { attendees, title } = props;
    const response = {};

    for (const { name: attendeeName, invite } of attendees) {
        response[attendeeName] = invite();
    }

    return {
        title,
        attendees,
        date: new Date(),
        completed: false,
        response,
    };
};

const eventInstance = createEvent({
    title: "Annual 2051 Inspection",
    attendees: [
        createColleague("Schalk Venter"),
        createColleague("Renzo van Wyk"),
        createColleague("Bill Gates"),
        createEmployee("John Smith", "Woolworths"),
        createEmployee("Sipho Thambo", "Google")
    ],
}); 

console.log(eventInstance);

// We have a base class that can be used for a regular employee, colleague or an inspector. 
// Bc they all share the base class
// So we code against that base class according to LSP 
