//map
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//    Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(" ").join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}

console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(" ").length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(" ").length === 1);
}

console.log(functionalSingles(states));


function functionalDoubles(elements) {
  return elements.filter(element => element.includes("Dakota"))
}

// exercise 6.2.1
// console.log(states.filter(element => element.includes("Dakota")));

// console.log(states.filter(element => element.split(/\s+/).length === 2));

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}

console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  // return elements.reduce((total, n) => { return total += n; }, 0); // if the count starts at 0, there is no need to display it since that's the default in reduce function.
  return elements.reduce((total, n) => { return total += n; });
}

console.log(functionalSum(numbers));

// Lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}

console.log(imperativeLengths(states));

// Lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { 
                            lengths[element] = element.length;
                            return lengths;
                          }, {}); // since lengths starts as an empty hash, we need to add it.
}

console.log(functionalLengths(states));

// exercise 6.3.4
// Using reduce, write a function that returns the product of all the elements in an array. Hint: Where += adds, *= multiplies.
function functionalProduct(elements) {
  return elements.reduce((product, element) => { return product *= element; });
}

console.log(functionalProduct(numbers));
