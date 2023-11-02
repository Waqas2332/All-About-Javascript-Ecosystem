let userName = "Waqas"; // ? Automatic type inference at initialization based on value

let num: number; // ? Explicitly assigning types

// userName = 34; // ! Can't assign number datatype value to string variable

// * Basic Types in TS

// ? string, number, boolean

// * Objects in TS

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: number | string;
};

user = {
  name: "Waqas",
  age: 12,
  isAdmin: true,
  id: "123",
};

// * Arrays

let arr: string[];

arr = ["hello1", "hello2"];

// * Functions

//  ? return type of function
// function name(params:type) => or : return type of function{}

function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

//  * type alias

// ? defining type for add function using type keyword
type addFn = (a: number, b: number) => number;

//  * interface keyword

// ? don't use = after interface name. Interface is mainly used to define object types
interface Credentials {}
