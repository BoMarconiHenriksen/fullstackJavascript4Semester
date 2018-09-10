// Ex. 2.

odds1 = evens.map(v => v + 1);
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
nums = evens.map((v, i) => v + i);

// Hvorfor virker dette ikke?
// Deklarationen var odds2 hoistes, og flyttes op i toppen af filen. Initialisering bliver nede.
// Giver en type error.
var odds2 = evens.map(v => v + 1);

// Fix this:
var odds = evens.map(v => {
  v + 1;
});

odds = evens.map(v => {
  v + 1;
});
