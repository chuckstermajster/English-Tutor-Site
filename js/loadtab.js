function loadTab(e, tabId){
    
 
 var i, tablink, tabcontent;
 tablink = document.getElementsByClassName("tablink");
 for (i = 0; i < tablink.length; i++){
     tablink[i].className = tablink[i].className.replace(" active", "");
 }
 tabcontent = document.getElementsByClassName("tabcontent");
 for(i = 0; i < tabcontent.length; i++){
     tabcontent[i].style.display = "none";
 }
 document.getElementById(tabId).style.display = "block";
 e.currentTarget.className += " active";
 
}
 
