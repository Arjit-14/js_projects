// var arr=[133,43];

// arr.forEach(function (val,indx){
//     console.log(val, indx);
// })

// var cr="";
// var cr;
// arr.forEach(function (val){
//     cr+="hello";
// })
// console.log(cr);

var arr=[
    {
        dp: "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg",
        story: "https://img.freepik.com/free-photo/young-african-girl_23-2148852699.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1719705600&semt=ais_user"
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t7Ud6jg0ghZsTXwWTp10Qea7NCKD3OqOBQ&s",
        story: "https://www.livemint.com/lm-img/img/2024/07/01/600x338/India-s-Virat-Kohli--L--and-captain-Rohit-Sharma-p_1719817524941_1719817535814.jpg"
    },
    {
        dp: "https://www.hindustantimes.com/ht-img/img/2024/06/30/550x309/rohit_sharma_1_1719773259116_1719773266714.png",
        story: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/384100/384121.jpg"
    }, 
    {
        dp: "https://c.ndtvimg.com/2024-06/4a29qmcg_jasprit-bumrah-twitter_625x300_10_June_24.jpg?im=FitAndFill,algorithm=dnn,width=806,height=605",
        story: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/jasprit-bumrah-304952398-16x9_0.jpg?VersionId=G2T4hQyXw0shz2DWsM1knnD_ZPn_6dLO&size=690:388"
    },
    {
        dp: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/384000/384077.10.jpg",
        story: "https://c.ndtvimg.com/2024-07/o06pvk18_rohit-sharma-hardik-pandya-x_625x300_01_July_24.jpg?im=FitAndFill,algorithm=dnn,width=240,height=180"
    },
];

var stry="";
arr.forEach(function (val,idx){
    stry+=`<div class="story">
           <img id="${idx}" src="${val.dp}">
           </div>`
})

var storiyan =document.querySelector(".storiyan");

storiyan.innerHTML=stry;

let stories = document.querySelectorAll(".story");
scren=document.querySelector(".full-screen");

stories.forEach(function (val){
    val.addEventListener("click", function (evt){
        scren.style.display="block";
        scren.style.backgroundImage=`url(${arr[evt.target.id].story})`

        setTimeout(function(){
        scren.style.display="none";
        },2500)
        // console.log(arr[evt.target.id].story);
    })
})


