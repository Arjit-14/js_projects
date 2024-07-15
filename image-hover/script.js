// var e1=document.querySelector("#elem1");
// var e1_img=document.querySelector("#elem1 img")

// e1.addEventListener("mousemove",function(evt){
//     e1_img.style.opacity="1";
//     e1_img.style.left=evt.x+"px";
//     e1_img.style.top=evt.y+"px";
// });

// e1.addEventListener("mouseout", function(){
//     e1_img.style.opacity="0";
// })

var ele = document.querySelectorAll(".elem");
var img = document.querySelectorAll(".elem img");

console.log(ele);

ele.forEach((val)=>{
    // console.log("hello");
    // val.addEventListener("mouseenter", function(){
    //     // console.log("mouse entered");
    // });
    val.addEventListener("mouseout", function(){
        // console.log("mouse left");
        val.childNodes[3].style.opacity=0;
    });
    val.addEventListener("mousemove", function(evt){
        val.childNodes[3].style.opacity=1;
        val.childNodes[3].style.left=evt.x+"px";
    })
})

// ele.addEventListener("mousemove", function(){
//     img.style.opacity="1";
// })
