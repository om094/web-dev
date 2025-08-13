// let paras=document.querySelectorAll('p');
// for (let i = 0; i < paras.length; i++) {
//     let para=paras[i];
//     paras.addEventListener("click",function(){
//         alert("tou have clicked para:"+(i+1));
//     })
    
//instead of doing this do this
let paras=document.querySelectorAll('p');
function alertpara(){
    alert("tou have clicked para:" );

}
 for (let i = 0; i < paras.length; i++) {
    let para=paras[i];
    paras.addEventListener("click",alertpara);
    }