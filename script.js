let images = [{
    img: "images/banner.png",
    nameLink:"banner-1"
  }, {
    img: "images/banner_2.png", 
    nameLink:"banner-2"
  }, {
    img: "images/banner_3.png",
    nameLink:"banner-3"
  }, 
];

function initSlider() {
    if(!images || !images.length) return; //если images нет или пуст, то выходим из функции

    let sliderImages = document.querySelector(".background-karusel");
    let sliderDots = document.querySelector(".slider__dots");

    initImages();
    initDots();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active": ""}" style="background-image: url(${images[index].img});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }
    
    function initDots() {
        images.forEach((image, index) => {
          let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
          sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
            sliderDots.querySelector(".active").classList.remove("active");
            this.classList.add("active");
          })
        })
      }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
      }
  }
  document.addEventListener("DOMContentLoaded", () => {   //можно аргументом после запятой и события написать просто: initSlider
    initSlider()
  })