//call stack and hoisting
//hoisting->variable declarations are moved to the top of the scope
//function hoisting
function sayMyName(finalName){
    console.log(finalName);
}
sayMyName("om");
//variable hosting=>declaraction not the assigned value move to the current scope
 var age=25;
 console.log(age);
//class hoisting
class Human{

}
const obj1=new Human();

//function call stack(stored in lifo format)
//functions are called first class citizens because=> assign to variable,as arguement,function return,function used in ds,as property(in obj)
 
function sayMyName(finalName){//asign to variable
    console.log(finalName);
}
sayMyName("om");

 
//return
function solve(number){
    return function(number){
        return number*number;
    }

}
 let a=solve(69);
// console.log(a);
 let finalAns=a(10);
 console.log(finalAns);

 //data structure
 const brr=[
    function (a,b){
        return a+b;
    },
    function( a,b){
        return a-b
    },
    function(a,b){
        return a*b;
    }

]
let first=brr[0];
let ans=first(5,10); 
console.log(ans);
 
 let obj={
    age:22,
    weight:71,
    height:5.5,
    greet:function(){
    console.log("helloji")
     }

    }
    console.log(obj.age);
obj.greet();
 