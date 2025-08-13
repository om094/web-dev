//classes have two parts state(property) and behaviour(functionality)
class human {
    //properties
    //default set as public
    age ;
    #weight=71;//private
    height ;

    // constructor
    constructor(age, height,weight){
        console.log("constructor is called!");
        this.age=age;
        this.height=height;
        this.#weight=weight;
    }
    //behaviour
    greet() {
        console.log('my name is om shivam and my weight is:',this.#weight);//using private member

    }
    walking() {
        console.log("i am walking");

    }
    //If we want to use a private class outside then we have to use the concept of getter and setter
    get fetchWeight(){
         return this.#weight;
          
    }
    set modifyWeight(val){
         this.#weight=val;
    }
    // we use getter and setter to add on scemantic clarity  encapsulation  to provide data protection


}
 

//creating an object
let a = new human(21,165,71);
a.greet();
a.walking();
console.log("Age:", a.age);
//console.log("Weight:", a.weight);
console.log("Height", a.height);

let b=new human(22,189,80);
console.log(b.fetchWeight);

 