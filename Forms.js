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
});
