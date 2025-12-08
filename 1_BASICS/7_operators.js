

/**
 * 연산자
 */

/**
 * 
 * 산술 연산자
 * 
 */
console.log(10+10); //20
console.log(10-10); //0
console.log(10*10); //100
console.log(10/10); //1 몫
console.log(10%3); //1 나머지

console.log('===============================');

console.log(10 * (10+10));

// ===================================================================
console.log();
/**
 * 증가와 감소
 */

let number = 1;

number ++;
console.log(number);
// 2
number --;
console.log(number);
// 1

console.log('=========================');
/**연산자의 위치 */
let result = 1;
console.log(result);
result = number++;
console.log(result,number);
// 1 2
// result에 number를 담고나서 ++가 작동해서
// result에는 1인 넘버가 담기고 나서 넘버에 1 증가한 것

result = number--;
console.log(result,number);
// 똑같음

// 연산자 순서 바꾸면 됨
result = ++ number;
console.log(result,number);

result = -- number;
console.log(result,number);

// =========================================================================

/**
 * 숫자 타입이 아닌 타입에 +, - 사용
 */
console.log();
let sample = '99';
console.log(+sample);
console.log(typeof +sample);
// + 연산자 붙이면 자동 형변환

console.log(sample);
console.log(typeof sample);
// << String값 ( 기존 값을 변경하진 않음 )

sample = true;
console.log(+sample);
console.log(typeof +sample);
sample = false;
console.log(+sample);
console.log(typeof +sample);
// true == 1 / false == 0

// ===========================================
console.log();
sample = '안유진';
console.log(+sample);
// NaN -> Not a Number

sample = '99';
console.log(-sample);
console.log(typeof -sample);
/**
-99
number
 */

// ===========================================
console.log('============================');
/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -+ 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

console.log();
// ===========================================
console.log('============================');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log('----1) 값의 비교-----')
console.log (5 == 5); // true
console.log(5 == '5'); //true
console.log(0==''); //true
console.log(true == 1); //true
console.log(false == 0); //true
console.log(true =='1'); //true

console.log();
console.log('----2) 값과 타입의 비교-----')
console.log( 5===5 ); //true << '타입까지' 비교하는 것
console.log( 5==='5'); //false
console.log(0===''); //false
console.log(true === 1); //false
console.log(false === 0); //false
console.log(true ==='1'); //false

console.log();
console.log('----같지 않다?-----')
console.log( 5!=5 ); //false
console.log( 5!='5'); //false
console.log(0!=''); //false
console.log(true != 1); //false
console.log(false != 0); //false
console.log(true !='1'); //false

console.log();
console.log('----값과 타입이 틀린다면?-----')
console.log (5 !== 5); // false
console.log(5 !== '5'); //true
console.log(0 !==''); //true
console.log(true !== 1); //true
console.log(false !== 0); //true
console.log(true !=='1'); //true


// ===========================================
console.log('============================');

/**
 * 대소 관계 비교 연산자
 */
console.log(100>1);
console.log(100<1);
console.log(100<=1);
console.log(100>=1);

/**
 * 삼항 조건 연산자 (ternary operator)
 * >> 물음표를 기준 조건식 조건식 좌측은 true일 때 / 우측은 false일 때
 */
console.log(10> 0? '10이 0보다 크다' : '10이 0보다 작다');

// ===========================================
console.log('============================');
/**
 * 논리 연산자
 * 1) &&
 * 2) ||
 */
console.log(true && true); // true
console.log(true && false); // false
console.log ('이게 무슨 뜻이냐면 &&는 모두 true일 경우 true 반환');
console.log('중요한 건 &&는 좌측 조건이 참일 경우에만 우른 조건 코드 실행')
console.log();
console.log(false||false); // false
console.log(false||true); // true
console.log('||연산자는 한 쪽만 조건을 충족하면 true 반환');
console.log('중요한 점은 ||는 좌측 연산이 false여도 우측 코드 실행');
console.log();
console.log('10 > 1 && 20 > 2 == ',10 > 1 && 20 > 2);
console.log('10 < 1 && 20 > 2 == ',10 < 1 && 20 > 2);
console.log('10 < 1 && 20 < 2 == ',10 < 1 && 20 < 2);
console.log();
console.log('10 > 1 || 20 > 2 == ',10 > 1 || 20 > 2);
console.log('10 < 1 || 20 > 2 == ',10 < 1 || 20 > 2);
console.log('10 < 1 || 20 > 2 == ',10 < 1 || 20 < 2);

// ===========================================
console.log('============================');

/**
 * 단축 평가 (short circuit evaluation)
 *
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');



// ===========================================
console.log('============================');









































