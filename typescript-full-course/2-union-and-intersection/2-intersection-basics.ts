/**
 * Intersection
 *
 * Add
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

// Intersection은 + 개념
type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: "코드팩토리",
  age: 32,
  phone: "010-1234-5678",
  address: "서울시",
};

// 기본타입에 Intersection은 절대 존재할 수 없으므로 never 타입이 된다
type NumberAndString = number & string;
