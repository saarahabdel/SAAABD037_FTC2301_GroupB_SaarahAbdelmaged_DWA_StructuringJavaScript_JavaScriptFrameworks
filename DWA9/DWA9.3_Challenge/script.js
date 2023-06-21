// eslint-disable-next-line
import { books, authors, genres, BOOKS_PER_PAGE, html } from './data.js';
// eslint-disable-next-line
import BookPreview from './class.js';

const bookPreview = new BookPreview()

html.list.items.addEventListener('click', (event) => {
    bookPreview.bookPreviewShow(event);
});