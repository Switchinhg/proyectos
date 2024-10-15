document.getElementById("BtnClick").addEventListener("click",e =>{
    posthog.capture('getrStartedClick', { clicked: true, time: new Date()})
})


var swiper = new Swiper(".swiper_trusted", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 3000
  });