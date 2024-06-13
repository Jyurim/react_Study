const a: string = "Hello, TypeScript!";
const b: number = 1;
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const f: object = { name: "Jack", age: 32 };
// const f: {name: string} = {name: "Jack"};
const g: symbol = Symbol("id");
const h: Array<[]> = [];
// const h: Array<number> = [1, 2, 3];
const h1: [] = [];
// const h1: [number] = [1];
// const h1: string[] = ["a", "b", "c"];
const h2: (string | number)[] = ["a", 1];
const i: () => void = function () {};
const j: (a: number, b: number) => number = function (a, b) {
  return a + b;
};
// const j: (a: number, b: number) => number = (a, b) =>  a + b;
