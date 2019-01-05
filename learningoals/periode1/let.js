// Let har block scope.
function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  
      console.log(x);  // 2
    };
    console.log(x);  // 1
};

// letTest();

// Forskellen på var.
function varTest() {
    var y = 1;
    if (true) {
      var y = 2;  // y bliver overskrevet.
      console.log(y);  // 2
    };
    console.log(y);  // 2
  };

// varTest();
