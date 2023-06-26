/* eslint-disable object-shorthand */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
const products = [
    { product: 'banana', price: '2' },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: '8' },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  /**
   * Use `forEach()` to console.log each product name to the console
   */
  products.forEach((item) => console.log(item.product));
  
  /**
   * Use `filter()` to filter out products that have a name longer than 5 characters
   */
  const charFilter = products.filter((item) => item.product.length <= 5);
  
  /**
   * Using both `filter()` and `map()`. Convert all prices that are strings to numbers, and
   * remove all products from the array that do not have prices. After this has been
   * done then use `reduce()` to calculate the combined price of all remaining products.
   */
  const combinedPrice = products
    .filter((item) => item.price !== '' && !isNaN(item.price))
    .map((item) => ({ ...item, price: Number(item.price) }))
    .reduce((total, item) => total + item.price, 0);
  
  /**
   * Use `reduce()` to concatenate all product names to create the following string:
   * banana, mango, potato, avocado, coffee and tea.
   */
  const objToString = products.reduce((str, item, index) => {
    if (index === 0) {
      return item.product;
    } else if (index === products.length - 1) {
      return str + ' and ' + item.product;
    } else {
      return str + ', ' + item.product;
    }
  }, '');
  
  /**
   * Use `reduce()` to calculate both the highest and lowest-priced items.
   * The names should be returned as the following string: Highest: coffee. Lowest: banana.
   */
  const result = products.reduce((acc, item) => {
    const price = Number(item.price);
    if (!isNaN(price)) {
      if (price > acc.highest.price) {
        acc.highest = { product: item.product, price: price };
      }
      if (price < acc.lowest.price || !acc.lowest.price) {
        acc.lowest = { product: item.product, price: price };
      }
    }
    return acc;
  }, { highest: { product: '', price: -Infinity }, lowest: { product: '', price: Infinity } });
  
  const outputResult = `Highest: ${result.highest.product}. Lowest: ${result.lowest.product}.`;
  
  /**
   * Using only `Object.entries` and `reduce()` recreate the object with the exact same values.
   * However, the following object keys should be changed in the new array:
   * product should be changed to name
   * price should be changed to cost
   */
  const modifiedProducts = products.reduce((acc, item) => {
    const modifiedItem = Object.entries(item).reduce((obj, [key, value]) => {
      if (key === 'product') {
        obj.name = value;
      } else if (key === 'price') {
        obj.cost = value;
      } else {
        obj[key] = value;
      }
      return obj;
    }, {});
    acc.push(modifiedItem);
    return acc;
  }, []);
  
  /**
   * Final result logged to the console
   */
  console.log(
    charFilter,
    combinedPrice,
    objToString,
    outputResult,
    modifiedProducts
  );