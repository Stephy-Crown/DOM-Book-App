// TRANSVERSING THE DOM

//ACCESSING PARENT NODE
const bookList = document.querySelector("#book-list");

// These two methods returns the same thing the parent of the booklist div
// Parent of the booklist is the '#wrapper'
console.log("the parent node is:", bookList.parentNode);

// returns same thing as above
console.log("the parent node is:", bookList.parentElement);

// returns the parent of the header which is the body tag
console.log("the parent node is:", bookList.parentElement.parentNode);

// Returns the gransparent/header's parent of the booklist parent which is the BODY
console.log("the parent node is:", bookList.parentElement.parentElement);

// ACCESSING THE CHILDNODES
console.log(bookList.childNodes);
// this return the childnodes of the booklist(NodeList) but with the line breaks, which is the('text' we see), so in order to get the specific childern we do this,,when we dont want to grab the linebreaks below

console.log(bookList.children);
// THis returns a htmlcollection...when we want to get the child Elements of the above which returns just the child Elements

// PART TWO

// TRANSVERSING THE DOM BETWEEN SIBLINGS...ELEMENTS IN THE SAME LEVEL

// NextSibling

console.log("book-list next sibling is:", bookList.nextSibling);
// Thius returns the line breaks as we have seen above...so in order to get the direct next sibling we use 'nextElementSibling'

console.log("book-list next sibling is:", bookList.nextElementSibling);

// Same for peviousSibling
console.log("book-list next sibling is:", bookList.previousSibling);
console.log("book-list next sibling is:", bookList.previousElementSibling);
// This returns the header and then we want to grab the p tag and append a text to it

// Getting the previousSlibing element and grabbing the 'p tag' and then changing the innerHTML of the p tag
bookList.previousElementSibling.querySelector("p").innerHTML +=
  "<br/>Too cool for everyone else!";
