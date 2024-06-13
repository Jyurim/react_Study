// Q1
function sum({ ...args }) {
  let result = 0;
  for (let i in args) {
    result += args[i];
  }
  return result;
}

// Q2


function calc(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}


const str = "12-34+56*78";
function calc1(str) {
    let result = 0;
    let numBuffer = "";
    let operator = "";
    let i = 0;
  
    while (i < str.length) {
      const char = str[i];
  
      if (!isNaN(char)) {
        numBuffer += char;
      } else {
        if (numBuffer.length > 0) {
          const num = parseInt(numBuffer);
          numBuffer = "";
  
          switch (operator) {
            case "+":
              result += num;
              break;
            case "-":
              result -= num;
              break;
            case "*":
              result *= num;
              break;
            case "/":
              result /= num;
              break;
            default:
              result = num;
          }
        }
        operator = char;
      }
      i++;
    }
  
    // 마지막 숫자를 결과에 반영
    if (numBuffer.length > 0) {
      const num = parseInt(numBuffer);
      switch (operator) {
        case "+":
          result += num;
          break;
        case "-":
          result -= num;
          break;
        case "*":
          result *= num;
          break;
        case "/":
          result /= num;
          break;
        default:
          result = num;
      }
    }
  
    return result;
  }

////////////////////////////////////////////

function calc(str) {
  let result = 0;
  let arr = str.split(/(\D)/); // 숫자가 아닌 문자를 기준으로 배열로 나눔
  let operator = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-" || arr[i] === "*" || arr[i] === "/") {
      operator = arr[i];
    } else {
      switch (operator) {
        case "+":
          result += parseInt(arr[i]);
          break;
        case "-":
          result -= parseInt(arr[i]);
          break;
        case "*":
          result *= parseInt(arr[i]);
          break;
        case "/":
          result /= parseInt(arr[i]);
          break;
        default:
          result = parseInt(arr[i]);
      }
    }
  }
  return result;
}

// Q3
const studentA = {
  math: "A+",
  korean: "B",
  english: "C+",
  science: "F",
};

const standard = {
  "A+": 4.5,
  A: 4,
  "B+": 3.5,
  B: 3,
  "C+": 2.5,
  C: 2,
  F: 1,
};

let sum = 0;
let cnt = 0;

for (let key in studentA) {
  sum += standard[studentA[key]];
  cnt++;
}

let avg = sum / cnt;

////////////////////////////////

const studentB = {
  math: "A+",
  korean: "B",
  english: "C+",
  science: "F",
};

const studentB_score = [];
let sum2 = 0;
let avg2 = 0;
for (let key in studentB) {
  switch (studentB[key]) {
    case "A+":
      studentB_score.push(4.5);
      break;
    case "A":
      studentB_score.push(4.0);
      break;
    case "B+":
      studentB_score.push(3.5);
      break;
    case "B":
      studentB_score.push(3.0);
      break;
    case "C+":
      studentB_score.push(2.5);
      break;
    case "C":
      studentB_score.push(2.0);
      break;
    case "F":
      studentB_score.push(0);
      break;
  }
}

for (let score of studentB_score) {
  sum2 += score;
}

avg2 = sum2 / studentB_score.length;

// 연습문제+
const i = "aaabbbccc";

// function sameLetterCount(str) {
//   let result = "";
//   let cnt = 0;
//   for (let j = 0; j < i.length; j++) {
//     for (let k = j + 1; k < i.length; k++) {
//       if (i[j] === i[k]) {
//         cnt++;
//       }
//     }
//     if (cnt > 0) {
//       result += i[j];
//       result += cnt;
//     }
//   }

//   return result;
// }

// console.log(sameLetterCount(i)); // a3b3c3

function compress(str) {
  let result = "";
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += str[i] + cnt;
      cnt = 1;
    } else {
      cnt++;
    }
  }
  return result;
}
