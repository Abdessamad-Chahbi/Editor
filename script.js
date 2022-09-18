let codes=document.getElementById("codes");
let run=document.getElementById("run");
let delet = document.getElementById("delet");
let result=document.getElementById("result");
run.onclick=()=>{
  result.innerHTML=codes.value ; 
// localStorage.setItem("RESULT" , codes.value);
 };
delet.onclick=()=>{
  result.innerHTML="" ; };
// onload=()=> {
//  codes.value=localStorage.getItem("RESULT") ;
// }