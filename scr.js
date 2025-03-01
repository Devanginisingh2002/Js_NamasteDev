// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName(){
//     console.log("first");
// }

// How functions work in JS
// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }


// Shortest Program in JavaScript
// var a = 10;
// function check(){
//     var x = 100;
//     return x;
// }

// console.log(this.a);
// console.log(window.a);
// console.log(a);
// console.log(check());


// The scope chain: Ep: 7
// function a(){
//     c()
//     function c(){
//         console.log(b);
//     }
// }
// var b = 10;
// a();

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
function x(){
    var a = 7;
    function y(){
        console.log(a);
    } 
    y();
}
x();