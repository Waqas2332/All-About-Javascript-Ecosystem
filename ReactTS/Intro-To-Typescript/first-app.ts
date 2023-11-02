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
