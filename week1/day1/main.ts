let myStr = 'this is a string';

// myStr = 45;

const number = 456;

// number = 456;

let mystr: string;

// mystr = 345;

const array: stringBoolOrNum[] = [75, 'string'];

array.push(true);

const numeric: number = array[0] as number;

const obj: IPerson = {
  name: 'Jason'
};

obj.name = 'Bob';
obj.age = 34;

interface IPerson {
  name: string;
  age?: number;
}

type stringBoolOrNum = string | number | boolean;

class User implements IUser {
  constructor(public name: string, protected age: number = 23) {}

  sayHello() {
    console.log(`Hello ${this.name}, you are ${this.age} years old`);
  }
}

class Person extends User {
  constructor(name: string, age: number, showSize: string) {
    super(name, age);
  }
}

interface IUser {
  name: string;
  // age: number;
}

const user = new User('Jason');

user.sayHello();
// user.age;

interface Login {
  email: string;
  password: string;
}

interface Register extends Login {
  firstName: string;
  lastName: string;
}

const reg: Register = {
  firstName: 'Bob',
  lastName: 'Bob',
  email: 'bob@bob.com',
  password: 'password'
};

const stringArray = ['1', '2', '3', '4'];
const numArray = [1, 2, 3, 4, 5];

function map<T, TResult>(
  array: T[],
  callback: (element: T, index: number) => TResult
) {
  const results: TResult[] = [];

  for (let index = 0; index < array.length; index++) {
    results.push(callback(array[index], index));
  }

  return results;
}

const result = map(stringArray, element => {
  return parseInt(element, 10);
});

enum Things {
  'thingZero' = 10,
  'thingOne' = 'another string'
}

// Things.
