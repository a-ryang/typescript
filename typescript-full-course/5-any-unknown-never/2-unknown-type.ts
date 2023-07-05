/**
 * Unknwon Type
 */
let anyValue: any;

anyValue = 24;
anyValue = "아이유";
anyValue = false;
anyValue = [];
anyValue = null;
anyValue = undefined;

let unkownValue: unknown;

unkownValue = 24;
unkownValue = "아이유";
unkownValue = false;
unkownValue = [];
unkownValue = null;
unkownValue = undefined;

let anyType: any = anyValue;
let unkownType: unknown = anyValue;
let booleanType: boolean = anyValue;

let arrayType: string[] = unkownValue; // Error
booleanType = unkownType; // Error

anyValue.toUpperCase();
anyValue.name;
new anyValue();

unkownValue.toUpperCase(); // Error
unkownValue.name; // Error
new unkownValue(); // Error

function isString(target: unknown): target is string {
  return typeof target === "string";
}

let testVal: unknown;

if (isString(testVal)) {
  testVal;
}

type uOrString = unknown | string; // unknown
type anyOrU = any | unknown; // any

type uAndString = unknown & string; // string
type uAndAny = unknown & any; // any

let number1: unknown = 10;
let number2: unknown = 10;

number1 + number2; // Error

number1 === number2; // OK
number1 == number2;
number1 !== number2;
number1 != number2;
