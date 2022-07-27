let a: string = "hello";
a = 1234; //에러남

const aa: string = "5"; //타입스크립트가 추론을 정확히 하면 굳이 이렇게 명시하지 말것.
// 타입을 5라고 했는데 굳이 우리가 손찌검해서 타입이 문자열이 되었음

function add(x: number, y: number): number {
  // 결과 값을 따로 타입 안써줘도 result 가 number 라는 것을 안다. 단, 매개변수는 반드시 타입 명시해줘야함
  return x + y;
}
const result = add(1, 2);

const b = 5;
const c = true;
const d = undefined;
const e = null;

const f: 5 = 5; //타입자리에 고정된 원시값을 넣을 수 있음
const g: true = true; //타입에는 최대한 정확한 타입 넣는 것이 좋다.

// 팁 1) 타입을 지워봤는데 타입추론을 잘 하면 굳이 타입을 적어줄 필요가 없다.
// 팁 2) 타입은 왼만하면 범위를 좁게 잡아라

// 배열
const arr: string[] = ["123", "456"];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456];
// + 튜플
const arr4: [number, number, string] = [123, 456, "hello"];

//객체
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// type, interface - 이부분은 자바스크립트로 변환될 때 다 없어지는 부분이다
// 1) : 콜론
// 2) type Add = () => number;
// 3) interface Minus {}
// 4) Array<string>
// 5) as
// let aaa = 123;
// aaa = 'hello' as unknown as number;

//심화
function add(x: number, y: number): number; //타입만
function add(x, y) {
  //선언됨
  return x + y;
}

//빈배열을 조심해라.
//빈배열은 never 라는 타입이 뜨는데 이때는 배열에 아무 값도 올 수 없다.
//빈 배열에는 타입을 꼭 지정해줘야 한다.
try {
  const array = [];
  array.push("hello");
} catch (error) {
  error;
}

// ! : null 이나 undefined 가 아님을 보증함, 무조건 존재한다는 뜻 --> 비추, 이 세상에는 절대가 없음
//대신에 if 문을 쓸것!!
const head = document.querySelector("#head")!;
if (head) {
  head.innerHTML = "hello world";
}

//대문자를 쓰지 말것
const abab: string = "hello";
const baba: String = "hell"; //대문자 String 은 레퍼객체

//자동완성 추천도 해줌 (타입을 정교하게 만들 때는 'world' | 'hell' 요런게 쓰임 )
type World = "world" | "hell";
const ba: World = "world";

const bba = `hello ${ba}`;

//type Greeting = 'hello world'
type Greeting = `hello ${World}`;
const cc: Greeting = `hello world`;

function rest(...args: string[]) {
  console.log(args);
}

rest("1", "2", "3");

// 튜플
const tuple2: [string, number] = ["1", 1];
tuple2[2] = "hello"; //얘는 막는데
tuple2.push("hello"); //얘는 못막아줌

//이넘 : 여러개의 변수들을 하나의 그룹으로 묶고 싶을 때, 잘 쓰지는 않음
// 남기고 싶으면 객체, 남기기 싫으면 이넘, 남기지 말지 확신이 안든다면 남겨라.
const enum EDirection { //위에서부터 0, 1, 2, 3
  Up,
  Down,
  Left,
  Right,
}

const enum EDirection2 { //위에서부터 0, 1, 2, 3
  Up = 3,
  Down,
  Left,
  Right,
}

const EDirection3 = {
  //이넘은 직접 타입으로 쓸수 잇다. 이 값을 상수로 쓰고싶다면 as const
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

function walk(dir: EDirection) {} //저 중에 하나

const obj2 = { a: "123", b: "hello", c: "world" };
type Key = keyof typeof obj2; // 값을 타입으로 쓰고 싶을 때, obj2 는 자바스크립트 값이기 떄문에 타입으로 쓰고싶으면 typeof 를 붙여놔야함

type Key2 = typeof obj[keyof typeof obj2];

const aaaa = EDirection.Up; //1
const bbbb = EDirection.Left; //3

//객체 (간단한것은 type, 객체 지향 하고 싶으면 interface)
type A = { a: string };
const zzzzz: A = { a: "hello" };

interface B {
  a: string;
}
const xxxx: B = { a: "hello" };
