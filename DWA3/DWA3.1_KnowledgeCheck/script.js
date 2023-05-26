// @ts-check

/**
   * @typedef {Object} response
   * @property {string} requestType
   * @property {string} requestBy
   * @property {string} forDisplay
   * @property {Object} data
   */

  /**
   * @typedef {Object} data
   * @property {Object} NM372
   * @property {Object} SV782
   * 
   */

  /**
   * @typedef {Object} NM372
   * @property {string} firstName
   * @property {string} surname
   * @property {string} id
   * @property {array} races
   */

  /**
   * @typedef {Object} SV782
   * @property {string} firstName
   * @property {string} surname
   * @property {string} id
   * @property {array} races
   */

  /**
   * @typedef {array} races 
   * @property {Date} date 
   * @property {Object} time
   */



/**
 * @type {array} - An array containing the months of the year.
 * @property {string} - Each month of the year is a string.
 */
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  

/**
 * @type {Object} Data
 * @property {Object} response 
 */  
  const Data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
/**
 * Creates an HTML fragment for an athlete.
 * @param {string} athlete - The athlete's ID.
 * @returns {DocumentFragment} The HTML fragment.
 * 
 */
  const createHtml = (athlete) => {
      const { firstName, surname, id, races } = Data.response.data[athlete]
      races.reverse()
      const date = new Date(races[0].date)
      const time = races[0].time
  
      const fragment = document.createDocumentFragment();
  
      const title = document.createElement("h2"); 
  
      title.textContent = Data.response.data[athlete].id
  
      fragment.appendChild(title);
  
      const list = document.createElement("dl"); 
    
  
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "short"} )
      const year = date.getFullYear(); 
  
      const [first, second, third, fourth] = time; //destructuring expression
      let total = first + second + third + fourth;
  
      const hours = Math.floor(total / 60);
      const minutes = (total%60)
  
      /**
       * seperated <dd>${firstName surname}</dd>  --- interpolation
       * added length property to <dd>${races}</dd>
       * seperated <dd>${day month year}</dd>  --- interpolation
       */
  
      list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
      
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, 0)}:${minutes}</dd>
      `
      ;
  
      fragment.appendChild(list);
      return fragment
  }

  const NM372 = document.querySelector('section[data-athlete="NM372"]')
  const SV782 = document.querySelector('section[data-athlete="SV782"]')

  NM372?.appendChild(createHtml('NM372'));
  SV782?.appendChild(createHtml('SV782'));
  

