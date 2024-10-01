'number' + 3 + 3
//'number' is a string
//first, the string concatenates with the number 3, the result is 'number3'
//then, another number is added as well, so in the end we have 'number33'
//result: 'number33'

null + 3
//null is converted to 0
//so we have something like: 0 + 3 = 3
//result: 3

5 && "qwerty"
//the '&&' operator returns the second value if the first is truthy
//5 is truthy if I'm not mistaken
//so result: "qwerty"

+'40'+ +'2'+"hillel"
// +'40' converts the '40' into the number 40
//+'2' comverts the '2' into the number 2
//40 + 2 = 42, 42 + "hillel" = 42hillel
//result: 42hillel

'10' - 5 === 6
//'10' - 5 = 5
// 5 === 6 is false
//result: false

true + false
//true is converted to 1, false is 0
//1 + 0 = 1
//result: 1

'4px' - 3
//'4px' cannot be converted to the number
//result: NaN

'4' - 3
//'4' is converted to the number
//result: 4 - 3 = 1

'6' + 3 ** 0
//3 ** 0 means 3 raised to the power of 0, which equals 1
//so '6' + 1 = '61'
//result: '61'

12 / '6'
//'6' is converted to the number
//result: 12 / 6 = 2

'10' + (5 === 6)
//(5 === 6) evaluates to false
//result: '10' + false = '10false'

null == ''
//null and empty string are not equal
//the result is false

3 ** (9 / 3)
//9 /3 = 3
//3 ** 3 equals = 27

!!'false' == !!'true'
//!!'false' converts to true
//!!'true' converts to true
//true == true, it's true

0 || '0' && 1
//0 is considered false
//then we have OR operator which check the next value, '0'
//'0' is true
//then we have && checks the next value which is 1
//'0' and 1 are true, so '0' && 1 equals 1
//result: 1 

(+null == false) < 1;
//+null converts to 0
//0 == false is true
//true < 1 is false because true equals 1, so 1 is not less than 1


false && true || true
//false && true equals to false
//false || true equals to true

false && (false || true);
//false || true equals to true
//false && true equals to false

(+null == false) < 1 ** 5;
//+null converts to 0
//0 == false is true
//1 ** 5 = 1
//true < 1 equals to false 