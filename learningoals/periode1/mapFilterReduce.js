// Explain the methods map, filter and reduce
// Map - Tilføjer noget til hvert element i et array.
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Allan", "Ib"];

var uppercasedNames = names.map(function(uppercasedName) {
  return uppercasedName.toUpperCase();
});

// console.log(uppercasedNames);


// Filter - Returner et nyt array med de elementer, der er true.
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Allan", "Ib"];

var lessThanThree = names.filter(function(name) {
  return name.length <= 3;
});

// console.log("Normal filter method: " + lessThanThree);


// Reduce
let numbers = [2, 3, 67, 33];

// Retur værdien gemmes i en akkumulator som her er total.
function getSum(total, number) {
  return total + number;
};

// console.log("Reduce funktion, der lægger tal sammen: " + numbers.reduce(getSum));
























// Reduce tæller her antallet af stemmer.
var votes = [ "Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None" ];

// Kalder callback funktionen mod hvert element.
// Retur værdien af callbacken er det akkumulerede resultat(allVotes).
// Det akkumulerede resultat bliver brugt som argument næste gang callback funktionen kaldes.
// Værdien huskes for hver iteration.
/* var countedNames = votes.reduce(function(allVotes, vote) {
  if (vote in allVotes) {
    allVotes[vote]++;
  } else {
    allVotes[vote] = 1;
  }
  return allVotes;
}, {}); */ // Returner et objekt med allVotes.

// console.log(countedNames);
