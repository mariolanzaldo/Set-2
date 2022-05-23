function cycleStr(str) {
    let output = str.replace(/[a-z0-9]/gi, char => {
        let code = char.charCodeAt();
        let shift = code >= 48 && code <= 57 ? 48 : code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
        if (code >= 48 && code <= 57) {
            return String.fromCharCode(Math.round((code - shift + 1) % 10) + shift);
        } else {
            return String.fromCharCode(Math.round((code - shift + 1) % 26) + shift);
        }
    });
    return output;
}

function hashCreator(hash) {
    let div = document.querySelector('.text');
    const text = div.innerHTML;
    const match = text.match(hash);
    if (match !== null) {
        let rep = `<a href=https://twitter.com/hashtag/${hash}?src=hashtag_click>#${hash}</a>`;
        let newText = div.innerHTML.replace(hash, rep);
        div.innerHTML = newText;
    } else {
        throw new Error('The word is not in text');
    }
}

function palindrome(text) {
    text = text.toLowerCase();
    const regexp = /\b(\w?)(\w?)(\w?)(\w?)(\w?)(\w?)(\w?)(\w?)(\w?)(\w)\S?\10\9\8\7\6\5\4\3\2\1\b/g;
    const found = text.match(regexp);
    return found;
}

function translate(paragraph) {
    const regexp = /(.+)((\r?\n.+)*)/g;
    const translate = '1337 $|>34|<';
    const translation = paragraph.replace(regexp, translate);
    return translation
}

//A
console.log(cycleStr('ZaK89'));

//B
hashCreator('yolo');

//C
const text = `A racecar is just passing through my radar, Wow!`;
console.log(palindrome(text));

//Optional
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quis sunt consequuntur, quasi inventore a in quod! Molestias, numquam. 
Nostrum illum sunt eum ullam accusamus facilis ab ea explicabo rem.Ex soluta a iure porro ipsum in. Laboriosam asperiores soluta iusto tempore labore accusamus praesentium veritatis.`;
console.log(translate(paragraph));
