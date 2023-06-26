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
    overlay: document.querySelector('[data-reset-overlay]')
  }
};

html.header.settings.addEventListener('click', () => {
  html.settings.overlay.show();
});

/**
 * Switch between dark and light themes
 */
html.settings.form.addEventListener('submit', (event) => {
  event.preventDefault()
  const themeSelect = document.querySelector('.settings-theme')
  const selectedTheme = themeSelect.value

  if (!selectedTheme === 'dark') {
    document.documentElement.classList.remove('sl-theme-light');
    document.documentElement.classList.add('sl-theme-dark');
  } 
  
  if (!selectedTheme === 'light') {
    document.documentElement.classList.remove('sl-theme-dark');
    document.documentElement.classList.add('sl-theme-light');
  }

  html.settings.overlay.hide();
});

/**
 * Increment or Decrement
 */
html.key.subtract.addEventListener('click', () => {
  const newValue = parseInt((html.key.number.value), 10)- 1;
  html.key.number.value = newValue;
});

html.key.add.addEventListener('click', () => {
  const newValue = parseInt((html.key.number.value), 10) + 1;
  html.key.number.value = newValue;
});

/**
 * Reset the Tally App
 */
html.key.reset.addEventListener('click', () => {
  html.key.number.value = 0;

  html.reset.overlay.show();
});