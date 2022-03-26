let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');

}
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = () =>{


   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

//    section.forEach(sec => {
//       let top = window.scrollY;
//       let height = sec.offsetHeight;
//       let offset = sec.offsetTop - 150;
//       let id = sec.getAttribute('id');
// if (top => offset && top < offset + height){
//    navLinks.forEach( links => {
//       links.classList.remove('active');
//       // document.querySelectorAll('header .navbar a[href*='+ id +']').classList.add('active');

//    });
// };
//    })
}
document.querySelector('#search_icon').onclick = () =>{
   document.querySelector('#search_form').classList.toggle('active')
}
document.querySelector('#close').onclick = () =>{
   document.querySelector('#search_form').classList.remove('active')
}
// swiper code
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 7500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   loop:true,
 });
//  review swiper

var swiper = new Swiper(".review-slider", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 7500,
     disableOnInteraction: false,
   },
   loop:true,
   breakpoints: {
      0: {
         slidersPerView: 1,
      },
      640: {
         slidersPerView: 2,

      },
      768: {
         slidersPerView:2,
      }
   }

});
function loader(){
   document.querySelector('.loader_container').classList.add('fade-out');

}
function fadeOut(){
   setInterval(loader, 3000);
}
window.onload = fadeOut;