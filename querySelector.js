// QUERYSELECTOR
let wrapper = document.querySelector("#wrapper");
console.log(wrapper);

// to grab an element(li) in the wrapper
const grabElement = document.querySelector("#book-list li:nth-child(2) .name");
console.log(grabElement);

// To grab a span element in the booklist parent element
let books = document.querySelector("#book-list li .name");
console.log(books);

// This returns only one;;;this brings us to querySelectorAll():::This grabs all the span tags with class of 'name'
books = document.querySelectorAll("#book-list li .name");
console.log(books);
// To access each one just like the HTMLCollection
console.log(books[0].outerHTML);
// This returns all the spans in a NODELIST not HTMLCollection

// NOTE::This returns a NodeList which we can use the forEach method on directly without having to convert to an array as in the HTMLCollection
books.forEach((book) => {
  console.log(book);
  // This returns each of the span
});

// Now even if you use this querySelectorAll() method for just an element say 'wrapper' it  still  return a Nodelist [] just like a HTMLCollection
wrapper = document.querySelectorAll("#wrapper");
console.log(wrapper);
