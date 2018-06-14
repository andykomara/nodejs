// function callme(p){
//     p("Europe");
// }

// class Continent{
//     constructor(){
//         this.value="Asia";
//     }
//     changeContinent(){
//         callme(function(data){
//          this.value=data;
//         });
//     }
//     display(){
//        console.log(this.value);
//     }
// }
// var obj =new Continent();
// obj.display();
// obj.changeContinent();
// obj.display();

//new
// function callme(p){
//     p("Europe");
// }

// class Continent{
//     constructor(){
//         this.value="Asia";
//     }
//     changeContinent(){
//         callme(function(data){
//          this.value=data;
//         }.bind(this));//remove upper error
//     }
//     display(){
//        console.log(this.value);
//     }
// }
// var obj =new Continent();
// obj.display();
// obj.changeContinent();
// obj.display();

// Arrow function binds automatically

//new
function callme(p){
    p("Europe");
}

class Continent{
    constructor(){
        this.value="Asia";
    }
    changeContinent(){
        // callme(function(data){
        //  this.value=data;
        // }.bind(this));//remove upper error
        callme((data)=>this.value=data);
    }
    display(){
       console.log(this.value);
    }
}
var obj =new Continent();
obj.display();
obj.changeContinent();
obj.display();


  