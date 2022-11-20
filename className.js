// Get Element by ClassName or TagName
let titles = document.getElementsByClassName("title");
console.log(titles);

// This returns a HTMLCollection which is just like an ARRAY but isnt an ARRAY::::The HTMLCollection has indexes just like an array so to reach to each of its elements, like the first h1 in the collection, we use

// let hOne = titles[0];
console.log(titles[0]);

// BY TAGNAME
// to get every single li
let list = document.getElementsByTagName("li");
console.log(list);
// to access each one
const li = list[2];
console.log(li);
console.log(list[2]);
console.log(list[0].innerHTML);

// for loop
// lets say we are querying the dom for some elements(many elemnts with same name) and want to style them in a particular way in js:::we need to grab each elememnt in the HTMLCollection, so for this we either use forLOOP or forEACH to access each one of the HTMLCollection ELEMENTS
for (i = 0; i < titles.length; i++) {
  console.log(titles[i]);
  console.log(titles.length);
}

// SECOND WAY TO LOOP THROUGH
// titles.forEach((element) => {
//   console.log(element);
//   // this returns an error becos it is not an array
// });

//LETS CHECK if its an array
console.log(Array.isArray(titles));
// returns a boolean which is false telling you that HTMLCollection is NOT Array

// But csn br converted to an Array with Array.from() method
const convertToArray = Array.from(titles);

// console.log(Array.isArray(Array.from(titles)));
// This then returna array which we can now loop through to access each one
console.log(Array.isArray(convertToArray));

convertToArray.forEach((element) => {
  console.log(element);
  // This returns each of the elements with className 'title' which is the h1 and h2 elememts
});

// Therfore ClassName and tagName returns an HTML collection which is similar to an array but not an array...it has to be converted to an array in order to use the forEach() method as seen above
