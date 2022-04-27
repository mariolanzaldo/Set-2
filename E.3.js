function cycleStr(str, n) {
    let capitalLetters = [];
    let smallLetters = [];
    let numerics = [];
    for(let i = 1 ; i <= 26; i++){
        capitalLetters.push(i+64);
        smallLetters.push(i+97);
        if(i<=10){
            numerics.push(i+48);
        }
    }

    let output = str.split("").map((char) =>{
        let code = char.charCodeAt();
        let shift = code >=48 && code <= 57 ? 48 : code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
        if(code >= 48 && code <= 57){
            return String.fromCharCode(Math.round((code - shift + n)%10)+shift);
        }else{
            return String.fromCharCode(Math.round((code - shift + n)%26)+shift);
        }
    }).join("");
    return output;
  }

function hashCreator(hash){
    let div = document.querySelector('.text');
    const text = div.innerHTML;
    let match = text.match(hash);
    if (match !== null){
        let rep = `<a href=https://twitter.com/hashtag/${hash}?src=hashtag_click>#${hash}</a>`;
        let newText = div.innerHTML.replace(hash,rep);
        div.innerHTML = newText;
    } else{
        throw new Error('The word is not in text');
    }
}

function palindrome(text){
    text = text.toLowerCase();
    let regexp;

}
//A
console.log(cycleStr('aZ90', 1));

//B
hashCreator('HONORX8');

//C
const text = `Ana does not have any idea how to spell abcba. Please, provide her a palindrome radar to check palindrome count. Wow!`;
palindrome(text);