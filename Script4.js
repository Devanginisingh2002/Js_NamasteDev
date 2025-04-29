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



"EP: 17 -> setTimeout (Trust Issues)"
// eg:

console.log("first")
setTimeout(function cb() {
    console.log("call_back");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("while loop end");
