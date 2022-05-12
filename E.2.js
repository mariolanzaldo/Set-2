let output;
// A
let str1 = "September 29, 1972";
output = /(January|February|March|April|May|June|July|August|September|October|November|December)(\s*\d{0,2}\s*),(\s*\d{4})/gi.test(str1);
isValid(output);

//B
let str2 = "52x";
output = /\D(\d+)|\d(\D)/g.test(str2);
isValid(output);

// //C
let str3 = "program.cpp";
output = /^[\D]+\.(txt|java|cpp)/g.test(str3);
isValid(output);

// //D
let str4 = "_1a1_";
output = /\b(\w)?(\w)\w?\2\1/g.test(str4);
isValid(output);

// //E
let str5 = "“Bee zapp Crow Eagle Zorro  mouse Ape  you";
output = str5.match(/\b[b-yB-Y]+\b/g).map(function (val) {
    return val
});
isValid(output);

// //F
let str6 = "Is <b>4 < -1/12</b> true? The <a>answer</b> will <em>surprise</em> you < b > yes</b>.";
output = str6.match(/<([A-Za-z][A-Za-z]*(?=\S))\b[^>]*>.*?<\/\1>/g).map(function (val) {
    return val.replace(/<[^<>]+>/g, '');
});
isValid(output);

function isValid(element) {
    if (Array.isArray(element)) {
        console.log(element);
    } else if (element) {
        console.log(`This is a valid input!`)
    } else {
        console.error('Not a valid string');
    }
}
