// default parameters
function sayName(myName="om"){
     console.log("My name is:",myName)
} 
  
sayName();

function say(fname="aditya",lname="singh"){
    console.log(fname,lname);

}
say();
say("piyush","singh");

//for objects
function f1(value={age:21,wt:71,height:5.5}){
console.log(value);

}
f1();
//for array
function f2(val=["priyansh","chaudhary"]){
    console.log(val);
}
f2();

//for null->the output will show null
function f3(val=["priyansh","chaudhary"]){
    console.log(val);
}
f3(null);

//for undefined->jo value h wahi jaayega nahi undefined likha hua aayega
function f4(val=["priyansh","chaudhary"]){
    console.log(val);
}
f4(undefined);

//for functions
function getAge(){
    return 69;

}
function f5(name="ryan",age=getAge()){
    console.log("name:",name,",age:",age);
}
f5();