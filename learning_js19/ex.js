//promise--> 

// let firstPromise = new Promise((resolve, reject) => {
// console.log("om");
// reject(new Error("Internal Server Error"));
// });



//EXAMPLE OF ASYNC CODE

let firstPromise = new Promise((resolve, reject) => {
  setTimeout(function saymyname(){
    console.log("My name is omshivam");
},50000);
 resolve (1);

 });
 

 let promise1=new Promise((resolve, reject) => {
     let success=true;
    if(success){
        resolve("Promise Fullfilled ") ;   
    }
    else{
reject("Promise Rejected");
    }
 });
 promise1.then((message)=>{
console.log("Then ka message is:"+message);
 }).catch((error)=>{

    console.log("Error"+error)
 }

);


//examp

// let promise2=new promise((resolve,reject)=>{
// setTimeout(resolve,1000,"first");
// })
// let promise3 = new promise((resolve,reject)=>{
// setTimeout(resolve,1000,"second");
// })
// let promise3 =new promise((resolve,reject)=>{
// setTimeout(resolve,1000,"third");
// })