var container = document.querySelector(".container");
var love=document.querySelector("i");

container.addEventListener("dblclick",function(){
    
    love.style.transform="translate(-50%, -50%) scale(1.5)";
   
    setTimeout(function(){
        love.style.color="red";
        },550);

    setTimeout(function(){
    // love.style.transform="translate(-50%, -50%) scale(0)";
    love.style.opacity="0";
    },1500);
})









// console.log("Hello1");
// console.log("Hello2");

// async working not wait for someone
// setTimeout(function(){
//     console.log("Hello1");
//     console.log("Hello2");
// },2000);
// setTimeout(function(){
//     console.log("Hello3");
//     console.log("Hello4");
// },1000);