window.addEventListener("scroll",function(){
 const main=document.querySelector(".main");
 const content=main.getBoundingClientRect().top
 const scrollY=window.scrollY;
 if(content<scrollY){
    main.classList.add("active");
 }else{
    main.classList.remove("active"); 
 }


 const main1=document.querySelector(".main1");
 const content1=main1.getBoundingClientRect().top
 const scrollY1=window.scrollY;
 if(content1<scrollY1){
    main1.classList.add("active1");
 }else{
    main1.classList.remove("active1"); 
 }
});


// window.addEventListener("scroll",function(){
// const main=this.document.querySelector(".main");
// const content= main.getBoundingClientRect().top
// const scrollY=this.window.screenY
// if(content<scrollY){
//     main.classList.add('active');
// }else{
//     main.classList.remove('active');   
// }
// });