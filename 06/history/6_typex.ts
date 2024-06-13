type TSumFn = (a: number, b: number) => number;

const k: TSumFn = function (a, b) {
  return a + b;
};

type TString = string;
const hello: TString = "Hello, World!";

// type StringArray = Array<string>;
type StringArray = string[] | null;
const likeFood: StringArray = ["kimchi", "pizza"];
const dislikeFood: StringArray = null;

// type TUser = object;
type TGender = "male" | "female";
type TUser = {
  name: string;
  age: number;
  //   gender?: string;
  //   gender?: "male" | "female";
  gender?: TGender;
};

let user: TUser = {
  name: "Daniel",
  age: 26,
  gender: "female",
};
let user2: TUser = {
  name: "Daniel",
  age: 26,
};

type Person = {
  name: string;
  age: number;
};

const person1: Person = {
  name: "Daniel",
  age: 26,
};

// type MyWorker = {
//   company: string;
//   position: string;
// } & Person;

type MyWorker = {
  company: string;
  readonly position: string;
  getMoney: (amount: number) => number;
};

type Employee = Person & MyWorker;

const worker1: Employee = {
  name: "Daniel",
  age: 26,
  company: "Google",
  position: "Software Engineer",
  getMoney: (amount: number) => {
    console.log(`I got ${amount} dollars!`);
    return amount;
  },
};
