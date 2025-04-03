// let and var in JS: Ep: 8;
// console.log(c);
// let a = 10;
// var b = 100;
// const c = 909;

//attach with window object
// let a = 10;
// console.log(a);
// var b = 100;


// Ep: 9
// var a = 100;
// {
//     var a = 20;
//     let b = 30;
//     const c = 40;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

// EP: 10
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     } 
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// //output of the code
// function x(){
//     var a = 7;

//     function y() {
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z = x();
// console.log(x);
// z();

// //2
// function z(){
//     var b = 900
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a, b)
//         }
//         y()
//     }
//     x()
// }
// z()