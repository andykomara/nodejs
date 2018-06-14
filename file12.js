/*Arrow Function*/

var a=function(){
    return"Hello World!!!"
}
console.log(a());
//up es 5 down es 6
var b=()=>"Hello";
console.log(b());

//new approach

var n=(z)=>""+z;
console.log(n("Raj"));

//
var test=()=>{
    console.log("line1");
    console.log("line2");
}

test();