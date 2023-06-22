/**
 * Statement and Expression
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

// express (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

/**
 * Statement
 */
function add(x: number, y: number) {
  return x + y;
}

function minus(x: number, y: number) {
  return x - y;
}

/**
 * Expression
 *
 * TS 관점에서 표현식이 더 유리함
 */
type CalculationType = (x: number, y: number) => number;

const addExps: CalculationType = (x, y) => x + y;
const minusExps: CalculationType = (x, y) => x - y;
