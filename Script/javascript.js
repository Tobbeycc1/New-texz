function opennav(){
    document.getElementById("open").style.display="none";
    document.getElementById("nav").style.display="block";
    document.getElementById("logo").style.display="none";

}
function closenav(){
    document.getElementById("open").style.display="block";
    document.getElementById("nav").style.display="none";
    document.getElementById("logo").style.display="block";
}
function dontleave(){
    document.getElementById("dont-leave-pls").style.display="block"
}
function continuetyping(){
    document.getElementById("dont-leave-pls").style.display="none"
}
function showprofilebox(){
    document.getElementById("profle-option-box").style.display="block"
}
function dontshowprofilebox(){
    document.getElementById("profle-option-box").style.display="none"
}
function preloader() {
  
    setTimeout(function(){document.getElementById("preloader-image").style.display= "none"}, 1000);
    setTimeout(function(){document.getElementById("square").style.display= "none"}, 1000);
    setTimeout(function(){document.getElementById("love").style.display= "block"}, 1000);
    
} 
