//Button Click Display on Screen
var but = document.getElementsByClassName("but");
// console.log(but)
//One Button
const one = function () {
  document.getElementById("screen").innerHTML += but[0].innerHTML;
};
but[0].onclick = one
// Two Button
const two = function () {
  document.getElementById("screen").innerHTML += but[1].innerHTML;
};
but[1].onclick = two;
//Three Button
const three = function () {
  document.getElementById("screen").innerHTML += but[2].innerHTML;
};
but[2].onclick = three;
//+ Button
const plus = function () {
  document.getElementById("screen").innerHTML += but[3].innerHTML;
};
but[3].onclick = plus
//Four Button
const four = function () {
  document.getElementById("screen").innerHTML += but[4].innerHTML;
};
but[4].onclick = four
//Five Button
const five = function () {
  document.getElementById("screen").innerHTML += but[5].innerHTML;
};
but[5].onclick = five
//Six Button
const six = function () {
  document.getElementById("screen").innerHTML += but[6].innerHTML;
};
but[6].onclick = six
//- Button
const minus = function () {
  document.getElementById("screen").innerHTML += but[7].innerHTML;
};
but[7].onclick = minus
//Seven Button
const seven = function () {
  document.getElementById("screen").innerHTML += but[8].innerHTML;
};
but[8].onclick = seven
//Eight Button
const eight = function () {
  document.getElementById("screen").innerHTML += but[9].innerHTML;
};
but[9].onclick = eight
//Nine Button
const nine = function () {
  document.getElementById("screen").innerHTML += but[10].innerHTML;
};
but[10].onclick = nine
//* Button
const mult = function () {
  document.getElementById("screen").innerHTML += but[11].innerHTML;
};
but[11].onclick = mult
//C Button
const cB = function () {
  document.getElementById("screen").innerHTML= "";
};
but[12].onclick = cB
//Zero Button
const zero = function () {
  document.getElementById("screen").innerHTML += but[13].innerHTML;
};
but[13].onclick = zero
// / Button
const devB = function () {
  document.getElementById("screen").innerHTML += but[14].innerHTML;
};
but[14].onclick = devB
//Equal button
var equal = document.getElementById("equal");
const equalB = function () {
  var y = document.getElementById("screen").innerHTML
  if (y.includes("+")){
  num1 = parseInt(y.slice(0,y.indexOf("+")))
  num2 = parseInt(y.slice(y.indexOf("+"),y.length))
  console.log(num1)
  console.log(num2)
  result = num1+num2
  document.getElementById("screen").innerHTML += ` = ${result}`;
}
if (y.includes("-")){
  num1 = parseInt(y.slice(0,y.indexOf("-")))
  num2 = parseInt(y.slice(y.indexOf("-")+1,y.length))
  console.log(num1)
  console.log(num2)
  result = num1-num2
  document.getElementById("screen").innerHTML += ` = ${result}`;
}
if (y.includes("*")){
  num1 = parseInt(y.slice(0,y.indexOf("*")))
  num2 = parseInt(y.slice(y.indexOf("*")+1,y.length))
  console.log(num1)
  console.log(num2)
  result = num1*num2
  document.getElementById("screen").innerHTML += ` = ${result}`;
}
if (y.includes("/")){
  num1 = parseInt(y.slice(0,y.indexOf("/")))
  num2 = parseInt(y.slice(y.indexOf("/")+1,y.length))
  console.log(num1)
  console.log(num2)
  result = num1/num2
  document.getElementById("screen").innerHTML += ` = ${result}`;
}
};
equal.onclick = equalB
