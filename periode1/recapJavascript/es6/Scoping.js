// http://es6-features.org/#BlockScopedVariables

// Ex. 1.
// Variablerne x, i og y hoistes ikke, da de alle er deklereret med let, der har block scope.
// Det er kun var, der hoistes.
// Når let bruges i det global scope laver de ikke en property på det globale objekt.
for (let i = 0; i < a.length; i++) {
    let x = a[i]
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4

// Block-scoped function definitions.
// Bruges i stedet for en Effy(expression).

{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}
