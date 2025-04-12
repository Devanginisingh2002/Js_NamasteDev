'In file: Ep: 1 to Ep: 4'
"Ep:1 -> How JS Works & Execution Context."
"Everything in JS happens inside an Execution Context"
/*
o-> Execution Context: A big container, consist MEMORY & CODE.
|-----------------------------------------|
|    MEMORY         |      CODE           |
| (Variable Envt)   |(Thread of Execution)|
|-----------------------------------------|
|   Variable,       |   Code Execution    |     
|   function        |                     |
|   stored as       |                     | 
|   key, value      |                     | 
|   pair.           |                     | 
|                   |                     | 
|___________________|_____________________|


o-> MEMORY: (Also k/w as Variable envt) -> All variable, fxn stored as key/value pair.
o-> CODE: (Also k/w as Thread of Execution) -> Code run one at a time.

o-> JS is a Synchronous(in-sequence) single-threaded language
*/

"// Ep:2 -> How JS code is Executed? & Call Stack.";
"code";
/* var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

o-> Execution Context for above code

|-----------------------------------------|
|    MEMORY         |      CODE           |
| (Variable Envt)   |(Thread of Execution)|
|-----------------------------------------|
|   n: undefined,   |   Code Execution    |     
| square: {...} fxn |                     |
| square2: undefined|                     | 
| square4: undefined|                     | 
|                   |                     | 
|                   |                     | 
|___________________|_____________________|

o-> 'return keyword': Done with the work of function, now give the control to the execution context, where function is invoke.

o-> 'callstack': Managing Execution context in JS, call-stack maintains the order of execution of execution contexts.

o-> 'callstack' also known as these following names
    + Execution Context Stack
    + Program Stack
    + Control Stack
    + Runtime Stack
    + Machine Stack
*/

"Ep: 3 -> Hoisting in JS:";
"We can access function variable, without even intialising it, Before invoking or calling function => memory is already allocated.";
/*
case 1: 
    var x = 7;
    function getName() {
        console.log("Hello");
    }
    getName();
    console.log(x);

++---> OUTPUT: Hello, 7

case 2:
        getName();
        console.log(x);
        var x = 7;

        function getName() {
        console.log("Hello")
        }
++---> Hello, undefined

case 3: 
        getName();
        console.log(x);
        function getName() {
            console.log("Hello");
        }
++---> Hello, error

o-> These are aboves examples are the phenomena of HOISTING.

o-> NOT-DEFINE(Not defined in the code) & UN-DEFINED(Intialise in the code)

*/

"Ep: 4 --> How function works in JS: Global Execution Context";
/*
var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}
*/
