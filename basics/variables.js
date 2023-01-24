const accountId = 22323;
let accountEmail = "kishlay@hotlook.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed


accountEmail = "kk@gmail.com";
accountPassword = "69420";
accountCity = "Bengaluru";

console.log(accountId);;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);