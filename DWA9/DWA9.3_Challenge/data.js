// Ensure that the data.js file exports all it's values. For example:

export const BOOKS_PER_PAGE = 36;

export const authors = {
  '194e164b-9365-4358-b44a-f28a93cc528f': 'Steven D. Levitt',
  // remainder of object...
};

export const genres = {
  'a4f80b3e-3e96-4266-b729-e09b71793182': 'Economics',
  // remainder of object...
};

export const books = [
  {
    id: '760b3450-9c86-42d0-8eff-e793bf823756',
    // remainder of object...
  },
];

export const html = {
  header: {
    search: document.querySelector('[data-header-search]'),
    settings: document.querySelector('[data-header-settings]'),
  },
  list: {
    items: document.querySelector('[data-list-items]'),
    message: document.querySelector('[data-list-message]'),
    button: document.querySelector('[data-list-button]'),
    active: document.querySelector('[data-list-active]'),
    blur: document.querySelector('[data-list-blur]'),
    image: document.querySelector('[data-list-image]'),
    title: document.querySelector('[data-list-title]'),
    subtitle: document.querySelector('[data-list-subtitle]'),
    description: document.querySelector('[data-list-description]'),
    close: document.querySelector('[data-list-close]'),
  },
  search: {
    overlay: document.querySelector('[data-search-overlay]'),
    form: document.querySelector('[data-search-form]'),
    title: document.querySelector('[data-search-title]'),
    genres: document.querySelector('[data-search-genres]'),
    authors: document.querySelector('[data-search-authors]'),
    cancel: document.querySelector('[data-search-cancel]'),
  },
  settings: {
    overlay: document.querySelector('[data-settings-overlay]'),
    form: document.querySelector('[data-settings-form]'),
    theme: document.querySelector('[data-settings-theme]'),
    cancel: document.querySelector('[data-settings-cancel]'),
  },
};