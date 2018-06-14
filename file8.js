var object={sno:12,name:"Ram",city:"bang"}
object.age=45;
object.skills=['N','C++','C'];
object.print = function(){
    console.log(this.name+" "+this.city);
}
console.log(object);
object.print();