// 함수 선언식
function add(a: number, b: number): number {
  return a + b;
}

function sub(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

// 함수 표현식

// const addExpress = function (a: number, b: number): number {
//   return a + b;
// };
// const subExpress = function (a: number, b: number): number {
//   return a - b;
// };

// const multiplyExpress = function (a: number, b: number): number {
//   return a * b;
// };
type TSumFn = (a: number, b: number) => number;
interface ISumFn {
  (a: number, b: number): number;
}
const addExpress: ISumFn = (a, b) => a + b;
const subExpress: TSumFn = function (a, b) {
  return a - b;
};
const multiplyExpress: TSumFn = function (a, b) {
  return a * b;
};
