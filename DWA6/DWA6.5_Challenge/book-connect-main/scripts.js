// eslint-disable-next-line
import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";

/**
 * Object that contains reference to all the HTML elements used. 
 * 
 * @typedef {Object} HtmlElements
 */
const html = {
  header: {
    search: document.querySelector("[data-header-search]"),
    settings: document.querySelector("[data-header-settings]"),
  },
  list: {
    items: document.querySelector("[data-list-items]"),
    message: document.querySelector("[data-list-message]"),
    button: document.querySelector("[data-list-button]"),
    active: document.querySelector("[data-list-active]"),
    blur: document.querySelector("[data-list-blur]"),
    image: document.querySelector("[data-list-image]"),
    title: document.querySelector("[data-list-title]"),
    subtitle: document.querySelector("[data-list-subtitle]"),
    description: document.querySelector("[data-list-description]"),
    close: document.querySelector("[data-list-close]"),
  },
  search: {
    overlay: document.querySelector("[data-search-overlay]"),
    form: document.querySelector("[data-search-form]"),
    title: document.querySelector("[data-search-title]"),
    genres: document.querySelector("[data-search-genres]"),
    authors: document.querySelector("[data-search-authors]"),
    cancel: document.querySelector("[data-search-cancel]"),
  },
  settings: {
    overlay: document.querySelector("[data-settings-overlay]"),
    form: document.querySelector("[data-settings-form]"),
    theme: document.querySelector("[data-settings-theme]"),
    cancel: document.querySelector("[data-settings-cancel]"),
  },
};

/**
 * PREVIEW BOOKS
 * This code is implementing a "Show More" feature for a list of books.
 * It initially displays 36 book previews on a page, and then when the
 * user clicks "Show More" button, it displays the next 36 books
 */
const matches = books
let page = 1;
const range = [0, BOOKS_PER_PAGE];

if (!books && !Array.isArray(books)) {
  throw new Error("Source required");
}

if (!range && range.length === 2) {
  throw new Error("Range must be an array with two numbers");
}

/**
 * The createPreview() function takes a book preview object and returns
 * a button element containing the book preview information in HTML form
 */
function createPreview(preview) {
  const { author: authorId, id, image, title } = preview;

  const showPreview = document.createElement("button");
  showPreview.classList = "preview";
  showPreview.setAttribute("data-preview", id);

  showPreview.innerHTML = /* html */ `
        <img
            class="preview__image"
            src="${image}"
        />

        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[authorId]}</div>
        </div>
    `;

  return showPreview;
}

const startIndex = (page - 1) * BOOKS_PER_PAGE;
const endIndex = startIndex + BOOKS_PER_PAGE;

const bookFragment = document.createDocumentFragment();
const bookExtracted = books.slice(startIndex, endIndex);

/**
 * This loop iterates over the book previews to display on the current page,
 * creates a book preview button using the createPreview function, and
 * appends the button to the bookFragment container
 */
for (const preview of bookExtracted) {
  const showPreview = createPreview(preview);
  bookFragment.appendChild(showPreview);
}

html.list.items.appendChild(bookFragment);

/**
 * This sets up a click event listener for the "Show More" button. When clicked,
 * the code executes the logic to display the next set of book previews.
 */
html.list.button.addEventListener("click", () => {
  page += 1;

  const newStartIndex = (page - 1) * BOOKS_PER_PAGE;
  const newEndIndex = newStartIndex + BOOKS_PER_PAGE;

  const newBookExtracted = books.slice(newStartIndex, newEndIndex);

  const newBookFragment = document.createDocumentFragment();

  for (const preview of newBookExtracted) {
    const showPreview = createPreview(preview);
    newBookFragment.appendChild(showPreview);
  }

  html.list.items.appendChild(newBookFragment);

  const remaining = matches.length - page * BOOKS_PER_PAGE;
  html.list.button.innerHTML = /* HTML */ `
    <span>Show more</span>
    <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
  `;

  html.list.button.disabled = remaining <= 0;
});

html.list.button.innerHTML =
  /* HTML */
  `<span>Show more</span>
    <span class="list__remaining">
      (${matches.length - [page * BOOKS_PER_PAGE] > 0
        ? matches.length - [page * BOOKS_PER_PAGE]
        : 0})</span
    > `;

/**
 *  When dataListItems is clicked, it shows a modal by invoking showModal() on dataListActive.
 */
html.list.items.addEventListener("click", (event) => {
  html.list.active.showModal();
  const pathArray = Array.from(event.path || event.composedPath());
  let active;

  for (const node of pathArray) {
    if (active) break;
    const id = node?.dataset?.preview;

    for (const singleBook of books) {
      if (singleBook.id === id) {
        active = singleBook;
        break;
      }
    }
  }

  if (!active) return;
  html.list.image.src = active.image;
  html.list.blur.src = active.image;
  html.list.title.textContent = active.title;
  html.list.subtitle.textContent = `${authors[active.author]} (${new Date(
    active.published
  ).getFullYear()})`;
  html.list.description.textContent = active.description;
});

/**
 * When dataListClose is clicked, it closes the modal by invoking close() on dataListActive.
 */
html.list.close.addEventListener("click", () => {
  html.list.active.close();
});

/**
 * GENRES AND AUTHORS
 * This code creates a document fragment for each 'genres' and 'authors'.
 * It sets the value of the option to "any" and the inner text to "All Genres" and "All Authors"
 * respectively. It then loops through an object and creates an option element for each entry,
 * setting the value to the entry's key and the inner text to its value.
 * These option elements are added to the fragment, and the fragment is then
 * appended to a dataSearchGenres element and dataSearchAuthors element.
 */

/**
 * When dataHeaderSearch is clicked, it shows a modal by invoking showModal() on dataSearchOverlay
 */
html.header.search.addEventListener("click", () => {
  html.search.overlay.showModal();
  html.search.title.focus();
});

/**
 * When dataSearchCancel is clicked, it closes modal by invoking close() on dataSearchOverlay
 */
html.search.cancel.addEventListener("click", () => {
  html.search.overlay.close();
});

const genresFragment = document.createDocumentFragment();
const genreElement = document.createElement("option");
genreElement.value = "any";
genreElement.innerText = "All Genres";
genresFragment.appendChild(genreElement);

for (const [id] of Object.entries(genres)) {
  genreElement.value = id;
  genreElement.innerText = genres[id];
  genresFragment.appendChild(genreElement);
}

html.search.genres.appendChild(genresFragment);

const authorsFragment = document.createDocumentFragment();
const authorsElement = document.createElement("option");
authorsElement.value = "any";
authorsElement.innerText = "All Authors";
authorsFragment.appendChild(authorsElement);

for (const [id] of Object.entries(authors)) {
  authorsElement.value = id;
  authorsElement.innerText = authors[id];
  authorsFragment.appendChild(authorsElement);
}

html.search.authors.appendChild(authorsFragment);

/**
 * FILTER BOOKS BY TITLE, GENRE AND AUTHOR
 * This code sets an event listener for a search form element, dataSearchForm.
 * When the form is submitted, the event listener prevents the default form
 * submission behavior and instead executes a search using the provided form data.
 */

html.search.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  /**
   * The for loop checks if any of the filters matches with the books and
   * if its true the book gets pushed to the result array .
   */
  for (const book of books) {
    const titleMatch =
      filters.title.trim() !== "" &&
      book.title.toLowerCase().includes(filters.title.toLowerCase());
    const genreMatch =
      filters.genre !== "any" && book.genres.includes(filters.genre);
    const authorMatch =
      filters.author !== "any" && book.author.includes(filters.author);

    if (titleMatch || authorMatch || genreMatch) {
      result.push(book);
    }
  }

//   let page = 1;
  /**
   * This if statement checks the result array and the result length is equal to 0 none
   * of the books will be displayed and the "Show More" button will be disabled. Else if
   * the result length is not equal to 0, the list of previews are created and displayed
   * on the page.
   */
  if (result.length === 0) {
    html.list.items.innerHTML = "";
    html.list.button.disabled = true;
    html.list.message.classList.add("list__message_show");

    const remaining = result.length - page * BOOKS_PER_PAGE;
    html.list.button.innerHTML = /* HTML */ `
      <span>Show more</span>
      <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
    `;
  } else {
    html.list.message.classList.remove("list__message_show");
    html.list.items.innerHTML = "";

    const searchStartIndex = (page - 1) * BOOKS_PER_PAGE;
    const searchEndIndex = searchStartIndex + BOOKS_PER_PAGE;

    const searchBookFragment = document.createDocumentFragment();
    const searchBookExtracted = result.slice(searchStartIndex, searchEndIndex);

    /**
     * This loop iterates over the book previews to display on the current page,
     * creates a book preview button using the createPreview function, and
     * appends the button to the bookFragment container
     */
    for (const preview of searchBookExtracted) {
      const showPreview = createPreview(preview);
      searchBookFragment.appendChild(showPreview);
    }

    html.list.items.appendChild(searchBookFragment);

    const remaining = result.length - page * BOOKS_PER_PAGE;
    html.list.button.innerHTML = /* HTML */ `
      <span>Show more</span>
      <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
    `;

    html.list.button.disabled = remaining <= 0;

    /**
     * This sets up a click event listener for the "Show More" button. When clicked,
     * the code executes the logic to display the next set of book previews.
     */
    html.list.button.addEventListener("click", () => {
      page += 1;

      const moreSearchStartIndex = (page - 1) * BOOKS_PER_PAGE;
      const moreSearchEndIndex = moreSearchStartIndex + BOOKS_PER_PAGE;

      const moreSearchBookExtracted = result.slice(
        moreSearchStartIndex,
        moreSearchEndIndex
      );

      const moreSearchBookFragment = document.createDocumentFragment();

      for (const preview of moreSearchBookExtracted) {
        const showPreview = createPreview(preview);
        moreSearchBookFragment.appendChild(showPreview);
      }

      html.list.items.appendChild(moreSearchBookFragment);

      html.list.button.innerHTML = /* HTML */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
      `;

      html.list.button.disabled = remaining <= 0;
    });
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  html.search.overlay.close();
  html.search.form.reset();
});

/**
 * THEME SELECT
 * This code sets up event listeners and handles form submissions for a
 * data settings overlay. When the header for the overlay is clicked, the
 * overlay is shown. When the cancel button is clicked, the overlay is closed.
 */

html.header.settings.addEventListener("click", () => {
  html.settings.overlay.showModal();
});

html.settings.cancel.addEventListener("click", () => {
  html.settings.overlay.close();
});

/**
 * The css object defines two themes, 'day' and 'night'
 */
const css = {
  day: ["255, 255, 255", "10, 10, 20"],
  night: ["10, 10, 20", "255, 255, 255"],
};

/**
 * The value of the dataSettingsTheme input is determined based on whether the 
 * user's preferred color scheme is dark or not.
 */
html.settings.theme.value =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "night"
    : "day";

/**
 * This code sets up for a submit event listener. When the form is submitted, the selected
 * object is created by converting the form data to an object using Object.fromEntries().
 * Depending on the theme selected, the --color-light and --color-dark CSS variables are
 * updated with the corresponding light and dark color values from the css object
 */
html.settings.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formSubmit = new FormData(event.target);
  const selected = Object.fromEntries(formSubmit);

  if (selected.theme === "night") {
    document.documentElement.style.setProperty(
      "--color-light",
      css[selected.theme][0]
    );
    document.documentElement.style.setProperty(
      "--color-dark",
      css[selected.theme][1]
    );
  } else if (selected.theme === "day") {
    document.documentElement.style.setProperty(
      "--color-light",
      css[selected.theme][0]
    );
    document.documentElement.style.setProperty(
      "--color-dark",
      css[selected.theme][1]
    );
  }

  html.settings.overlay.close();
});