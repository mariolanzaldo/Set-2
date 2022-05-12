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

let output = [];

let str1 = "www.regExp.com/.abc.html"
isAllowed(regEx[0].test(str1));

let str2 = "Hello captain Ahab!!1111";
isAllowed(regEx[1].test(str2));

//This string is valid for these cases
let str3 = "The winner is...a.bradley!";
isAllowed(regEx[2].test(str3));
isAllowed(regEx[3].test(str3));
isAllowed(regEx[4].test(str3));

//This string is valid for these cases
let str4 = "I ate 36 tacos!";
isAllowed(regEx[5].test(str4));
isAllowed(regEx[6].test(str4));

let str5 = "barrel"
isAllowed(regEx[7].test(str5));

let str6 = "abcdef abcDEF";
isAllowed(regEx[8].test(str6));

let str7 = "gingerI_$.$Sa_$8..@nI_$..cE_$4...net";
isAllowed(regEx[9].test(str7));

let str8 = "Switch: (O_n)"
isAllowed(regEx[10].test(str8));

function isAllowed(input) {
    if (input) {
        console.log(`Test approved!`);
    } else if (!input) {
        console.error(`Test failure`)
    }
}
