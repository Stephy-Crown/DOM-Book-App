// NODES
// A node is :::;

// grab an elememt node
const banner = document.querySelector("#page-banner");

console.log("#page-banner node type is:", banner.nodeType);
// nodeType 1 means an ELEMENT NODE:::check w3schools for more indepth knowledge

console.log("#page-banner node type is:", banner.nodeName);
// This returns an element name in this case its a DIV

// Check if the node has a childNode using the hasChildNode() method
console.log("#page-banner has child nodes", banner.hasChildNodes());

// CLONING a node
// if you pass in false, we will just see the only the div, not with the children::nested Node
const clonedBanner = banner.cloneNode(false);
// we pass in true so that it can be able to get the other nodes (children within it)...if we didnt pass in true as a parameter,,, it will only return just the div with page banner and not the childen
console.log(clonedBanner);
