function callthis(p,q,r){
    q(greet(p));
    r(greet(p));
}
function greet(j){
    return "Hello"+j;
}
callthis("chris",function(a){
    console.log("Hey!"+a);
},
function(b){
    console.log("Hey"+b);
});