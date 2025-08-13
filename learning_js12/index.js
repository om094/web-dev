//Error handling in JS
 
//error is an event which actually distrupt the natural flow of code
//error is of two types
//1.Compile-Time->happens during parse stage no need to execute the code 
//console.log(1;  =>syntax error
//2.Run Time=>found when the code is executing
 //console.log(x);->but x is not declared earlier

 // handling=>try-catch block
  try{
    console.log("try block start here!");
    
    console.log(x);//reference error
    console.log("try block end here!");
  }
catch(err){
    //define karte h error k sath kya karna h
    //ya phir logic retry
    //fallback mechanism
    //custom error
    //logging
    console.log("I am inside catch block!");    
    console.log("your error is here:",err);
     
}

//Finally Block=>this block will run whether there is error or not
finally{
    console.log("I am is finally block!");

} 
//how to show,propogate,return error willingly=>by using [throw] keyword. 
 try{
   
    console.log(x);//reference error
  }
catch(err){
    throw new Error("bhai reference error h!=>phele decrale karo phir print karna");
    
}
let errorcode =100;
if (errorcode==100) {
    throw new Error("invalid Json");
    
} 