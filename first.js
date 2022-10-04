"use strict";
let a = "hello";
a = 1234; //에러남
const aa = "5"; //타입스크립트가 추론을 정확히 하면 굳이 이렇게 명시하지 말것.
// 타입을 5라고 했는데 굳이 우리가 손찌검해서 타입이 문자열이 되었음
function add(x, y) {
    // 결과 값을 따로 타입 안써줘도 result 가 number 라는 것을 안다. 단, 매개변수는 반드시 타입 명시해줘야함
    return x + y;
}
const result = add(1, 2);
const b = 5;
const c = true;
const d = undefined;
const e = null;
const f = 5; //타입자리에 고정된 원시값을 넣을 수 있음
const g = true; //타입에는 최대한 정확한 타입 넣는 것이 좋다.
// 팁 1) 타입을 지워봤는데 타입추론을 잘 하면 굳이 타입을 적어줄 필요가 없다.
// 팁 2) 타입은 왼만하면 범위를 좁게 잡아라
// 배열
const arr = ["123", "456"];
const arr2 = [123, 456];
const arr3 = [123, 456];
// + 튜플
const arr4 = [123, 456, "hello"];
//객체
const obj = { lat: 37.5, lon: 127.5 };
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
}
catch (error) {
    error;
}
// ! : null 이나 undefined 가 아님을 보증함, 무조건 존재한다는 뜻 --> 비추, 이 세상에는 절대가 없음
//대신에 if 문을 쓸것!!
const head = document.querySelector("#head");
if (head) {
    head.innerHTML = "hello world";
}
//대문자를 쓰지 말것
const abab = "hello";
const baba = "hell"; //대문자 String 은 레퍼객체
const ba = "world";
const bba = `hello ${ba}`;
const cc = `hello world`;
function rest(...args) {
    console.log(args);
}
rest("1", "2", "3");
// 튜플
const tuple2 = ["1", 1];
tuple2[2] = "hello"; //얘는 막는데
tuple2.push("hello"); //얘는 못막아줌
const EDirection3 = {
    //이넘은 직접 타입으로 쓸수 잇다. 이 값을 상수로 쓰고싶다면 as const
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
function walk(dir) { } //저 중에 하나
const obj2 = { a: "123", b: "hello", c: "world" };
const aaaa = 0 /* EDirection.Up */; //1
const bbbb = 2 /* EDirection.Left */; //3
const zzzzz = { a: "hello" };
const xxxx = { a: "hello" };
