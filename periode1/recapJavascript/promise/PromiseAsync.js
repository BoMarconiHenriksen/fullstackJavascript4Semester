const fetch = require("node-fetch");

function fetchStarWars(id) {
  const URL = "https://swapi.co/api/people/";
  return fetch(URL + id)
    .then(response => response.json())
    .catch(err => console.log(err));
}

const result = fetchStarWars(1);
result;

var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
    });
  }
};

bunny.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses

var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks() {
    this.tasks.forEach(task => {
      console.log(this.name + " wants to " + task);
    });
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses
