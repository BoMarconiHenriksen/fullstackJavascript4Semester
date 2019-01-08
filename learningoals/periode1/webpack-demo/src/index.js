import _ from "lodash";
import "./style.css";
import Icon from "./simpsons_PNG2.png";
import printMe from "./print.js";
import { hello, anotherHello } from "./namedExport";
// import { hello as he, anotherHello as ah } from "./namedExport";

// npm run build
// npm start

function component() {
  let element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack!"], " ");
  element.classList.add("hello");

  // Button. Default export.
  let btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  // Button. Named export 1
  let btnOne = document.createElement("button");

  btnOne.innerHTML = "Example of Named export.";
  btnOne.onclick = hello;

  element.appendChild(btnOne);

  // Button. Named export 2
  let btnAnother = document.createElement("button");

  btnAnother.innerHTML = "Example of Named export.";
  btnAnother.onclick = anotherHello;

  element.appendChild(btnAnother);


  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  
  //   Testing if babel works. es6 arrow funktion.
  const name = "Made with es6 arrow function!";
  setTimeout(() => alert(`This was ${name}`), 1000);

  return element;
}

document.body.appendChild(component());
