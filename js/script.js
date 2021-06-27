'use strict'
// document.querySelector('#dot__btn2').addEventListener('click', function(){
//   document.querySelector('.app__container').style.transform = 'translateX(-25%)'
// });
// // document.querySelector('.btn3').addEventListener('click', function(){
// //   document.querySelector('.screen__container').style.transform = 'translate(-50%)'
// // });

$(document).ready(function(){
    $('.service__banner').slick({
      dots: true,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 1300,
  });
});


