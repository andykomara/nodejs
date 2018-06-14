// var a=20;
// function test(){
//     var a=30;//
//     console.log("inside"+a);{
//         var a=45;
//         console.log("within block"+a);
//     }
//     console.log("outside block"+a)
// }
// test();

// for(var a =5;a<40;a++)
// {

// }
// console.log(a);

//2nd approach
// var a=20;
// function test(){
//     let a=30;//let is for local variables
//     console.log("inside"+a);{
//         let a=45;
//         console.log("within block"+a);
//     }
//     console.log("outside block"+a)
// }
// test();

// for(let a =5;a<40;a++)
// {

// }
// console.log(a);

var a=20;
const b=45;
function test(){
    let a=30;//
    console.log("inside"+a);{
        let a=45;
        console.log("within block"+a);
    }
    console.log("outside block"+a)
}
test();

for(let a =5;a<40;a++)
{

}
console.log(a);