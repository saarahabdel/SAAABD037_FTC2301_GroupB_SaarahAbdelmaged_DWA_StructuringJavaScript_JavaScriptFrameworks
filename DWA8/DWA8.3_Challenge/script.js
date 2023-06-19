// eslint-disable-next-line
import { books, authors, genres, BOOKS_PER_PAGE, html } from './data.js';

/**
 * CODE BEFORE ENCAPSULATION
 */

// html.list.items.addEventListener("click", (event) => {
//     html.list.active.showModal();
//     const pathArray = Array.from(event.path || event.composedPath());
//     let active;

//     for (const node of pathArray) {
//       if (active) break;
//       const id = node?.dataset?.preview;

//       for (const singleBook of books) {
//         if (singleBook.id === id) {
//           active = singleBook;
//           break;
//         }
//       }
//     }

//     if (!active) return;
//     html.list.image.src = active.image;
//     html.list.blur.src = active.image;
//     html.list.title.textContent = active.title;
//     html.list.subtitle.textContent = `${authors[active.author]} (${new Date(
//       active.published
//     ).getFullYear()})`;
//     html.list.description.textContent = active.description;
//   });

/**
 * CODE AFTER ENCAPSULATION
 */

const bookPreview = (event) => {
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
};

html.list.items.addEventListener('click', bookPreview);