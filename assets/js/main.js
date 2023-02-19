let clicked=0;
let hamburger=document.getElementById("hamburger");

//hide the scroll animation when not on top of the page
function toggleHamburger(){
  if(!clicked){
    document.getElementById("mobileMenu").style.display="flex";
    clicked=1;
  }
  else{
    document.getElementById("mobileMenu").style.display="none";
    clicked=0;
  }
  hamburger.classList.toggle("hamburger-active");
  hamburger.classList.toggle("hamburger-middle");
}

hamburger.addEventListener("click", ()=>{
  toggleHamburger(); 
})