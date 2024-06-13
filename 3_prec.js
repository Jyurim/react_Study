function reverse_to_number(number) {
  // return Number(number.toString().split("").reverse().join(""));
  return parseInt(number.toString().split("").reverse().join(""));
}

// function findLongStr(str) {
//   let arr = str.split(" ");
//   let longStr = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (longStr.length < arr[i].length) {
//       longStr = arr[i];
//     }
//   }
//   return longStr;
// }

// function findLongStr(str) {
//   let words = str.split(" ");
//   let longStr = "";
//   for (let word of words) {
//     if (longStr.length < word.length) {
//       longStr = word;
//     }
//   }
//   return longStr;
// }

function findLongStr(str) {
  // return str.split(" ").reduce((acc, cur) => acc.length < cur.length ? cur : acc, "");
  // return str.split(" ").sort((a, b) => b.length - a.length)[0];
  return str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .shift();
}
