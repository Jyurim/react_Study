// Q1
// a 와 b의 크기 상관 관계는 정해진 게 없다.
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

function between2(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

// a 와 b의 크기 상관 관계는 정해진 게 없다.
function between3(a, b) {
  let arr = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
  } else {
    for (let i = b; i <= a; i++) {
      arr.push(i);
    }
  }
  return arr;
}

function between4(a, b) {
  return a < b
    ? Array.from({ length: b - a + 1 }, (_, i) => a + i)
    : Array.from({ length: a - b + 1 }, (_, i) => b + i);
}

// Q2
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

function createPhoneNumber2(numbers) {
  return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
}

// Q3
function reverseMessage(str) {
  return str.split("").reverse().join("");
  // return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

//Q4
function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, cur) => acc + cur, 0);
}

//Q5
function isPow(x) {
  if (Math.sqrt(x) === parseInt(Math.sqrt(x))) {
    return Math.pow(Math.sqrt(x) + 1, 2);
  } else {
    return -1;
  }
}

function isPow(x) {
  return Math.sqrt(x) === parseInt(Math.sqrt(x))
    ? Math.pow(Math.sqrt(x) + 1, 2)
    : -1;
}
