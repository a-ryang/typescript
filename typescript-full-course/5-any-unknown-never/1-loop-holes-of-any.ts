/**
 * Loopholes of Any
 */
let number: number;
number = 10;

number.toUpperCase(); // Error

(number as any).toUpperCase(); // JS로 변환후 런타임 에러 발생

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};

let args1: any = "코드팩토리";
let args2: any = true;

multiplyTwo(args1, args2); // Error가 발생하지 않음

const callbackRunner = (x: number, y: number, callback: any) => callback(x, y);

const callback = (x: number, y: number) => {
  return x * y;
};

callbackRunner(5, 4, callback);
