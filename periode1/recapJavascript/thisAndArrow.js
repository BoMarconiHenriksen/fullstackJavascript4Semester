https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881

var bunny = {
    name: "Usagi",
    tasks: ["transform", "eat cake", "blow kisses"],
    showTasks: function() {
      this.tasks.forEach(function(task) {
        console.log(this.name + " wants to " + task);
      }); //.bind(this)
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