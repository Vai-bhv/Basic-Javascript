let singleQuote = '        single quotes ki string       '
let doubleQuote = "doule quote ki string"
// console.log(singleQuote);
// console.log(doubleQuote);

// let char = singleQuote.charCodeAt(2)
// console.log(char);

singleQuote = singleQuote.trim()
console.log(singleQuote);

let arrStr = singleQuote.split(" ")
console.log(arrStr);
let str = arrStr.join("+")
console.log(str);