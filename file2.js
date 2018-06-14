function fun (z){
    z[2]=z[1]+z[0];
}
var p = [12,21];
console.log(p);
fun(p);
console.log(p);
console.log(p[2]);