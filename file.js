function callme(p){
    console.log("function line 1");
    p("San","India");
    console.log("function line3");
}//function with function as a parameter
callme (function(a,b){
console.log("this is called back"+a);
console.log("a value is :"+a)
console.log("a value is :"+b)
});