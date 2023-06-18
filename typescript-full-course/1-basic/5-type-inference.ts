/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = "string";
let booleanType = true;
let numberType = 30;

booleanType = false;
booleanType = "false"; // error

const constStringType = "const string"; // string 리터럴 타입이됨
const constStringType2: "const string2" = "const string2";
const constBooleanType = true; // true

let yujin = {
  name: "안유진",
  age: 2003,
};

const yujin2 = {
  name: "안유진",
  age: 2003,
};

// 객체는 const의 구체적인 타입이 적용되지 않는다
yujin2.name = "aryang";

const yujin3 = {
  name: "안유진" as const, // 구체화로 casting
  age: 2003 as const,
};
yujin3.name = "aryang"; // 에러

/**
 * Array
 */

let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5"];

numbers.push(6);
numbers.push("7"); // error

const number = numbers[0];
const nos = numbersAndString[0]; // string | number

// tuple
const twoNumbers = [1, 3] as const; //readonly [1, 3]

const first = twoNumbers[0]; // first: 1

const nos2 = numbersAndString[1000]; // 타입스크립트는 배열의 길이를 알지못한다
const first2 = twoNumbers[1000]; // 반면에 tuple은 추론할 수 있다
