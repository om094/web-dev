//Performance improvement

const t1 = performance.now();
//code 1
for (let i = 0; i < 100; i++) {
  let para = document.createElement("p");
  para.textContent = "this is para" + i;
  document.body.appendChild(para);
}

const t2 = performance.now();

console.log("total time taken by code 1" + (t2 - t1));

//code 2
const t3 = performance.now();

let mydiv = document.createElement("div");
for (let i = 0; i < 100; i++) {
  let para = document.createElement("p");
  para.textContent = "this is para" + i;
  mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();
console.log("total time taken by code 1" + (t4 - t3));

//document fragment--->light weight object in this it does not perform reflow or repaint

//best code
let fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  let para = document.createElement(p);
  para.textContent = "this is para" + 1;
  fragment.appendChild(para);//no reflow or repaint in this line
   
} 
 document.body.appendChild(fragment);//this line takes 1 reflow and 1 repaints 