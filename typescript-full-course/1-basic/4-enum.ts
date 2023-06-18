/**
 * Enum
 */

/**
 * API 요청을 한다
 * 상태는 4가지
 *
 * DONE - 요청 완료
 * ERROR - 에러
 * LOADING - 로딩
 * INITIAL - 초기
 */
function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";
    // 작업
    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}

// 스펠링 오타
console.log(runWork() === "DONEE");

const initialState = "INITIAL";
const loadingState = "LOADING";
const doneState = "DONE";
const errorState = "ERROR";

function runWork2() {
  let state = initialState;

  try {
    state = loadingState;
    // 작업
    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState);

enum State {
  DONE, // 0
  LOADING, // 1
  INITIAL, // 2
  ERROR = "ERROR", // "ERROR"
}

function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // 작업
    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);
