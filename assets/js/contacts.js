//toggles the specify input when other is inactive
function toggleInput(selectValue){
  if(selectValue=="Other"){
    document.getElementById("specifiedSubject").style.display="block";
  }
  else{
    document.getElementById("specifiedSubject").style.display="none";  
  }
}

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

document.getElementById("subjectSelect").addEventListener("change", ()=>{
  toggleInput(document.getElementById("subjectSelect").value); 
})

document.getElementById("copyContainer1").addEventListener("click", ()=>{
  copyTextToClipboard(document.getElementById("copyContainer1"),7, document.getElementById("copyIcon1"));
})

document.getElementById("copyContainer2").addEventListener("click", ()=>{
  copyTextToClipboard(document.getElementById("copyContainer2"),15, document.getElementById("copyIcon2"));
})