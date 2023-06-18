/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다
 * 컴파일하고 나면 JS 코드에선 아무런 영향을 받지 않는다
 */

let codefactory = "code factory";
let testNumber = 3;

codefactory.toUpperCase();
// testNumber.toUpperCase();

let sampleNumber: any = 5;
//console.log(sampleNumber.toUpperCase()); // 런타임 에러
console.log((sampleNumber as string).toUpperCase());

// castring은 강제로 실제 그 타입이 아니더라도 그 타입으로 가정을 할 수 있다
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // number, js에서는 영향을 받지 않는다

l;
