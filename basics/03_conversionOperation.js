let score = "33";

//console.log(typeof(score));

let valueInNumber = Number(score);

//console.log(valueInNumber);
//console.log(typeof(valueInNumber));

//Convert to Number
//"33"        (string)      = 33            Easily converted to number.
//"33abc"     (string)      = NaN           Converted to number but when value is printed it returns NaN.
//null        (object)      = 0             Converted to number but when value is printed it returns 0.
//undefined   (undefined)   = NaN           Converted to number but when value is printed it returns NaN.
//true        (boolean)     = 1             Easily converted to number and returns 1 in case of true and 0 in case value is false.


let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

//1           (number)      = true 