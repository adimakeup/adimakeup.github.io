//hide the scroll animation when not on top of the page
function toggleScrollAnimation(){
  if(!(window.scrollY==0)){
    document.getElementById("scrollPageAnimation").style.display="none";
  }
  else{
    document.getElementById("scrollPageAnimation").style.display="block";
  }
}

addEventListener("scroll", ()=>{
  toggleScrollAnimation(); 
})

function showRecommendations(){
  document.getElementById("wrapper").style.display = "flex";
  document.getElementById("body").style.overflow = "hidden";
}

function hideRecommendations(){
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("body").style.overflow = "auto";
}


document.getElementById("recommendations").addEventListener("click",showRecommendations);
document.getElementById("back").addEventListener("click",hideRecommendations);