const fetch = require("node-fetch");

// Serial - Et fetch ad gangen.
async function serial(count) {
    swappiPeople = [];
    for (let i = 1; i < count; i++) {
        swappiPeople.push(
            //Observe the await 
            //Det næste fetch begynder først når det første er resolvet. I stedet for .then . then osv
            await fetch("https://swapi.co/api/people/" + i)
                .then(res => { return res.json() }));
    };
    console.log(swappiPeople.map(p => p.name).join(", "));
};

// Parallel - Der fetches samtidig ved hjælp af Promise.all().
// Det er kun inden i funktionen async await virker
async function parallel(count) {
    swappiPeople = [];
    for (let i = 1; i < count; i++) {
        swappiPeople.push(
            //Observe no await
            //   En række promises i en liste
            fetch("https://swapi.co/api/people/" + i)
                .then(res => { return res.json() }));
    };

    const allEntries = await Promise.all(swappiPeople); // resolves samtidig pga web apiet.
    console.log(allEntries.map(p => p.name).join(", "));
};

//Time each of the two strategies
serial(15); // Tager lang tid
// parallel(15); // Markant forskel. Arbejder under overfladen. Web API'et klarer det.
