//Regular expressions...
let regEx = [];
regEx[0] = /.abc/g;
regEx[1] = /a+b?!!1{4}/g;
regEx[2] = /.{3}a\.b/;
regEx[3] = /\w/;
regEx[4] = /\s/;
regEx[5] = /\d/;
regEx[6] = /./;
regEx[7] = /[abc]/;
regEx[8] = /(abc)/;
regEx[9] = /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/;
regEx[10] = /\([0oOn]{1}(_|\s)[0oOn]{1}\)/;

let str1 = "www.regExp.com/.abc.html"
console.log(regEx[0].test(str1));

let str2 = "Hello captain Ahab!!1111";
console.log(regEx[1].test(str2));

//This string is valid for these cases
let str3 = "The winner is...a.bradley!";
console.log(regEx[2].test(str3));
console.log(regEx[3].test(str3));
console.log(regEx[4].test(str3));

//This string is valid for these cases
let str4 = "I ate 36 tacos!";
console.log(regEx[5].test(str4));
console.log(regEx[6].test(str4));

let str5 = "barrel"
console.log(regEx[7].test(str5));

let str6 = "abcdef abcDEF";
console.log(regEx[8].test(str6))

let str7 = "gingerI_$.$Sa_$8..@nI_$..cE_$4...net";
console.log(regEx[9].test(str7));

let str8 = "Switch: (O_n)"
console.log(regEx[10].test(str8));