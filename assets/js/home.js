//hide the scroll animation when not on top of the page
function toggleScrollAnimation(){
  if(!(window.scrollY==0)){
    document.getElementById("scrollPageAnimation").style.display="none";
  }
  else{
    document.getElementById("scrollPageAnimation").style.display="block";
  }
}

function toggleVideoOpacity(){
  if(window.scrollY>=750){
    document.getElementById("introVideo").style.filter="blur(1.5em)";
  }
  else if(window.scrollY>=725){
    document.getElementById("introVideo").style.filter="blur(1.375em)";
  }
  else if(window.scrollY>=700){
    document.getElementById("introVideo").style.filter="blur(1.25em)";
  }
  else if(window.scrollY>=675){
    document.getElementById("introVideo").style.filter="blur(1.125em)";
  }
  else if(window.scrollY>=650){
    document.getElementById("introVideo").style.filter="blur(1em)";
  }
  else if(window.scrollY>=625){
    document.getElementById("introVideo").style.filter="blur(.875em)";
  }
  else if(window.scrollY>=600){
    document.getElementById("introVideo").style.filter="blur(.75em)";
  }
  else if(window.scrollY>=575){
    document.getElementById("introVideo").style.filter="blur(.625em)";
  }
  else if(window.scrollY>=550){
    document.getElementById("introVideo").style.filter="blur(.5em)";
  }
  else if(window.scrollY>=525){
    document.getElementById("introVideo").style.filter="blur(.375em)";
  }
  else if(window.scrollY>=500){
    document.getElementById("introVideo").style.filter="blur(.25em)";
  }
  else if(window.scrollY>=475){
    document.getElementById("introVideo").style.filter="blur(.125em)";
  }
  else{
    document.getElementById("introVideo").style.filter="blur(0)";
  }  
}

addEventListener("scroll", ()=>{
  toggleScrollAnimation();
  toggleVideoOpacity();
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