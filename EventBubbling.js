// EVENT BUBBLING
// This is slightly advanced::it is bubbling of an event.

// in the preveious events tutorial we added an event listener to the each button(span with name)and listened for the click event.

// Event bubbling will occur when we click on the button without us necesarily knowing:::it always occurs unless you prevent it
//  the event on the span (btn) bubbles up to the parent which is the 'li' tag:::;in the same way if we add an event listener to the 'li tag, it will also bubble up to the parent which is the 'ul'

// the event bubbles up from the TARGET element all the way up to the parent element

// The event js way we did it isnt a good one basically for two reasons

// ::If we are to add another li to the ul ,it doesnt delete because we added the event listener to the span name(btn)
// ::: if we have like multiple of these btns it will quite difficult to add event listener to each one of them.This takes a longer time and is quite difficult for js to do

// IDEALLY:::we could do this, attach event listener
// to the 'ul' which is one element so the event on the btn will bubble up to the 'ul'
// then we can find out which 'target'(which btn) ,then we can delete the 'li'(associated with the btn::::as event will bubble from the btn to the parent(li) and then the li will bubble up to the (ul),,,this way it is easier to know which btn is clicked and then remove the li), the btn which was originally clicked and then can delete it.

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
// This works like the previous event.js but even better becoz when we add a book we can be able to delete it unlike the event,].js wher e we cant delete a book that we added

// This is because the event is associated with the 'ul' and not the btn this time around, and it finds the source(target) element
