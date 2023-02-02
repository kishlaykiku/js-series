let score = "33";

//console.log(typeof(score));

let valueInNumber = Number(score);

//console.log(valueInNumber);
//console.log(typeof(valueInNumber));

//Convert to Number
//"33"                              (string)            = 33            Easily converted to number.
//"33abc"                           (string)            = NaN           Converted to number but when value is printed it returns NaN.
//null                              (object)            = 0             Converted to number but when value is printed it returns 0.
//undefined                         (undefined)         = NaN           Converted to number but when value is printed it returns NaN.
//true                              (boolean)           = 1             Easily converted to number and returns 1 in case of true and 0 in case value is false.


let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn);

//1                                 (number)            = true          Easily converted to boolean.
//0                                 (number)            = false         Easily converted to boolean. (Also -0 returns false).
//Any other number except 0         (number)            = true          Converted to boolean and returns true.
//""                                (Enmpty String)     = false         Converted to boolean and returns false.
//"someString"                      (String)            = true          Converted to boolean and returns true.

let someNumebr = 33;

let stringNumber = String(someNumebr);

//console.log(stringNumber);
//console.log(typeof(stringNumber));

// ######################################## OPERATIONS ########################################

let value = 3;
let negValue = -value;
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Kishlay";
let str3 = str1 + str2;
//console.log(str3);

//console.log("1" + 2);       //12
//console.log(1 + "2");       //12
//console.log("1" + "2");     //12
//console.log("1" + 2 + 2);   //122   Converted according to precedence (Refer ECMA Script). 1 being a string is added to first 2 and now 12 is converted to string. Again 12 being an string is added to last 2 which gived 122 as string output.
//console.log(1 + 2 + "2");   //32    1 being a number is added to first 2 which is also a number, therefore resulting is 3. Now this number 3 is added to last 2 which a string and returns 32 as a string output.

//console.log(3 + 4 * 5 % 3); //Bad Practice. Use parenthesis. ((3+4) * (5%3)).

//console.log(true);
//console.log(+true);  //Bad Practice. Returns 1 as output. (true+ is not possible).

//console.log(+""); //Returns 0. Also a bad practice.

let num1, num2, num3;

num1 = num2 = num3 = 2+2; //Bad Practice. No consistency.

let gameCounter = 100;

console.log(gameCounter++);   //Returns 100. Postfix increment operator first uses the value and then increments.
console.log(++gameCounter);   //Returns 101. Prefix increment operator first increments the value and then uses it.