/**
 * Type Predicate
 */
function isNumber(input: any): input is number {
  return typeof input === "number";
}

console.log(isNumber(10));

function isNumberBool(input: any): boolean {
  return typeof input === "number";
}

let number: any = 5;

if (isNumberBool(number)) {
  number; // any type
}

if (isNumber(number)) {
  number; // number type
}

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  return (animal as Doge).age !== undefined;
}
