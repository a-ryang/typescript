/**
 * Type and Interfade
 */

/**
 * Type
 *
 * 타입은 TS의 타입에 이름을 지어주는 것
 */
type NewStringType = string;

type NullNullType = null;

type NewNumberType = number;

type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year: number;
};

const yujin: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 */

interface IdolInterface {
  name: string;
  year: number;
}

const yujin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};

interface IdolInterface2 {
  name: NewStringType;
  year: NewNumberType;
}

const yujin3: IdolInterface2 = {
  name: "안유진",
  year: 2002,
};

interface IdolOptional {
  name: string;
  year?: number;
}

const yujin4: IdolOptional = {
  name: "안유진",
};
