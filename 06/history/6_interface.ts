interface IUser {
  name: string;
  age: number;
}

interface IWorker {
  company: string;
  position: string;
}

// interface IUserAddress {
//     name: string;
//     age: number;
//     zipcode: string;
//     address: string;
// }

interface IUserAddress extends IUser, IWorker {
  zipcode: string;
  address: string;
}

const user: IUserAddress = {
  name: "neo",
  age: 85,
  company: "Google",
  position: "Engineer",
  zipcode: "123-456",
  address: "Tokyo",
};
