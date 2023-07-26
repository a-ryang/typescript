/**
 * Tuple
 */
let iveTopMembers: string[] = ["안유진", "장원영", "레이"];

let numberAndStringTuple: [number, string] = [23, "안유진"];

numberAndStringTuple.push("아이유");

// 튜플을 정확히 사용하기 위해선 readonly를 사용한다
let unmodifiableTuple: readonly [number, string] = [23, "아이유"];
unmodifiableTuple.push(); // Error

/**
 * Tuple 유추하기
 */
let actresses = ["김고은", "박소담", "전여빈"];

const actressesTuple = ["김고은", "박소담", "전여빈"] as const; // readonly ["김고은", "박소담", "전여빈"]

// 스프레드
let stringArray: string[] = [...actressesTuple];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ["aryang", 26];

/**
 * Assigning Tuple to Tuple
 */
const tuple1: [string, string] = ["아이유", "유애나"];
const tuple2: [number, number] = [1, 2];

const tuple3: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
const ive: [string, string] = ["장원영", "안유진"];

const stringArr: string[] = ive;
const ive2: [string, string] = stringArr; // Error

/**
 * Multi Dimesional Tuple
 */
const tuple2D: [string, number][] = [
  ["aryang", 25],
  ["아이유", 31],
];
