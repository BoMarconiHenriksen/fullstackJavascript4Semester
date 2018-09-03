import _ from "lodash";
import "./style.css";
import Icon from "./simpsons_PNG2.png";
import printMe from "./print.js";

function component() {
  let element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack!"], " ");
  element.classList.add("hello");

  //   Button
  var btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  //   Testing if babel works.
  const name = "Kurt Wonnegut";
  setTimeout(() => alert(`Hello there from ${name}`), 1000);

  return element;
}

document.body.appendChild(component());
