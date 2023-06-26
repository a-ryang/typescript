/**
 * Extension
 */

interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "안유진",
  age: 23,
};

type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "아이유",
  age: 29,
};

interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: "제니",
  age: 29,
};

type TIdol2 = IName & {
  age: number;
};

const idol4: TIdol2 = {
  name: "지수",
  age: 31,
};

/**
 * extending multiple
 */

type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

/**
 * Overrding
 */
type THiehgt = {
  height: number;
};

type TRectangle2 = THiehgt & {
  height: string;
  width: number;
};

const rectangle: TRectangle2 = {
  height:, // never
  width: 100
}

type TWidth = {
  width: number | string;
}

type TRectangle3 = TWidth & {
  width: number;
  height: number;
}

const rectangle2: TRectangle3 = {
  width: 100,
  height: 123
}

interface IHeight {
  height: number;
}

// interface IRectangle extends IHeight {
//   height: string;
//   widht: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number;
  height: number;
}