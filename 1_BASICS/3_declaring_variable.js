

/**
 * 변수 Variable 선언하기
 * 
 * 1) var - < 안 씀
 * 2) let 
 * 3) const 
 */

var name = 'Hello world';
console.log('Hello world , ',name);

var age = 32;
console.log("나이 : ",age);

let ive = '아이브';
console.log(); // < 줄 바꿈 (한 줄 띄기)
console.log(ive);
/**
 * let과 var로 선언하면
 * 추후 값을 변환 가능
 */
ive = '안유진';
console.log(ive);

console.log();

// const

const newJeans = '뉴진스';
console.log(newJeans);

const newJeans2 = '민지';
console.log(newJeans2);

/**
 * 선언과 할당
 * 
 * 선언 - 변수를 선언
 */
var name ; // << 이 자체가 선언 name이라는 변수는 선언 됨 값이 없는 것

/**
 * 할당 - 
 */
var name = '김택건';
console.log(name);

// 선언하고 할당은 없을 때
let girlFriend;
console.log(girlFriend); // << undefined
// 즉 변수가 선언 될 때 초기값은 자동으로 undefined

// Const << 어차피 상수기 때문에 값을 할당해주지 않으면 선언 자체가 오류발생
// Const girlFriend2; << 오류발생



















