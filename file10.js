class Student{
    // var sno;// we can't declare var for variable names it should be initialized inside the constructor 
    // var sname;
    constructor(sno,sname){
        this.sno=sno;
        this.sname=sname;
    }
    display(){
        console.log(this.sno+" "+this.sname); //always use this for refering the variable
    }
}
 var obj =new Student (12,"Amit");
 var obj1 =new Student (12,"jay");
 obj.display();
 obj1.display();