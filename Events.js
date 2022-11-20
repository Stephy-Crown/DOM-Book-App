// EVENTS
// grabbing the h2 inside the booklist class
let h2 = document.querySelector("#book-list h2");

// add a click event
h2.addEventListener("click", function (e) {
  // To get the target element
  console.log(e.target);
  console.log(e.shiftKey);
  console.log(e);
});

// TO ADD EVENT LISTENERS TO THE delete buttons on our book list App
let buttons = document.querySelectorAll("#book-list .delete");
console.log(buttons);
// This returns a NODELIST which is like an array and we can use forEach method directly on it and not converting it to an array as in HTMLcollection

// So we have to loop through the Nodelist just as in array and return each element
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // Remove the li tag which contains the delete button that is the each  book
    // e.target::grab the exact delete btn that was clicked,,,,,The parentNode or parentElement is the li
    const li = e.target.parentNode;
    console.log(li);

    // Now that we have a hold of the li(parentNode); we want to delete the li

    // to remove anything in JS we use this method::parent.removeChild(anything we want to remove)
    // in this case is the li we want to remove

    // li.parentNode=parent of the li which is the'ul'
    li.parentNode.removeChild(li);
  });
});

// TThe preventDefault method
// The default behave for a link is th go to the particular place it ought to, or a form to submit when you press ElementInternals. but in this case we are preventing the default mode and then giving it our own rules to follow not the default

const link = document.querySelector("#page-banner a");

link.addEventListener("click", function (e) {
  // Prevent theaction(navigation ) is prevented.
  e.preventDefault();
  // e,target is the 'a tag' and the text content is 'the the net ninja'
  console.log("navigation to", e.target.textContent, "was prevented");
});
