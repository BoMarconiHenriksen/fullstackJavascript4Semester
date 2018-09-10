// Static types.
var burger = "hamburger", // String
calories = 300, // Numeric
tasty = true; // Boolean
function speak(food, energy) {
    console.log('our ' + food + ' has ' + energy + ' calories');
}
speak(burger, calories);
// Vi definer et objekt, som har all properties af food som interfacet forventer.
// Vær opmærksom på at types udledes automatisk.
var ice_cream = {
    ame: "ice cream",
    calories: 200
};
speak(ice_cream);
