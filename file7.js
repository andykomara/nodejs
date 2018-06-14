function Class(sno,sname){
    this.sno=sno;
    this.sname=sname;
}
Class.prototype.display=function(){
console.log(this.sno+" "+this.name);
return {chain:function(){
    console.log("This is a function");
}}
}
var obj = new Class(12,"ramesh");
obj.display().chain();