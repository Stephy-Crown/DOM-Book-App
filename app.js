// This is done because we moved the script.js to the head which was working becoz it was at the head, so instead of that, we simply wrapped everything inside of this 'DOMContentLoaded' event which will only run our js file when the DOM content is fulluy loaded.
document.addEventListener("DOMContentLoaded", () => {
  // Previous code from Event bubbling
  const list = document.querySelector("#book-list ul");

  list.addEventListener("click", function (e) {
    // we want to find the target(btn with className of delete)
    if (e.target.className == "delete") {
      // grab the parentElement of the span('li')
      const li = e.target.parentElement;
      // li.parentNode(ul)
      li.parentNode.removeChild(li);
      // OR
      // list.removeChild(li);
    }
  });

  // INTERACTING WITH FORMS
  // trick to query the dom to find form::a way to grb the form elemnts iunside the DOM instread pf the tag or name or id

  // IN THE CONSOLE
  const forms = document.forms;

  // This returns a HTMLCollection and in an HTMLCollection you can access them by their cname, id or index number
  // NodeList can only be accesed by its index number
  console.log(forms);

  // to get one form
  let form = document.forms[0];
  console.log(form);

  // ideally its prefearble to use the 'id' than the the index,becoz this is a HTMLCollection
  form = document.forms["add-book"];
  console.log(form);

  // FUNCTIONALITY FOR ADDING A NEW BOOK TO THE LIST
  // A form and a btn::when we click a btn in a form the form emits a 'submit' event. which we can listen to

  // :;;The default behaviour of the form is to fire the action on the form, submit and refresh the page especially if you dont have an 'action' defiined in your form

  // We will prevent the default behaviour
  const addForm = document.forms["add-book"];
  // NB::we add the event to the form when we click the btn and not the btn on the form

  addForm.addEventListener("submit", function (e) {
    // Default behaviour on submitting the form and refreshing the page
    e.preventDefault();
    // grab the value of what ever the user types into the input field:::we do that by using a 'value' property
    const inputValue = addForm.querySelector('input[type="text"]').value;
    // ensure the "text" is in double quotes "" else it wont work
    console.log(inputValue);
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
    bookName.textContent = inputValue;
    // //This actually adds the textContent but the styles are not included

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    // this is for the ul--we are appending the li of spans inside it
    list.appendChild(li);

    // This wont work as we want,, the elements were created but they were no 'textContent' to them..do this above

    // BRINGS US TO THE NEXT TUTORIAL OF ADD CLASSNAMES

    //ADD/CHANGE STYLES and CLASSES USING JS
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    // TO REMOVE CLASSES WITH STYLES
    // bookName.classList.remove("name");
    // deleteBtn.classList.remove("delete");
  });

  // CHANGE ATTRIBUTES WITH JS
  // How to reach into the DOM and how you read attributes
  // such as the 'class', 'id' or 'href' attributes and how you can change those attributes how you can check if those element has these attributes, or how to remove attributes.

  let book = document.querySelector("li:first-child .name");
  console.log(book);

  // To get attribute
  console.log(book.getAttribute("class"));

  // To set attribute:::This takes in two paremeters, the name of the atribute and what you want to set it too.
  book.setAttribute("class", "name2");
  // This change sthe attributes on the page
  console.log(book);

  // To checkif an element has an attribute
  console.log(book.hasAttribute("class"));

  // To remove attribute
  book.removeAttribute("class");
  console.log(book);

  // CHECK BOX EVENTS & CHANGE EVENTS
  // The'change events' occurs when a form element(for example) changes::;like when we select a check box or radio btn, these elements are changing states and we can react to them by adding a 'change' event listener

  // ADDING FUNCTIONALITY:::when we chweck the checkBox , it will add the books and when we uncheck it, it will display the book

  const hideBook = document.querySelector("#hide");
  console.log(hideBook);

  hideBook.addEventListener("change", (e) => {
    // To check if the checkbox has been changed, we do that by using the '.checked' property on the checkB ox
    hideBook.checked
      ? (list.style.display = "none")
      : (list.style.display = "initial");
    // Initial or block
  });

  //HOW TO CREATE SEARCH FILTER
  // we'll add an event listener to the search input, a 'KEYUP' event which is when we  click a key and release it, this release is the keyup event. Eg when the  type 'a' this is the first keyup event and when he types 'an' this is the second 'keyup' event;; so we want to react to each of this keyup events and react to them.
  //

  // We'll also want to grab the value of the current text that the user inputs in the input fiels and the compares it with any of the book ttles

  const searchBar = document.forms["search-books"].querySelector("input");

  searchBar.addEventListener("keyup", (e) => {
    // grab the search Term the user types in and converts to lower case

    const searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm);
    // Grab all the li and cycle through each one of them and compare it with the searchTerm that the user types in.
    const books = list.getElementsByTagName("li");
    console.log(books);
    // This is an HTMLCollection so we convert to array so we can cycle through each one
    Array.from(books).forEach(function (book) {
      // Grabbing the text of the firstchild of the list(which the span)
      const title = book.firstElementChild.textContent;
      // if check
      // the '.indexOf' gets the index of the 'searchTerm' within the 'title string'::;Iie the position in the string eg typing 'he' the position of this in the 'The wise man's fear' will retyurn '1',, now if the searchTerm doesnt appear in the title string, the indexOf method returns a '-1' indicating that it is not part of the string, so we can hide the title

      // if the searchTerm is NOT EQUAL to -1 meaning its equal to '1' which is means its in the title string,,so we display it as 'block'
      title.toLowerCase().indexOf(searchTerm) != -1
        ? (book.style.display = "block")
        : (book.style.display = "none");

      // ? (book.style.display = "block")
      // : (book.style.display = "none");
    });
  });

  // TABBED CONTENT
  // Grabbing the ul
  const tabs = document.querySelector(".tabs");
  // grabbing the panels and this returns a Nodelist for the two divs withe classNmae of ' panel'
  const panels = document.querySelectorAll(".panel");

  // Addinng the event listener to the ul instead of each of the li because of event.bubbling
  tabs.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.list);
      // cycle through each of panels to  see if its equal to the targetPanel, we give it a class of active so it can show.
      panels.forEach(function (panel) {
        if (panel == targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
