// // Temporal deadzone -> let const


// // 
// console.log("Hello");
// console.log("varName on line 2", varName);
// // declare
// let varName
// // default -> undef
// console.log("varName on line 2", varName);
// varName = 10
// console.log("varName on line 6", varName);
// varName = 20
// console.log("varName on line 8", varName);
// // let varName


// Const
// const a = 10
// // cant reassign or redeclare
// console.log(a);

// BLOCK SCOPE
// if(true){
//     console.log("hello");
//     console.log("hello");
// }
// {} -> BLOCK
// let fruits = "Apple"
// console.log(fruits);
// {
//     let fruits 
//     console.log(fruits);
//     fruits = 'Oramnge'
//     console.log(fruits);
// }
// console.log(fruits);

// VARIABLE SHADOWING - LEGAL
// const fruits = "Apple"
// console.log(fruits);
// {
//     const fruits = 'orange' 
//     console.log(fruits);
//     // fruits = 'Oramnge'
//     // console.log(fruits);
// }
// console.log(fruits);

// VARIABLE SHADOWING - ILLEGAL
// const fruits = "Apple"
// console.log(fruits);
// {
//     var fruits = 'orange' 
//     console.log(fruits);
//     // fruits = 'Oramnge'
//     // console.log(fruits);
// }
// console.log(fruits);


