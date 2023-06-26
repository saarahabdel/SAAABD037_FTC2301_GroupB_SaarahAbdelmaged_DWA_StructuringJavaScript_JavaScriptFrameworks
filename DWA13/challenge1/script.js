/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const provinces = [
    'Western Cape',
    'Gauteng',
    'Northern Cape',
    'Eastern Cape',
    'KwaZulu-Natal',
    'Free State',
  ];
  const names = [
    'Ashwin',
    'Sibongile',
    'Jan-Hendrik',
    'Sifso',
    'Shailen',
    'Frikkie',
  ];
  
  /**
   * Use `forEach()` to console log each name to the console
   */
  names.forEach(console.log)
  
  /**
   * Use `forEach()` to console log each name with a matching province
   */
  const matchingElements = [];
  
  names.forEach((element, index) => {
    if (provinces[index]) {
      matchingElements.push(`${element} (${provinces[index]})`);
    }
  });
  
  console.log(matchingElements);
  
  /**
   * Using `map()`, loop over all province names and turn string to all uppercase. 
   * Log the result to the console.
   */
  provinces.map((province) => console.log(province.toUpperCase()));
  
  /**
   * Create a new array with `map()` that has the amount of characters in each name
   */
  const charAmount = names.map((name) => name.length);
  console.log(charAmount);
  
  /**
   * Using `toSorted()` to sort all provinces alphabetically
   */
  const alphProvince = provinces.toSorted();
  console.log(alphProvince);
  
  /**
   * Use `filter()` to remove all provinces that have 'Cape' in them.
   * After filtering the array, return the amount of provinces left.
   */
  const filterProvince = provinces.filter(
    (province) => !province.includes('Cape')
  );
  console.log(filterProvince);
  
  /**
   * Create a boolean array by using `map()` and `some()` to determine whether 
   * a name contains an 's' character.
   */
  const boolArray = names.map((name) =>
    name.split('').some((charS) => charS.toLowerCase() === 's')
  );
  console.log(boolArray);
  
  /**
   * Using only `reduce()`, turn the above into an object that indicates 
   * the province of an individual
   */
  const toObject = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
  }, {});
  console.log(toObject)