/**
 * Function Type
 */
type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
  return ["안유진", "장원영", "레이"].map(callback);
};

console.log(runner((x) => `아이브 멤버 ${x})`));

type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTowNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
};

/**
 * Interface로 함수 선언하기
 */
interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

const MultiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
  return x * y;
};
