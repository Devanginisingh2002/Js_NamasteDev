"Ep: 5: Shortest JS Program"
/* WINDOW: Global Object, It's created by JS engine in global space.
 * Created along with 'Global Execution Context' & with 'this' keyword created.
 * this-keyword: Global Object
 * this  === window: Output -> True
 * If we created any function variable in global space, It attached with WINDOW.
 * Anything which is not inside any function is global Space.
 * JS is weekly typed language, it means it doenot attach's any variable with specfic data-type.
 */

"Ep: 6: UN_Defined vs Not_Defined";
/*
 * UnDefined: Allocated to the Memory 
 * Not-Defined: Not allocated to the Memory.
 * Note: Javascript is weekly/lossly typed language, it means it doesn't attaches any variable with specific data-type.
 
 * Strictly typed: Other language.
 * Conclude: JS is more flexible than other languages.
 * eg: var a;
       console.log(a);
       a = 10;
       console.log(a);
       a = "Hello World"
       console.log(a); 
 */

"Ep: 7: The Scope Chain, Scope & Lexical Environment";
/* 'case 1': 
function a(){
    c()
    function c(){
        console.log(b);
    }
}
var b = 10;
a();
OUTPUT: 10 (It access the variable b)

'case2':
function a(){
    c()
    function c(){
      }
  }
      var b = 10;
console.log(b);
a();
OUTPUT: Error 'b is not defined'

Now, the concept SCOPE comes to the picture.
* SCOPE: Is directly dependent on the Lexical Envt.
* Lexical Envt: Whenever execution context is created, lexical envt. is also created.
* Above example: 'c' fxn lexical inside a fxn and 'a' inside global scope.
* Scope Chain: The whole chain of lexical envt, is scope chain. 
*/

'EP: 8: let & const in JS, Temporal Dead Zone and ERRORS'
/*
 * What is TEMPORAL DEAD ZONE?
 * It is a time let/const variable between hoisted and initalise some value to it.
 
 * 'let & const Declarations are Hoisted'
 * var: global space (Window-object)
 * let/const: Different memory space, we cannt access them before intialisation, NOt acces to window.
 
 * Re-declarations: Cannot possible in let & const. Only possible with var.
 */
'ERRORS: Type Error, Syntax Error, Reference Error.'
/* Type Error: It intialise & declared together. And we cann't assign value's later on.
 * Syntax Error: Missing syntax, duplicate Intialisation.
 * Reference Error: JS Engine tries to find out specfic variable in memory space & cannt find out.
 */

