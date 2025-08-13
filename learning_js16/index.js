//BROWSER EVENTS
// moniterEvents(document);
// //event target---> is the entity in which the event is recieved  
// //event lsiterner---> is the function that is called when the event is recieved 

// function textChange(event){
//     console.log(event );
// let fpara=document.getElementById('fpara');
// fpara.textContent="hello om";
// } 
 

// fpara.addEventListener('click',textChange);
 
//remove
// fpara.removeEventListener('click',textChange);
 

//phase of event
//caturing phase-> in this phase the event is recieved
// bubbling phase-> in this phase the event is recieved
 

//add event listner by default bubbling phase me add hote rehta h aur isiko capturing phase me add karne k liye ->ek value (capturing value)ko
//  true pass karani hoti h

//EVENT OBJECT-->8:27:41 


 //DEFAULT ACTION

 let anchorElement=document.getElementById("a");
 anchorElement.addEventListener("click",function (event) {
    event.preventDefault();
    anchorElement.textContent="click done";
    
 }); 