/**
 * 
 * Data Types
 * 자바스크립트는 7개의 타입
 * 여섯개의 Primitive type과
 * 한 개의 오브젝트 타입이 있다.
 * 
 * 프리미티브 타입 - 다른 타입들이 구성될 수 있는 가장 작은 단위(?)
 * -> 수학으로 치면 1,2,3,4 한글로 치면 ㄱ,ㄴ,ㄷ,ㄹ 영어로 치면 a,b,c,d 이런 느낌
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (true / false)
 * 4) undefined (언디파인드 === 정의되지 않음)
 * 5) null (아예 존재하지 않음)
 * 6) Symbol (심볼) << 뭐임?
 * 
 * 오브젝트 타입 -
 * 
 * 7) Object(객체)
 *  Function
 *  Array
 *  Object 등
 *  
 */


const age = 25;
const tempature = -10;
const pi = 3.14;

console.log(typeof(age));
console.log(typeof(tempature));
console.log(typeof(pi));
console.log('====================');


const infinity = Infinity;
const nInfinity = -Infinity;
// 무한한 값 , 무한한 음수 값을 넣을 수 있음

console.log(typeof infinity);
console.log(typeof nInfinity);
// Number 타입

/**
 * String 타입
 */
console.log('-------------------------');
const codeFactory = '"코드"팩토리';
console.log(codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);


// Template Literal
// Escaping Charactor 
// 1) newLine => \n
// 2) tab => \t
// 3) 백슬래시를 스트링으로 표현하고싶다면 두 번 입력하면 된다.
const iveYujin = '아이브\n안유진';
console.log(iveYujin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브i '" / / / / /
장원영`;
console.log(iveWonYoung2);
// 강사님 어째서 이건 저에게 알려주시지 않았쬬?
// 내가 기억 못하는 건가
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log (groupName + ' 안유진');
console.log(`${groupName} 안유진`);



// ==================================================================================
// Boolean Type

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);


// ===================================================================
// Undefined
// 사용자가 직접 값을 초기화 하지 않았을 때 지정되는 값
//  직접 undefined로 값을 초기화하는 건 지양해야 한다.

let noInit = undefined; // << 개바보임

// ===================================================================
// Null 타입
/**
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용
 */

let init = null;
console.log(init);
console.log(typeof init);
// 실제로 타입이 null이 나와야 하지만
// 개발자가 인정한 버그로 object 타입을 가짐
// 이미 object 타입으로서 개발된 환경이 많기 때문에 수정하지 않음


/** ==============================================================
 * Symbol type
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
console.log('=====================================');
console.log();
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);


/**================================================================
 * Object Type
 * 
 * Map
 * 키 : 밸류의 쌍으로 이루어짐.
 */
const dictionary = {
    '사과':{'이름':'apple'},'색상':'red',blue:'파란색'
}
console.log(dictionary);
console.log(dictionary['blue']);
console.log(dictionary['사과']);
console.log(dictionary['사과']['이름']);

console.log(typeof dictionary);

/**==========================================================
 * 
 *  Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];
console.log('===================================');
console.log(iveMembersArray);

/**
 * index
 * 0부터 1씩 올라가는 순서값
 */
console.log('아이브 멤버스 인덱스 0 : '+iveMembersArray[0]);
console.log('아이브 멤버스 인덱스 4 : '+iveMembersArray[4]);


/**
 *  ===========================================================
 * 
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다.
 *                  C java 등
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 * JS -> dynamic typing
 * 
 */


































































