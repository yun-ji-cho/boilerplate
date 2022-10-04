const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === "rejected"; //rejected 만 모아두고 싶을때 커스텀
const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

//Promise 실행하면 -> Pending -> Settled (Resolved, Rejected)
//Promise.then().catch()
//

const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);
const errors2 = promises.filter((promise) => promise.status === "rejected"); //실패한것만 모아두고 싶을 때 (그런데 PromiseSettledResult 라고 추론함)
const errors = promises.filter(isRejected); //커스텀하여 정확한 타입을 추론하도록 해준다. (커스텀 한 것을 사용하니 PromiseRejectedResult 라고 추론하게 됨!!)

export {};
