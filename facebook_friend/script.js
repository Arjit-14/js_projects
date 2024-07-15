addbtn = document.querySelector(".add");
msg = document.querySelector(".title");

var check = 0;

addbtn.addEventListener("click", function (){
if(check === 0)
{
    msg.innerHTML="Friend";
    addbtn.innerHTML="Remove";
    addbtn.style.backgroundColor="grey";
    check = 1;
} 
else
{
    msg.innerHTML="Stranger";
    addbtn.innerHTML="Add Friend";
    addbtn.style.backgroundColor="green";
    check = 0;
}
});
