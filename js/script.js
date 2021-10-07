
const userOperation = prompt("What operation to carry on(add,sub,mult,div)")
const nomberFirst = +prompt ("Your first nomber");
const nomberSecond = +prompt ("your second nomber");
let sign = userOperation;
let addition = nomberFirst + nomberSecond;
let minus = nomberFirst - nomberSecond;
let multiplication = nomberFirst * nomberSecond;
let division = nomberFirst / nomberSecond;
switch(sign){
  case "add":alert(`Результат: ${nomberFirst} + ${nomberSecond} = ${additio}`); break;
  case "sub":alert(`Результат: ${nomberFirst} - ${nomberSecond} = ${minus}`); break;
  case "mult":alert(`Результат: ${nomberFirst} * ${nomberSecond} = ${multiplication}`); break;
  case "div":alert(`Результат: ${nomberFirst} / ${nomberSecond} = ${division}`); break;
   default: alert ("Not a corect operation");
}
