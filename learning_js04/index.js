//functions
function saymyname(){
    console.log("om");
}  
saymyname();
//parameteric function
function print(num){
    console.log("printing number:",num);
}
print(69);


//return function
function getsum(a,b,c){
    let sum=a+b+c;
    return sum;
}
  let ans=getsum(3,4,5);
  console.log(ans);
   

  function fullname(fname,lname){
    let fullname=fname+" "+lname;
    return fullname;
    // return k niche jitne bhi sentence honge wo unreachable honge

  }
  let f=fullname("om","shivam");
  console.log("FULLNAME:",f);
 

  let multiple=function(a,b){
    return a*b; 
  }
  let result=multiple(2,4);
  console.log(result); 

//another way for writing functions
  let exponent= (x,y)=>{
    let ans=x**y;
    return ans;
  }
  let anss=exponent(2,10);
  console.log(anss);