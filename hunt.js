// //error code
function calc(str) {
  let num = 0;
  let result = 0;
  let operator = '+';

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= '0' && ch <= '9') {
      num = num * 10 + (ch - '0');
    }

    if (ch === '+' || ch === '-' || ch === '*' || ch === '/' || i === str.length - 1) {

      if (operator === '+') result += num;
      if (operator === '-') result -= num;
      if (operator === '*') result *= num;
      if (operator === '/') result /= num;

      operator = ch;
      num = 0;
    }
  }

  return result;
}
let a = calc("10+2*3")
console.log(a);

//correct code
// function calc(str) {
//   let num = 0;
//   let result = 0;
//   let prev = 0;
//   let operator = '+';

//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (ch >= '0' && ch <= '9') {
//       num = num * 10 + (ch - '0');
//     }

//     if (ch === '+' || ch === '-' || ch === '*' || ch === '/' || i === str.length - 1) {

//       if (operator === '+') {
//         result = result+ prev;
//         prev = num;
//       }
//       if (operator === '-') {
//         result = result+ prev; 
//         prev = -num;
//       }
//       if (operator === '*') {
//         prev = prev * num;
//       }
//       if (operator === '/') {
//         prev = parseInt(prev / num);
//       }

//       operator = ch;
//       num = 0;
//     }
//   }

//   return result + prev;
// }
// let a = calc("10+2*3")
// console.log(a);