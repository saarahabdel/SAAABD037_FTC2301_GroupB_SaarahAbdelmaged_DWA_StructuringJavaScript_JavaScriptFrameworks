const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again.';
  } else if (dividend < 0 || divider < 0) {
    const error = new Error('Division not performed. Invalid number provided. Try again.');
    console.log(error);
    result.innerText = error;
  } else if (isNaN(dividend) || isNaN(divider)) {
    const criticalError = new Error('Something critical went wrong. Please reload page.');
    const bodyHTML = document.querySelector('body')
    console.log(criticalError);
    bodyHTML.innerText = criticalError;
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});



