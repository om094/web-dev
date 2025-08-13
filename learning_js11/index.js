//Object Cloning  

let obj={
    age:21,
    wt:71,
    ht:165
}
console.log(obj);
obj.color="brown";
console.log(obj);
//3 ways in which we can clone obj


//  1.use spread operator {...}
 
let src={
    age:10,
    wt:21,
    ht:121
}
let des={...src};
console.log("src:",src);
console.log("des:",des);

//2.assign method

 let dest=Object.assign({},src);
   
// 3. iteration
 let src1={
    age:10, 
    wt:21,
    ht:121
}
let des1={};
 for(let key in src1){
    let newKey=key;
    let newVal=src[key];
    des1[newKey]=newVal;
 }
 console.log("src:",src1);
console.log("des:",des1);
 

//garbage collector=>used in memory management its prime focus is to free the memory which is no longer in 
// use to increase the performace of the code and also to prevent memory leaks. gc always run  in the background


 