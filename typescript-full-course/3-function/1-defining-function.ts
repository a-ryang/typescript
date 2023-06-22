/**
 * Defining Function
 */

function printName(name: string) {
  console.log(name);
}

function returnToCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}은 사귀고 있습니다.`;
}

console.log(returnToCouples("A", "B"));
returnToCouples(0, 1); // Error

/**
 * Optional Parameter
 */
function mltiplyOrReturn(x: number, y?: number) {
  if (y) return x * y;
  return x;
}

mltiplyOrReturn(10);

function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}

multiplyOrReturn2(1, 3);
multiplyOrReturn2(1);

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `hello ${x}`);
}

console.log(getInfiniteParameters("아이유", "아이브", "블랙핑크"));
console.log(getInfiniteParameters(1, 2, 3)); // Error

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
  return x * y;
}

addTwoNumbers(10, 20);

function randomNumber() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}

randomNumber(); // 10 | '랜덤'

function subtractTwoNumbers(x: number, y: number): number {
  return x - y;
}

const subtractTwoNumbersArrow = (x: number, y: number): number => x - y;

/**
 * 특수 반환 타입
 *
 * void / never
 */
function doNotReturn(): void {
  return 3; // Error
}

function throwError(): never {
  while (true) {}
}

function throwError2(): never {
  throw new Error();
}
