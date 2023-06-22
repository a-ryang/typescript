/**
 * Overloading
 */

/**
 * 파라미터를
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수
 */

/**
 * 만약 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 *
 * 만약 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터 값으로 입력한다
 */
function stringOrStrings(member1: string): string;
function stringOrStrings(
  memberOrMembers: string,
  member1: string,
  member2?: string,
  member3?: string
): string;
