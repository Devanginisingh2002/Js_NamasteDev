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
"EP: 12: CRAZY JS Interview -> Closure";

"EP: 13 -> First Class Function -> Anonymous Fxn";
/* Function Statement : The way function was creating is fxn statement.
 * Function statement also known as Function Declaration.
 * eg: function a(){
        console.log("a is called");
    }

*/
// a();
// b();
// function a(){
//     console.log("a is called");
// }
// * Function Expressions
// var b = function b(){
//     console.log('b called')
// }

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

*/
function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", count++);
  });
}

attachEventListener();


class Solution {
    // Function to merge the arrays.
    public void mergeArrays(int a[], int b[]) {
        int n = a.length;
        int m = b.length;
        int gap = nextGap(n + m);
        
        while (gap > 0) {
            int i = 0;
            int j = gap;
            
            while (j < (n + m)) {
                // i-th element
                int first = (i < n) ? a[i] : b[i - n];
                // j-th element
                int second = (j < n) ? a[j] : b[j - n];
                
                if (first > second) {
                    // swap if out of order
                    if (i < n && j < n) {
                        int temp = a[i];
                        a[i] = a[j];
                        a[j] = temp;
                    } else if (i < n && j >= n) {
                        int temp = a[i];
                        a[i] = b[j - n];
                        b[j - n] = temp;
                    } else {
                        int temp = b[i - n];
                        b[i - n] = b[j - n];
                        b[j - n] = temp;
                    }
                }
                i++;
                j++;
            }
            gap = nextGap(gap);
        }
    }
    
    // Helper function to calculate the next gap
    private int nextGap(int gap) {
        if (gap <= 1) return 0;
        return (gap / 2) + (gap % 2);
    }
}
