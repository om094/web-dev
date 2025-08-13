//objects->is the the collection of key value pairs
 let obj={
name:"om",
age: 22,
weight: 71,
height:"5.5",
greet: function(){
console.log("good morning");
}
};
console.log(obj);
obj.greet();
//shallow copy
let obj1={
name:"om",
age: 22,
weight: 71,
height:"5.5",
greet: function(){
console.log("good morning");
}
};
let obj2=obj1;
obj2.age=23;
console.log(obj1);
console.log(obj2);
//deep copy




//arrays->collection of items->items can be premitive or non-primitive
 //creation of array


 let arr=[1,2,3,4,5];
 console.log(arr);

 //array constructor
let a=new Array("om",1,true);
console.log(a[0]);
a.push("how u doin'");
console.log(a);
//build in methods in arr->push,pop,shift,unshift,slice,splice,map,filter,reduce,sort,indexof,find

//shift->remove the firstmost element
//unshift->add element in the first
//slice->remove a  part from the array 
 //splice->remove a part from the array and add a new part
  let c=[10,20,30,40,50];
  let ans =c.map((number)=> {
return number*number;

 }) 
 console.log(ans);
 //filter
 let ans1=c.filter((value)=>
{
    if(typeof(value)=='number')
        return true;
    else false;
}
)
console.log(ans1);

//reduce ke andarr aata h accumulator aur current
let d=[10,20,30,40];
 let ans2=d.reduce((acc,crr)=>{
  return acc+crr;
 },0)
 console.log(ans2); 


 //arrays with function
 let crr=[10,20,30,40,50];
function gets(crr){
  let sum=0;
  crr.forEach((value)=> {
    sum=sum+value;
  })
  return sum;
}
let totals=gets(crr);
console.log(totals);
