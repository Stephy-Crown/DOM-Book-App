// CREATING NEW ELEMENTS
// Here we want to grab the inputValue of the user and then use it so we can add a new element (li) to the booklist

// To do thsi we'll be creating a HTML element via our JS and insert it into the DOM

// we have to look at what we want to create, like the HTML and the create each element
const li = document.createElement("li");
const bookName = document.createElement("span");
const deleteBtn = document.createElement("span");

//  After creating the elements, we will APPEND them to where they shld be in the HTML

// Add textContent
deleteBtn.textContent = "delete";
bookName.textContent = value;
// //This actually adds the textContent but the styles are not included

li.appendChild(bookName);
li.appendChild(deleteBtn);
// this is for the ul--we are appending the li of spans inside it
list.appendChild(li);

// This wont work as we want,, the elements were created but they were no 'textContent' to them..do this above
