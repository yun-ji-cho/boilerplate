interface Profile {
  name: string,
  age: number,
  married: boolean,
}

const yunjicho: Profile = {
  name: 'yunji',
  age: 29,
  married: false,
};

//개인 정보 때문에 결혼 여부는 안 알려주고 싶을 경우
//Partial 은 interface 의 필수값들을 다 옵셔널으로 만둘어준다.
//interface Profile {
//   name?: string,
//   age?: number,
//   married?: boolean,
// }
const newYunjiCho: Partial<Profile> = {
  name: 'yunjicho',
  age: 29,
}

//Partial 을 직접 만든다면??
type Name =  Profile['name'];

type P<T> = {
  [Key in keyof T]?: T[Key];
}


const renewYunjiCho: P<Profile> = {
  // name: 'yunjicho',
  // age: 29,
}

type Q<T, S extends keyof T> = {
 [Key in S]: T[Key]
}

const yunjiCho: Q<Profile, 'name' | 'age'> = {
	name: 'yunjicho',
	age: 29,
}



type Animal = 'Cat' | 'Dog' | 'Human';
type Mammal = Exclude<Animal, 'Human'>;
type Human = Extract<Animal, 'Human'>;

type O<T, S> = Pick<T, Exclude<keyof T, S>>
const dd : O<Profile, 'married'> = {
	name: 'yunji',
	age: 29
}

//Omit 속성이 여러개가 중복되는데 하나만 뺴고 싶을 때
const newYunJiCho : Omit<Profile, 'married'> = {
	name: 'yunjicho',
	age: 29,
}


const p1 = Promise.resolve(1).then((a) => a + 1).then((a) => a + 1).then((a) => a.toString());
const p2 = Promise.resolve(2);
const p3 = new Promise((res, rej) => {
	setTimeout(res, 1000);
});

Promise.all([p1, p2, p3]).then((result) => {
	console.log(result);
});


const a = [1, 2, 3, [1, 2], [[1], [2]]].flat(); // [1,2,3,1,2,[1],[2]]