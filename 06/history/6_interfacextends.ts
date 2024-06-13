interface ISignupUser {
  name: string;
  age: number;
  gender: string;
  address: string;
}
// interface IUser {
//   name: ISignupUser["name"];
//   age: ISignupUser["age"];
// }

interface IUser extends Pick<ISignupUser, "name" | "age"> {}
type TUser = Pick<ISignupUser, "name" | "age">;

interface IUserOmit extends Omit<ISignupUser, "gender" | "address"> {}
type TUserOmit = Omit<ISignupUser, "gender" | "address">;
