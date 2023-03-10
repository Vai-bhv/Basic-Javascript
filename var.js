// // es6
// // hoisting
// console.log("line no 3", varName);
// // declaration
// var varName
// console.log("line no 6", varName);
// // assignment
// varName = 10
// console.log("line no 9", varName);
// // reassignment
// varName = 20
// console.log("line no 13", varName);
// var varName
// console.log("line no 14", varName);14

// function fn() {
//     console.log(a);
//     var a = 10
//     console.log(a);
//     if (a == 10){
//         var a 
//         console.log(a);
//     }
//     console.log(a);
// }
// fn()


var a = 10
console.log("line 30", a);
function fn() {
    console.log("line 32", a);
    var a = 20
    a++
    console.log("line 35", a);
    if(a){
        var a = 30
        a++
        console.log("line 39", a);
    }
    console.log("line 13", a);
}
fn()
console.log("line 30", a);
