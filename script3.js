"In file: Ep: 11 to Ep: 14";

"EP: 11 -> setTimeout + Closure Interview Question";
/*
 * 1
    function x(){
        var i = 1;
        setTimeout(() => {
            console.log(i)
        }, 1000);
        console.log("first")
    }
    x();
    OUTPUT: first, (after 1 second) 1 prints.
 
* 2    
    function x(){
        for(var i=1; i <= 5; i++){
            setTimeout(() => {
                console.log(i)
            }, i * 1000);
        }
        console.log("first")
    }
    x();
    
    OUTPUT: first, 6, 6, ... so on: Because of closure.
    Expected:  
*/
"EP: 12: JS Interview Question -> Closure";
/* 1. 
    function outer() {
        var a = 10;
        function inner() {
            console.log(a);
        }
        return inner;
    }
    outer();

 * Explanation: i.  Inner fxn variable, access to outer fxn which is a.
                ii. If we return inner, so out of the fxn. it still give's the value of a.

 * 2.
    function outer() {
        function inner() {
            console.log(a);
        }    
        let a = 10;
        return inner;
    }
    outer();

 * Explanation: i.  It still forms a closure.
                ii. Output will be same.

 */

"EP: 13 -> First Class Function -> Anonymous Fxn";
/* Function Statement : The way function was creating is fxn statement.
 * Function statement also known as Function Declaration.
 * eg: function a(){
        console.log("a is called");
    }
 * Anonymous Function: A fxn without name, 
                       Doesn't have own identity.
                       Type of fxn statement but require's name.
                       Anon. fxn used where fxn are used as value.

 * Named fxn Expression: A same as fxn expression with name fxn.
 * First Class fxn: The ability to use fxn as value's is k/n as first class fxn.
 *                  Passing fxn as argument
 *                  Return out of other: First Class fxn.
*/

"EP: 14 -> Callback fxns in JS";
/*
 * Eg: CallBack Fxns
    setTimeout(() => {
        console.log("Hello CallBack");
    }, 5000);
    function x(y) {
        console.log("Hello X");
        y();
    }
    x(function y(){
        console.log("Hello Y");
    })
    Output: Hello X, Hello Y, Hello CallBack(5s)

                 
 * Blocking the Main Thread: JS has only one call-stack(main thread).
 *                          If any operation block the call-stack is Blocking main thread
 *                          
 
 * Garbage Collection and Remove EventListener:  
 *  Why do we need to remove eventListener: Because its heavy & take more memory.
 *                              Our Program becomes slow.
 *                              If we remove, event-listener's will be Garbage collected

*/
