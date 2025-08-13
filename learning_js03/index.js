//loops
//traditional loops

for(let i=0;i<10;i++){
    console.log('om shivam');
}
 //continue and break
for(let i=0;i<10;i++){
    if(i===5){
        continue; // skips the rest of the loop when i is 5
    }
    console.log(i);
    if(i===8){
        break; // exits the loop when i is 8
    }
} 
//while loop
let j=0;
while(j<10){
    console.log('shivam');
    j++;
}
//do while loop
let k=0;
do{
    console.log('shivam');
    k++;
}
while(k<10);
//for of loop=>use in arrays,strings etc
let arr = ['shivam', 'om', 'shubham'];
for(let name of arr){
    console.log(name);
}
//for in loop->used for innumberable properties(obj)
let obj = {name: 'shivam', age: 20, city: 'delhi'};
for(let key in obj){
    console.log(key," ",obj[key]);
}               
//for each
let arr1=[10,20,30,40];
let length=arr1.length;
console.log("lenght",length);
arr1.forEach((amount ,index)=>{
console.log('amount:',amount,"index:",index);
})


//strings
// let firstName = 'om';
// let lastName = 'shivam';
// console.log(typeof(firstName)); // string  

// let option1='eng';
// let option2='hindi';
// let finalOption=`${option1} ${option2}`;
// console.log(finalOption); // eng+hindi
// console.log(option1.length); // 3
// console.log(option1.toUpperCase);
// console.log(option2.toLowerCase);


// let str='omshivam'
// console.log(str.substring(2));

// let sentence="My \"Name\" Is OmShivam";
// let words=sentence.split(" ");
// console.log(words);
 