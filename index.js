

const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

append.push("Odie");  // destructivly adds elements to the end of an array
prepend.unshift("Odie"); // destructivly adds elements to the start of an array
removeLast.pop(); // removing From the End of an Array ( destructive)
removeFirst.shift(); // remove an element from the beginning of an array (destructive)