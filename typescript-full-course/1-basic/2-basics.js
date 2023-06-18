"use strict";
/**
 * Types
 */
let helloText = "Hello";
//helloText = true;
/**
 * JS의 7개 타입
 */
const stringVar = "String";
const numberVar = 3;
const bigIntVar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력할 수 있는 타입
let anyVar;
anyVar = 100;
anyVar = "asdf";
anyVar = true;
// any는 다른 어떤 타입에 변수에 할당할 수 있다
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입
let unkownType;
unkownType = 100;
unkownType = "asdf";
unkownType = true;
// unkown은 any와 다르게 다른 타입의 변수에 할당할 수 없다
let testNumber2 = unkownType;
let testString2 = unkownType;
let testBoolean2 = unkownType;
let anyType2 = unkownType; // 가능
// neber - 어떠한 값도 저장되거나 반환되지 않는 타입
let neverType = null;
/**
 * 리스트 타입
 */
const koeranGirlGroup = ["ive", "newjeans", "blackpink"];
const booleanList = [true, false];
