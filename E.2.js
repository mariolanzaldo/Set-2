let output;
// A
let str1 = "Sep 29, 1972";
output = /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(\s*\d{0,2}\s*),(\s*\d{4})/g.test(str1);
console.log(output);

//B
let str2 = "52x";
output = /\D(\d+)|\d(\D)/g.test(str2);
console.log(output);

//C
let str3 = "program.cpp";
output = /^[\D]+\.(txt|java|cpp)/g.test(str3);
console.log(output);

//D
let str4 = "_1a1_";
output = /\b(\w)?(\w)\w?\2\1/g.test(str4);
console.log(output);

//E
let str5 = "“Bee zapp Crow Eagle Zorro  mouse Ape  you";
output = str5.match(/\b[b-yB-Y][b-yB-Y]*\b/g).map(function (val) {
    return val
});
console.log(output);

//F
let str6 = "“Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";
output = str6.match(/<(.*?)>(.*?)<\/(.*?)>/g).map(function (val) {
    return val.replace(/<[^<>]+>/g, '');
});

console.log(output);
