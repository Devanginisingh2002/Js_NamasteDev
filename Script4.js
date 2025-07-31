"In file: Ep: 15 to Ep: 17";

"EP: 15 -> Async JS & Event Loop";
/**
 * JS is synchronous single-threaded language.
 * It has one call-stack.
 * Just do one task at a time.
 * Call-Stack present inside a JS Engine.
 * All JS Code run inside a call-stack.
 * It JS-Engine have to access local-storage, timer or anything from browser: -> WEb APIs (with the help of Web-api it will be available).
 * WEB-APIs: Gives an access to callstack to use these things
 * WEB-APIs as: setTimeout, DOM APIs, fetch(), local-storage, console and location.
 *
 * Event-Loop: It continuously montior the callstack-callback-queue.
 * Microtask-Queue: Same as call-back queue, but high in priority.
 * What comes to Micro-task Queue: All the callback fxn's comes through promises & Mutation Observer (Read about this). And rest things goes on callback Queue as SetTimeout, DOM APIs, and more.
 */

"EP: 16 -> JS Engine";

"EP: 17 -> setTimeout (Trust Issues)";
// eg:

// console.log("first")
// setTimeout(function cb() {
//     console.log("call_back");
// }, 5000);

// console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }

// console.log("while loop end");

"Ep: 18-> Higher Order Functions";
const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

/*
 * logic ek function hai jo batata hai "radius ke saath kya karna hai
 * calculate function us logic ko har radius par lagata hai
 */
/* 
const calculate = function(radius, logic) {
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
*/

// 'Ep: 19 -> Map, Filter & Reduce'

// const arr = [5, 1, 2, 3, 4, 6];
// const output = [];
// function isOdd(x){
//     return x % 2 == 0;
// }
// push.arr();