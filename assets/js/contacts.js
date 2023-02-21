//copies contact info to the clipboard
async function copyTextToClipboard(id, skip, id2){
  valueToCopy = id.value.substring(skip).replaceAll(" ","");
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("id","dummy_id");
  document.getElementById("dummy_id").value = valueToCopy;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  id2.classList.add("contact-information-animation");
  await new Promise(r => setTimeout(r, 500));
  id2.classList.remove("contact-information-animation");
}

async function blinkSocialMedia(){
  document.getElementById("socialMediaLinks").classList.add("social-media-blink");
  await new Promise(r => setTimeout(r,5000));
  document.getElementById("socialMediaLinks").classList.remove("social-media-blink");
}

document.getElementById("copyContainer1").addEventListener("click", ()=>{
  copyTextToClipboard(document.getElementById("copyContainer1"),7, document.getElementById("copyIcon1"));
})

document.getElementById("copyContainer2").addEventListener("click", ()=>{
  copyTextToClipboard(document.getElementById("copyContainer2"),15, document.getElementById("copyIcon2"));
})

document.getElementById("socialMediaButton").addEventListener("click", ()=>{
  blinkSocialMedia()
})