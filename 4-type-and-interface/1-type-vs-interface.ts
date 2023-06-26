/**
 * Type vs Interface
 */

interface IOjbect {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는 것들
 */

// (1) primitive 타입
type Name = string;

// (2) union 타입
type UnionType = string;

// (3) primitive list 또는 tuple
type TupleType = [number, string];

/**
 * interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

const rectangle: IRectangle = {
  height: 200,
  width: 300,
};

// error
type TRectangle = {
  height: number;
};

// error
type TRectangle = {
  width: number;
};

/**
 * Interface Merging
 */
class Review {
  // 프로퍼티
  getY = (x: number) => x;

  // 메서드
  getX(x: number) {
    return x;
  }
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: string) => number; // 프로퍼티는 오버로딩 X
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number;
}

const test: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    return 1;
  },
};
