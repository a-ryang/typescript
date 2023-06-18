/**
 * Types
 */

let helloText: string = "Hello";

//helloText = true;

/**
 * JS의 7개 타입
 */
const stringVar: string = "String";
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력할 수 있는 타입
let anyVar: any;
anyVar = 100;
anyVar = "asdf";
anyVar = true;

// any는 다른 어떤 타입에 변수에 할당할 수 있다
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unkownType: unknown;
unkownType = 100;
unkownType = "asdf";
unkownType = true;

// unkown은 any와 다르게 다른 타입의 변수에 할당할 수 없다
let testNumber2: number = unkownType;
let testString2: string = unkownType;
let testBoolean2: boolean = unkownType;
let anyType2: any = unkownType; // 가능

// neber - 어떠한 값도 저장되거나 반환되지 않는 타입
let neverType: never = null;

/**
 * 리스트 타입
 */
const koeranGirlGroup: string[] = ["ive", "newjeans", "blackpink"];
const booleanList: boolean[] = [true, false];
