// REST PARAEMTERS
// Du kan tildele resten af variablerne til ...rest. Returners som array.
[a, b] = [10, 20];

// console.log(a); // 10

// console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50]; // Her tildeles 30, 40 og 50 til rest(ingen seperat navn).
c = [a, b, ...rest] 
d = [...rest]

// console.log(rest); // [30,40,50]
// console.log(c); // [ 10, 20, 30, 40, 50 ]
// console.log(d); // [ 30, 40, 50 ] 

// Du kan kalde metoder på rest f.eks. map metoden.
let liArray = rest.map( number => "<li>" + number + "</li>"  ); 
// console.log(liArray); // [ '<li>30</li>', '<li>40</li>', '<li>50</li>' ]
