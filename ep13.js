/********** SetTimeout + Closures ***********/
//1
function x(){
    var i = 1;
    setTimeout(() => {
        console.log(i)
    }, 1000);
    console.log("first")
}
x();

// 2 
function x(){
    for(var i=1; i <= 5; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
    console.log("first")
}
