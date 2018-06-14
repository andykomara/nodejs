var obj=["1343","5KHK","sam","toy","car","Sdetails.com","Ram","Ravi","Rajkumar","srea@gmail.com"]

//var regex=/^R/;// Strings starting with R
var regex= /["a-zA-Z][a-zA-Z0-9_\.]+@[a-z+[]\.][a-z]{2,5}$")/;

for(var x in obj){
    if(regex.test(obj[x]))
    console.log(obj[x]);
}