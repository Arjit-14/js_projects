let spanElement=document.querySelector("span");
const buttonElement=document.querySelector("button");

buttonElement.onclick=()=>{
    let name=prompt("Enter your name");
    spanElement.innerText=name;
}