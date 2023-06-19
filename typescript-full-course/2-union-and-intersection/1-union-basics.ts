/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나이다
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = "ive";
stringOrBooleanType = true;

type StrBoolNullType = string | boolean | null;

type StateTypes = "DONE" | "LOADING" | "ERROR";

let state: StateTypes = "DONE";
state = "ERROR";

type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
  "아이유",
  "김고은",
  "박소담",
];

type StringOrNumberList = (string | number)[];

let stringOrNumberList: StringOrNumberList = [1, 2, 3, "아이유"];

/**
 * Interface로 사용하는 union
 */
interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: "최지호",
  age: 32,
  address: "대한민국",
};

animalOrHuman = {
  name: "오리",
  age: 9,
};

type Person = {
  name: string;
  age: number;
};

type Cat = {
  breed: string;
  country: string;
};

type PersonOrCat = Person | Cat;

// type과 intersection은 합집합의 개념
const personOrCat: PersonOrCat = {
  name: "코드팩토리",
  age: 32,
  breed: "Yorkshire Terrier",
  country: "영국",
};
