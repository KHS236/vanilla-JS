

/**
 * Hoisting
 */

console.log('hello');
console.log('world');

// console.log(name); //<< undefined (when? 할당없이 선언만 했을 때)
// var name = '김택건';
// console.log(name);

/**
 * Hoisting ?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상 <<실제로 이동은 X
 *
 */

// var name;
// console.log(name);
// name = '까불지마';
// console.log(name);


// ----------------------------------------------------
// let , const 호이스팅 가능

console.log(yujin);
const yujin = '안유진';
/**
 * c:\Users\fdsa5\Desktop\디벨롭\vanilla-JS\1_BASICS\6_Hoisting.js:30
console.log(yujin);
            ^
ReferenceError: Cannot access 'yujin' before initialization
    at Object.<anonymous> (c:\Users\fdsa5\Desktop\디벨롭\vanilla-JS\1_BASICS\6_Hoisting.js:30:13)
    */


// >> 에러가 뜨는데 호이스팅이 안 되는 게 아니라
// 변수는 실제로 선언 돼 있어서 위로 끌어올리는데 값이 할당되기 전에 가지고 와서
// 변수값이 초기화 되기 전에 사용 할 수 없다는 에러가 뜬 것












