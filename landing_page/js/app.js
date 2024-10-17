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

  var swiper = new Swiper(".swiper_ourwork", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper = new Swiper(".swiper_reviews", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 3000
  });

let bar = document.getElementById("bar")
let filled = document.getElementById("filled")




function getCenterBarIndex() {
  const bars = document.querySelectorAll('.step_numberInfo');
  const viewportHeight = window.innerHeight;

  let centerBarIndex = -1;
  let closestDistance = viewportHeight;

  bars.forEach((bar, index) => {
    const rect = bar.getBoundingClientRect();
    
    const barCenter = rect.top + rect.height / 2;
    const distanceFromCenter = Math.abs(barCenter - viewportHeight / 2);
    
    if (distanceFromCenter < closestDistance) {
      closestDistance = distanceFromCenter;
      centerBarIndex = index;
    }
  });
  return centerBarIndex; 
}

const logicColor = (centerBarIndex) =>{
  if(centerBarIndex == 0){
    filled.style.height = "0%"
    let a = document.querySelectorAll('.step_numberInfo .number')
    for (let index = 0; index < a.length; index++) {
      if(index <= centerBarIndex){
        a[index].classList.add("number_filled")
      }else{
        a[index].classList.remove("number_filled")
      }
      
    }
  }
  if(centerBarIndex == 1){
    filled.style.height = "35%"
    let a = document.querySelectorAll('.step_numberInfo .number')
    for (let index = 0; index < a.length; index++) {
      if(index <= centerBarIndex){
        a[index].classList.add("number_filled")
      }else{
        a[index].classList.remove("number_filled")
      }
      
    }
  }
  if(centerBarIndex == 2){
    filled.style.height = "65%"
    let a = document.querySelectorAll('.step_numberInfo .number')
    for (let index = 0; index < a.length; index++) {
      if(index <= centerBarIndex){
        a[index].classList.add("number_filled")
      }else{
        a[index].classList.remove("number_filled")
      }
      
    }
  }
  if(centerBarIndex == 3){
    filled.style.height = "100%"
    let a = document.querySelectorAll('.step_numberInfo .number')
    for (let index = 0; index < a.length; index++) {
      if(index <= centerBarIndex){
        a[index].classList.add("number_filled")
      }else{
        a[index].classList.remove("number_filled")
      }
      
    }
  }
}

window.addEventListener('scroll', () => {
  const centerBarIndex = getCenterBarIndex();
  logicColor(centerBarIndex)
  
});

window.addEventListener('resize', () => {
  const centerBarIndex = getCenterBarIndex();
  logicColor(centerBarIndex)
});

const initialCenterBarIndex = getCenterBarIndex();
if (initialCenterBarIndex !== -1) {
    logicColor(initialCenterBarIndex)
}

