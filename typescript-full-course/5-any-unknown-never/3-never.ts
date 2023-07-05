/**
 * Never Type
 */
// (1) 함수에서 에러를 던질 때
function throwError(): never {
  throw Error();
}

// (2) 무한 loop
function infiniteLoop(): never {
  while (true) {}
}

// (3) 존재할 수 없는 인터섹션
type StringAndNumber = string & number;
