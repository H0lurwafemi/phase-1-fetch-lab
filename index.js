function fetchBooks() {
Use the fetch() function to make a GET request to the API
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => renderBooks(data)); // Call renderBooks with the JSON data
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



