 let showBox = document.getElementById("showBox");
 let mainPic = document.getElementById("main-pic");
 let pic =document.getElementById("pic");
 let picOne =document.getElementById("pic1");
let picTwo =document.getElementById("pic2");

showBox.addEventListener("wheel" , (evt) => {
    evt.preventDefault();
   showBox.scrollLeft += evt.deltaY;
   showBox.scrollRight -= evt.deltaY;
   
});

mainPic.addEventListener("click" ,  ()=>{
    showBox.style.transition = "0.5s";
    showBox.scrollLeft -= 4000;
   });

pic.addEventListener("click" ,  ()=>{
    showBox.style.transition = "0.5s";
    showBox.scrollLeft += 1100;
   });

   pic.addEventListener("click" ,  ()=>{
    showBox.style.transition = "0.5s";
    showBox.scrollRight -= 1100;
   });

   picOne.addEventListener("click" ,  ()=>{
    showBox.style.transition = "0.5s";
    showBox.scrollLeft += 1100;
   });

   picTwo.addEventListener("click" ,  ()=>{
    showBox.style.transition = "0.5s";
    showBox.scrollLeft += 1100;
   });

//////////////////////////////////Testimonial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let moveContainer = document.getElementById("answer-box");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


moveContainer.addEventListener("wheel" , (evt) => {
    evt.preventDefault();
   moveContainer.scrollLeft += evt.deltaY;
   moveContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click" ,  ()=>{
   moveContainer.style.scrollBehavior = "smooth";
   moveContainer.scrollLeft += 900;
});

backBtn.addEventListener("click" ,  ()=>{
   moveContainer.style.scrollBehavior = "smooth";
   moveContainer.scrollLeft -= 900;
});
