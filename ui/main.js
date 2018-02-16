console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML="New VAlue";


//Moving the picture on clicking
/*
var img = document.getElementById('madi');
img.onclick=function() {
    img.style.marginLeft='100px';
    
};
*/

//Applying the gradual animation to the image

var img =document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+10;
    img.style.marginleft=marginLeft+'px';
}
img.onclick=function() {
    var interval = setInterval(moveRight,100);
    
};