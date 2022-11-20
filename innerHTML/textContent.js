// CHANGING TEXT AND HTML

// TEXTCONTENT
books = document.querySelectorAll("#book-list li .name");
console.log(books);
books.forEach((book) => {
  console.log(book);
  // This returns each of the span
  console.log(book.textContent);

  // This overwrites our previous textContent of all span string with 'test'

  // book.textContent = "test";
  // console.log((book.textContent = "test"));

  // instead of replacing it completely we can simply append to each textContent using '+=':;::This is how we append something to a string

  book.textContent += " (book title)";
});

// INNERHTML
const bookList = document.querySelector("#book-list");

// TO REPLACE HTML TOTALLY
// bookList.innerHTML = "<h2>Books and more books</h2>";
//This automatically changes the HTML to the h2 element above, it replaces it withthis p html define d above

// if we dont want to replace it we can simply append to it using this
bookList.innerHTML += "<p>This is how you add HTML</p>";
