const fetch = require("node-fetch");

async function serial(count) {
  swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe the await 
      await fetch("https://swapi.co/api/people/" + i) //Før jeg når det næste push nåes først når det første er resolvet. I stedet for .then . then osv
        .then(res => { return res.json() }));
  }
  console.log(swappiPeople.map(p=>p.name).join(", "));
}

// Det her vil vi bruge
// Det er kun inden i funktionen async await virker
async function parallel(count) {
  swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe no await
    //   En række promisesi en liste
      fetch("https://swapi.co/api/people/" + i)
        .then(res => { return res.json() }));
  }
  const allEntries = await Promise.all(swappiPeople); // resolves samtidig pga web apiet.
  console.log(allEntries.map(p=>p.name).join(", "));  
  
}
//Time each of the two strategies
//serial(15); // Tager lang tid
parallel(15); // Markant forskel. Arbejder under overfladen. Web API'et klarer det.