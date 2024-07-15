main = document.querySelector(".main");

csr = document.querySelector(".cursor");

main.addEventListener('mousemove', function (evt){
    // console.log("hello");
    //    console.log(evt);
    //    console.log(evt.x);
    csr.style.left=evt.x + "px";
    csr.style.top=evt.y + "px";
    // csr.stylr.left=
});