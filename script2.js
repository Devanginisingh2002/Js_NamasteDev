'In file: Ep: 9 & Ep: 10'
"Ep: 9: Block Scope & Shadowing in JS";
/*
 * { }: Block
 * Block / Compound Statement: Combining multiple JS statements, in a block, that we can use it where JS expects one statement.
 
 * Block Scope: Variable, fxns access in the block.
 * 'let' & 'const' are blocked scope. 
eg: 
    {
        var a = 10;
        let b = 100;
        const c = 1000;
        console.log(a, b, c);
    }
    console.log(a)

* Shadowing in JS
* case 1: Here, The inside block 'var' shadow the outside 'var' variable 
var a = 10;
{
    var a = 20;
    let b = 30;
    const c = 40;
    console.log(a)
    console.log(b)
    console.log(c)
}

* case 2: It shadow the variable 'a' and modify the variable 'a' as well.
* As it's pointing to the same memory location (line no.37 & line no. 41).
* Outside a is in global space, but when it runs global space variable change value with block variable a.
var a = 10;
{
  var a = 20;
  let b = 30;
  const c = 40;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
case 3: let & const, for both, we have two different scope's.
let b = 10; // global scope
{
    var a = 20;
    let b = 30;  //block scope
    const c = 40;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(b);

* SHADOW (SAME WITH FXN)
const c = 100;
function x() {
    const c = 30;
    console.log(c)
}
x();
console.log(c);

* Illegal Shadowing
let a = 20;
{
    var a = 20;
}
*/

"EP: 10: Closures in JS";
"A fxn along with its lexical scope, bundle together forms a closure.";
/*
function x() {
    var a = 7;
    function y(){       // fxn 'y' forms a closure
        console.log(a);
    }
    y();
}
x();

* FXN VARIATION'S 
1. Assign fxn as variable:
eg: function x(){
    var a = function y(){
        console.log(a)
    }
}

2.We can pass function in calling:
eg: function x() {
    var a = 7;
    y();
} x(function y() {
    console.log(a);
})

3. Return these functions out of the funciton
eg: function x() {
    var a = 7;
    return function y() {
        console.log(a)
    }
    x();
}

* OUTPUT: 
(1).
function x() {
    var a = 7;
    function y() {
        console.log(a);
        }
        a = 100;
        return y;
        }
        var z = x();
        console.log(z);
        z();
    output: fxn y() {clg(a)}, 100
    Concept: A fxn reference to the those variable's which is 'a'.
             A value '7' doesn't stay but the refernce to 'a' stays.

(2). function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        } y();
    }x();
}z();
Output: 7, 900
Concept: Here 'y' forms a closure with scope 'x' & 'z'.

* Uses of Closure:
1. Module Design pattern
2. Memoize
3. Iterators
4. Currying
5. Fxn like 'once'
6. Set timeouts
7. Maintaing state in async world.

*/
