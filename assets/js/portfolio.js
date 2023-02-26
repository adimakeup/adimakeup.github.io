const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselGallery = document.querySelector('#carouselGallery');
const carouselItems = document.querySelectorAll('#carouselGallery li');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const itemWidth = carouselItems[0].offsetWidth;
let currentPosition = 0;

function moveCarousel(position) {
  if(position == 0){
    carouselGallery.style.transform = null;
  }
  else{
    carouselGallery.style.transform = `translateX(${position}px)`;
  }
}

function scrollLeft() {
  currentPosition -= itemWidth;
  if (currentPosition < 0) {
    currentPosition = carouselItems.length * itemWidth - itemWidth;
  }
  moveCarousel(-currentPosition);
}

function scrollRight() {
  currentPosition += itemWidth;
  if (currentPosition > carouselItems.length * itemWidth - itemWidth) {
    currentPosition = 0;
  }
  moveCarousel(-currentPosition);
}

leftArrow.addEventListener('mousedown', () => {
  scrollLeft()
});

rightArrow.addEventListener('mousedown', () => {
  scrollRight()
});

carouselWrapper.addEventListener('touchstart', (e) => {
  const touchStartPosition = e.touches[0].clientX;
  const touchMove = (e) => {
    const touchCurrentPosition = e.touches[0].clientX;
    const touchDelta = touchStartPosition - touchCurrentPosition;
    currentPosition += touchDelta;
    if (currentPosition > 0) {
      currentPosition = 0;
    } else if (currentPosition < -(carouselItems.length - 1) * itemWidth) {
      currentPosition = -(carouselItems.length - 1) * itemWidth;
    }
    moveCarousel(currentPosition);
  };
  const touchEnd = () => {
    document.removeEventListener('touchmove', touchMove);
    document.removeEventListener('touchend', touchEnd);
  };
  document.addEventListener('touchmove', touchMove);
  document.addEventListener('touchend', touchEnd);
});


const images = document.querySelectorAll(".enlargeable");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    this.classList.toggle("enlarge");
    this.classList.toggle("imgBig");
    document.querySelector(".enlarge-background").classList.toggle("visible");
    if(document.getElementById("body").style.overflow == "hidden"){
      document.getElementById("body").style.overflow = "visible"
    }
    else{
      document.getElementById("body").style.overflow = "hidden"
      carouselGallery.style.transform = null;
    }
  });
}